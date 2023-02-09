import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import IApiClient from "../interfaces/apiClient.js";

class AxiosClient implements IApiClient {
  private client: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return this.client.get(url, config);
    } catch (error) {
      throw error;
    }
  }
  async post<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return this.client.post(url, data, config);
    } catch (error) {
      throw error;
    }
  }
  async put<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return this.client.post(url, data, config);
    } catch (error) {
      throw error;
    }
  }
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return this.client.post(url, config);
    } catch (error) {
      throw error;
    }
  }
}

export default AxiosClient;
