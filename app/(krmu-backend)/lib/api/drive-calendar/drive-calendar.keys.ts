export const driveCalendarKeys = {
  all: ["drive-calendar"] as const,

  list: () => [...driveCalendarKeys.all, "list"] as const,

  detail: (id: number) => [...driveCalendarKeys.all, "detail", id] as const,
};
