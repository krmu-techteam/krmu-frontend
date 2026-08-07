import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./axios";

class HttpClient {
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.request<T>(config);
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>({
      method: "GET",
      url,
      ...config,
    });
  }

  post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.request<T>({
      method: "POST",
      url,
      data,
      ...config,
    });
  }

  put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.request<T>({
      method: "PUT",
      url,
      data,
      ...config,
    });
  }

  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    return this.request<T>({
      method: "PATCH",
      url,
      data,
      ...config,
    });
  }

  delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    return this.request<T>({
      method: "DELETE",
      url,
      ...config,
    });
  }
}

export const http = new HttpClient();