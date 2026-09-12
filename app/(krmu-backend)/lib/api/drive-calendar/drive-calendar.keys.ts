export const driveCalendarKeys = {
  all: ["drive-calendar"] as const,

  lists: () => [...driveCalendarKeys.all, "list"] as const,

  list: (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: "published" | "draft";
  }) => [...driveCalendarKeys.lists(), params] as const,

  details: () => [...driveCalendarKeys.all, "detail"] as const,

  detail: (id: number) => [...driveCalendarKeys.details(), id] as const,
};
