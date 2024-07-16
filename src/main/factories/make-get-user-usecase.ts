import { GetUserUseCaseImpl } from "_/data/usecases/get-user-usecase";
import { GetUserUseCase } from "_/domain/usecases/get-user-usecase";
import { HttpAdapterImpl } from "_/infra/http/http-adapter";
import { UserRepositoryImpl } from "_/infra/repository/user-repository";

export const makeGetUserUseCase = (): GetUserUseCase => {
    const httpAdapter = new HttpAdapterImpl('https://api.github.com');
    const userRepository = new UserRepositoryImpl(httpAdapter);
    return new GetUserUseCaseImpl(userRepository);
}