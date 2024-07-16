import { User } from "_/domain/models/user";

export interface UserRepository {
    findById(id: string): Promise<User>
}