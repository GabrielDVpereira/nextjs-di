import { HttpAdapter } from "_/data/protocols/http-adapter"

export class HttpAdapterImpl implements HttpAdapter {
    constructor(private readonly baseUrl: string) { }

    async get(endpoint: string, options?: Record<string, unknown>): Promise<unknown> {
        const url = this.buildUrl(endpoint)
        const response = await fetch(url, options)
        return await response.json()
    }

    private buildUrl(endpoint: string): string {
        return `${this.baseUrl}/${endpoint}`
    }
}