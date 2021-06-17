import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  public async insertUser(user: User) {
    await this.getConnection().insert(user).into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
      
    return User.toUserModel(result[0]);
  }
}
