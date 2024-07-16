import { User } from "../models/user";

export interface GetUserUseCase {
    exec(id: string): Promise<User>
}