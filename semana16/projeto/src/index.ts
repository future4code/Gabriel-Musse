import { Request, Response } from "express";

import app from "./app";
import connection from "./connection";
import dayjs from "dayjs"

app.put("/user", async (req: Request, res: Response) => {
  try {
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      throw new Error(
        "Check your parameters. Name, nickname and email are required."
      );
    } else {
      await connection("TodoListUser").insert({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      });
      res.status(200).send("User created successfully.");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await connection("TodoListUser")
      .select("id", "nickname")
      .where({ id: req.params.id });
    if (result[0]) {
      res.status(200).send(result[0]);
    } else {
      throw new Error("User not found.");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    if (!req.body.name && !req.body.nickname) {
      throw new Error(
        "Check your parameters. Name or Nickname must be filled and can't be empty."
      );
    } else if (req.body.name === "" || req.body.nickname === "") {
      throw new Error(
        "Check your parameters. Name or Nickname must be filled and can't be empty."
      );
    } else {
      const result = await connection.raw(`
      
      UPDATE TodoListUser
      SET name = "${req.body.name}", nickname = "${req.body.nickname}"
      WHERE id = "${req.params.id}"
      
      `);
      if (result[0].changedRows === 0) {
        throw new Error(
          "No changes were made. Either user doesn't exists or there isn't a change to already existing parameters."
        );
      } else {
        res.status(200).send("User updated sucessfully.");
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/task", async (req: Request, res:Response) => {
    try {
        if (!req.body.title|| !req.body.description ) {
            throw new Error(
              "Check your parameters. Title and description are required."
            );
          }  else if(!req.body.limitDate || dayjs(req.body.limitDate).isValid() === false){
            throw new Error("Invalid date. Please check your format DD/MM/YYYY.")
          } 
          else if(!req.body.creatorUserId || isNaN(req.body.creatorUserId)){
            throw new Error("Check your creator user ID, it must be a number.")
          }
          else {
            await connection("TodoListTask").insert({
              title: req.body.title,
              description: req.body.description,
              limit_date: dayjs(req.body.limitDate).format('YYYY-MM-DD') ,
              creator_user_id: req.body.creatorUserId
            });
            res.status(200).send("Task created successfully.");
          }
    }
    catch (error){
        if(error.message.includes("a foreign key constraint fails"))
        {
            res.status(400).send("Creator user ID not found.");

        } else {
            res.status(400).send(error.message);
        }

    }
});

app.get("/task/:id", async (req: Request, res:Response) => {
    try {
        const result = await connection("TodoListTask")
          .join("TodoListUser", "TodoListUser.id", "=", "TodoListTask.creator_user_id")
          .select({"taskId": "TodoListTask.id"}, "TodoListTask.title", "TodoListTask.description", {"limitDate": "TodoListTask.limit_date"}, "TodoListTask.status", {"creatorUserId": "TodoListTask.creator_user_id"}, {"creatorUserNickname": "TodoListUser.nickname"})
          .where({ "TodoListTask.id": req.params.id });
        if (result[0]) {
            result[0].limitDate = dayjs(result[0].LimitDate).format('DD/MM/YYYY')
          res.status(200).send(result[0]);
        } else {
          throw new Error("Task not found.");
        }
      } catch (error) {
        res.status(400).send(error.message);
      }
}) 


/* 
app.put("/user", async (req: Request, res:Response) => {
    try {
        await connection("TodoListUser")
    }
    catch (error){
        res.status(400).send(error.message);
    }
}) 
 */