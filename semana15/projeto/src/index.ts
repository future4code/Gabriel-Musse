import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

type Expense = {
  value: number;
  date: string;
  description: string;
};

type User = {
  id: number;
  name: string;
  cpf: string;
  dateOfBirth: string;
  balance: number;
  statement: [{}];
};

let users: User[] = [
  {
    id: 1,
    name: "Gabriel",
    cpf: "12345678911",
    dateOfBirth: "1990-01-01",
    balance: 500,
    statement: [
      { value: 500, date: "2020-01-01", description: "Money deposit." },
    ],
  },
  {
    id: 2,
    name: "Felipe",
    cpf: "12345678912",
    dateOfBirth: "1990-05-02",
    balance: 1500,
    statement: [
      { value: 1500, date: "2020-02-01", description: "Money deposit." },
    ],
  },
  {
    id: 3,
    name: "Daniela",
    cpf: "12345678913",
    dateOfBirth: "1996-12-09",
    balance: 100,
    statement: [
      { value: 100, date: "2020-05-01", description: "Money deposit." },
    ],
  },
];

let currentYear = new Date().getFullYear();

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, dateOfBirth } = req.body;
    let yearOfBirth = dateOfBirth.substr(0, 4);
    let age = Number(currentYear) - Number(yearOfBirth);
    if (age >= 18) {
      const newUser: User = {
        id: Date.now(),
        name,
        cpf,
        dateOfBirth,
        balance: 0,
        statement: [{}],
      };
      if (!name || !cpf) {
        throw new Error(
          "Please check body, it requires name, CPF and date of birth."
        );
      }
      users.map((user) => {
        if (user.cpf.includes(cpf)) {
          throw new Error("This CPF is already registered.");
        }
      });
      users.push(newUser);
      res.status(200).send("User created sucessfully");
    } else {
      throw new Error("User is not 18 years old yet.");
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/users/:cpf", (req: Request, res: Response) => {
  try {
    const cpfParams = req.params.cpf as string;
    let balance;
    if (cpfParams.length < 11) {
      throw new Error("Check CPF, 11 numbers required");
    } else {
      users.map((user) => {
        if (user.cpf === cpfParams) {
          balance = Number(user.balance);
        }
      });
      if (!balance) {
        throw new Error("No user with that CPF found.");
      }
      res.status(200).send({ balance });
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/users/add", (req: Request, res: Response) => {
  try {
    const cpfQuery = req.query.cpf as string;
    const nameQuery = req.query.name as string;
    const valueQuery = req.query.value;
    let result = false;
    if (cpfQuery.length < 11 || !nameQuery || !valueQuery) {
      throw new Error("Check parameters.");
    } else {
      users.map((user) => {
        if (
          user.cpf === cpfQuery &&
          user.name.toLowerCase() === nameQuery.toLocaleLowerCase()
        ) {
          user.balance += Number(valueQuery);
          let todayDate = new Date();
          let newItem: Expense = {
            value: Number(valueQuery),
            date: todayDate.toISOString().substring(0, 10),
            description: "Money deposit.",
          };
          user.statement.push(newItem);
          result = true;
        }
      });
      if (!result) {
        throw new Error("No user with that CPF and name found.");
      }
      res.status(200).send("Deposit/Expense added successfully.");
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
