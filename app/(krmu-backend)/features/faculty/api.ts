// src/features/faculty/api.ts

import { API } from "../../lib/api/endpoints";
import { createResource } from "../../services/create-resource";
import { CreateFacultyDto, FacultyResponse, UpdateFacultyDto } from "./type";

export const facultyApi = createResource<
  FacultyResponse,
  CreateFacultyDto | FormData,
  UpdateFacultyDto | FormData
>(API.FACULTY);
