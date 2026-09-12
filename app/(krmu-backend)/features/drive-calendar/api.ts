import { createResource } from "../../services/create-resource";
import { API } from "../../lib/api/endpoints";
import { CreateDriveCalendarDto } from "./schema";
import { DriveCalendarResponse } from "./type";

export const driveCalendarAPI = createResource<
  DriveCalendarResponse,
  CreateDriveCalendarDto
>(API.DRIVECALENDAR);
