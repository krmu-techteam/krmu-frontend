// src/services/create-resource.ts

import { ResourceService } from "./resource.service";

export function createResource<
  TResponse,
  TCreate = unknown,
  TUpdate = TCreate,
  TList = TResponse,
  TParams extends object = object,
>(endpoint: string) {
  return new ResourceService<
    TResponse,
    TCreate,
    TUpdate,
    TList,
    TParams
  >(endpoint);
}