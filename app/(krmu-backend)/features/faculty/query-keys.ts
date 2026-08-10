export const facultyKeys = {
  all: ["faculty"] as const,

  lists: () => [...facultyKeys.all, "list"] as const,

  list: (params: unknown) => [...facultyKeys.lists(), params] as const,

  details: () => [...facultyKeys.all, "detail"] as const,

  detail: (id: number | string) => [...facultyKeys.details(), id] as const,
};
