import { API } from "../endpoints";
import { http } from "../http";

import {
  DriveCalendarParams,
  DriveCalendarResponse,
} from "./drive-calendar.type";

export const driveCalendarService = {
  getAll: async (
    params: DriveCalendarParams = {},
  ): Promise<DriveCalendarResponse> => {
    console.log("API params:", params);

    const { data } = await http.get<DriveCalendarResponse>(API.DRIVECALENDAR, {
      params,
    });

    return data;
  },
};
