import { GetUserUseCase } from "_/domain/usecases/get-user-usecase";
import { ServiceLocator } from "_/main/service-locator";

export default async function AdminPage() {
  const getUserUseCase = ServiceLocator.get<GetUserUseCase>("get-user-usecase");

  const user = await getUserUseCase.exec("gabrieldvpereira");

  return (
    <>
      <div>User: {user.name}</div>
    </>
  );
}
