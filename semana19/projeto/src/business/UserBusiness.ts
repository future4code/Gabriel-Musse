import { UserDatabase } from "../data/UserDatabase";
import { SignupInputDTO, User } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export class UserBusiness {
  async signup(input: SignupInputDTO): Promise<string> {
    if (!input.name || !input.email || !input.password) {
      throw new Error('Fields "name", "email" and "password" are required');
    }
    const idGenerator = new IdGenerator();
    const id: string = idGenerator.generateId();

    const hashManager = new HashManager();
    const cypherPassword = await hashManager.hash(input.password);

    const user = new User(id, input.name, input.email, cypherPassword);

    const userDatabase = new UserDatabase();
    await userDatabase.insertUser(user);

    const tokenManager = new TokenManager();
    const token: string = tokenManager.generateToken({ id });

    return token;
  }
}
