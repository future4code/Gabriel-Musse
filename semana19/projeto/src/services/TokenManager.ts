import { AuthenticationData } from "../model/User";
import * as jwt from "jsonwebtoken";

export class TokenManager {
  generateToken(payload: AuthenticationData): string {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "24min",
    });
  }

  getTokenData(token: string): AuthenticationData {
    const result: any = jwt.verify(token, process.env.JWT_KEY as string);

    return { id: result.id };
  }
}