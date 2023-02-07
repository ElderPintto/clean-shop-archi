export default interface apiClient {
  get(path: string): Promise<any>;
  post(path: string, body: any): Promise<any>;
  put(path: string, body: any): Promise<any>;
  delete(path: string): Promise<any>;
}
