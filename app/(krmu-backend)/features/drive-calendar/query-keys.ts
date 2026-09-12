export const driveCalendarKeys = {
  all: ["drive-calendar"] as const,

  lists: () => [...driveCalendarKeys.all, "list"] as const,

  list: (params: unknown) => [...driveCalendarKeys.lists(), params] as const,

  details: () => [...driveCalendarKeys.all, "detail"] as const,

  detail: (id: number | string) =>
    [...driveCalendarKeys.details(), id] as const,
};
