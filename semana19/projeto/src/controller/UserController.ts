import { Request, Response } from "express";
import { SignupInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    async signup(req: Request, res: Response) {

        try {
            let message = "Success!";

            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.signup(input);
            
            res.status(201).send({ message, token })
      
         } catch (error) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
      
            res.send({ message })
         }

    }

}