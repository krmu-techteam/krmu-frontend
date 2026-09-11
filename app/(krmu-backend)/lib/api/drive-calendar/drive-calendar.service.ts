import { API } from "../endpoints";
import { http } from "../http";
import { DriveCalendar, DriveCalendarResponse } from "./drive-calendar.type";

export const driveCalendarService = {
  getAll: async (): Promise<DriveCalendar[]> => {
    const { data } = await http.get<DriveCalendarResponse>(API.DRIVECALENDAR);
    return data.data;
  },
};
