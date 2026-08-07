import { AxiosRequestConfig, AxiosResponse } from "axios";
import { http } from "../lib/api/http";

export class ResourceService<
  TResponse = unknown,
  TCreate = unknown,
  TUpdate = TCreate,
> {
  constructor(protected endpoint: string) {}

  create(
    data: TCreate,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.post<TResponse>(this.endpoint, data, config);
  }

  findAll(
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.get<TResponse>(this.endpoint, {
      ...config,
      params,
    });
  }

  find(
    id: number | string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.get<TResponse>(`${this.endpoint}/${id}`, config);
  }

  update(
    id: number | string,
    data: TUpdate,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.put<TResponse>(`${this.endpoint}/${id}`, data, config);
  }

  patch(
    id: number | string,
    data: Partial<TUpdate>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.patch<TResponse>(`${this.endpoint}/${id}`, data, config);
  }

  delete(
    id: number | string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.delete<TResponse>(`${this.endpoint}/${id}`, config);
  }
}
