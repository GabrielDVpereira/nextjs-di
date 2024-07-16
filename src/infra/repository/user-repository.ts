import { HttpAdapter } from "_/data/protocols/http-adapter";
import { UserRepository } from "_/data/protocols/user-repository";
import { User, userSchema } from "_/domain/models/user";


export class UserRepositoryImpl implements UserRepository {

    constructor(private readonly httpAdapter: HttpAdapter) { }

    async findById(id: string): Promise<User> {
        const unsafeUser = await this.httpAdapter.get(`users/${id}`);
        return userSchema.parse(unsafeUser);
    }
}