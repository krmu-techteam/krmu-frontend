import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./axios";
import { toFormData } from "../helpers/form-data";

class HttpClient {
  private prepareBody(data: unknown) {
    if (!data || typeof data !== "object") {
      return data;
    }

    const hasFile = (value: unknown): boolean => {
      if (value instanceof File || value instanceof Blob) {
        return true;
      }

      if (Array.isArray(value)) {
        return value.some(hasFile);
      }

      if (value && typeof value === "object") {
        return Object.values(value).some(hasFile);
      }

      return false;
    };

    if (hasFile(data)) {
      return toFormData(data as Record<string, unknown>);
    }

    return data;
  }

  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return api.request<T>(config);
  }

  get<T, TParams extends object = object>(
    url: string,
    config?: AxiosRequestConfig,
    params?: TParams,
  ) {
    return this.request<T>({
      method: "GET",
      url,
      ...config,
      params,
    });
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T>({
      method: "POST",
      url,
      data: this.prepareBody(data),
      ...config,
    });
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T>({
      method: "PUT",
      url,
      data: this.prepareBody(data),
      ...config,
    });
  }

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request<T>({
      method: "PATCH",
      url,
      data: this.prepareBody(data),
      ...config,
    });
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>({
      method: "DELETE",
      url,
      ...config,
    });
  }
}

export const http = new HttpClient();
