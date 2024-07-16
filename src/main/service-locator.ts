export class ServiceLocator {
    private static services = new Map<string, unknown>()

    static register(name: string, service: unknown) {
        ServiceLocator.services.set(name, service);
    }

    static get<T>(name: string): T {
        const service = ServiceLocator.services.get(name)
        if (!service) {
            throw new Error(`Service ${name} not found`);
        }
        return service as T;
    }
}