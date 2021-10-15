export interface APIRequest<T> {
    url: string,
    options: {
        params?: { [k: string]: string },
        method?: string,
        headers?: Record<string, string | string[]>,
    }
}
export interface APIResponse<DataType> {
    code: number,
    message: string,
    ttl: number,
    data: DataType
}
export type RequestExecuter = <T>(req: APIRequest<T>) => APIResponse<T>
export const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36"
export const SEC = {
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
}