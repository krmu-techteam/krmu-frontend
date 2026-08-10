import { createResource } from "../../services/create-resource";
import { API } from "../../lib/api/endpoints";
import { CreateFacultyDto, UpdateFacultyDto } from "./schema";
import {
  FacultyListResponse,
  FacultyQueryParams,
  FacultyResponse,
} from "./type";

export const facultyApi = createResource<
  FacultyResponse,
  CreateFacultyDto,
  UpdateFacultyDto,
  FacultyListResponse,
  FacultyQueryParams
>(API.FACULTY);
