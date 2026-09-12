// src/services/resource.service.ts

import { AxiosRequestConfig, AxiosResponse } from "axios";
import { http } from "../lib/api/http";

export class ResourceService<
  TResponse = unknown,
  TCreate = unknown,
  TUpdate = TCreate,
  TList = TResponse,
  TParams extends object = object,
> {
  constructor(protected endpoint: string) {}

  create(
    data: TCreate,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return http.post<TResponse>(this.endpoint, data, config);
  }

  findAll(
    params?: TParams,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TList>> {
    return http.get<TList>(this.endpoint, {
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
