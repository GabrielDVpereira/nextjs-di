import { GetUserUseCase } from "_/domain/usecases/get-user-usecase";
import { UserRepository } from "../protocols/user-repository";
import { User } from "_/domain/models/user";

export class GetUserUseCaseImpl implements GetUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async exec(id: string): Promise<User> {
        try {
            return this.userRepository.findById(id);
        } catch (error) {
            throw new Error("User not found"); // this might be a custom error
        }
    }
}