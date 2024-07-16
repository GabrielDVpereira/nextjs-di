import { makeGetUserUseCase } from "./factories/make-get-user-usecase"
import { ServiceLocator } from "./service-locator"

export function initServices() {
    const getUserUseCase = makeGetUserUseCase()
    ServiceLocator.register('get-user-usecase', getUserUseCase)
}