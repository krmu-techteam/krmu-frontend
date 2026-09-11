"use client";

import { useQuery } from "@tanstack/react-query";
import { driveCalendarKeys } from "./drive-calendar.keys";
import { driveCalendarService } from "./drive-calendar.service";

export const useDriveCalendar = () => {
  return useQuery({
    queryKey: driveCalendarKeys.list(),
    queryFn: driveCalendarService.getAll,
  });
};
