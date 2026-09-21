export const cdcTeamKeys = {
  all: ["cdc-team"] as const,

  lists: () => [...cdcTeamKeys.all, "list"] as const,

  list: (params: unknown) => [...cdcTeamKeys.lists(), params] as const,

  details: () => [...cdcTeamKeys.all, "detail"] as const,

  detail: (id: number | string) => [...cdcTeamKeys.details(), id] as const,
};
