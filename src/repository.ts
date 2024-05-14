
export interface Repository {
    get(businessID: string): Promise<Record<string, any>>;
}