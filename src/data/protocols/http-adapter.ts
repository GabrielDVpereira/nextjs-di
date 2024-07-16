export interface HttpAdapter {
    get(endpoint: string, options?: Record<string, unknown>): Promise<unknown>
}