"use client";

import { useQuery } from "@tanstack/react-query";

import { driveCalendarKeys } from "./drive-calendar.keys";
import { driveCalendarService } from "./drive-calendar.service";
import { DriveCalendarParams } from "./drive-calendar.type";

export const useDriveCalendar = (
  params: DriveCalendarParams = {},
) => {
  return useQuery({
    queryKey: driveCalendarKeys.list(params),

    queryFn: () => driveCalendarService.getAll(params),

    staleTime: 5 * 60 * 1000,
  });
};