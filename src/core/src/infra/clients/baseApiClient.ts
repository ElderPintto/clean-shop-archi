import { AxiosRequestConfig } from "axios";
import AxiosClient from "./axiosClient";

export default class BaseApiClient {
  private client: AxiosClient;

  constructor(config: AxiosRequestConfig) {
    this.client = new AxiosClient(config);
  }

  async get(path: string): Promise<any> {
    try {
      const response = await this.client.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async post(path: string, body: any): Promise<any> {
    try {
      const response = await this.client.post(path, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async put(path: string, body: any): Promise<any> {
    try {
      const response = await this.client.put(path, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async delete(path: string): Promise<any> {
    try {
      const response = await this.client.delete(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
