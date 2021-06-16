import { User } from "../model/User";
import { connection } from "./connection";

export class UserDatabase {
  async insertUser(user: User) {
    await connection("labook_users").insert(user);
  }
}
