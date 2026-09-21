export const cdcTeamKeys = {
  all: ["cdc-team"] as const,

  list: () => [...cdcTeamKeys.all, "list"] as const,

  detail: (id: number) => [...cdcTeamKeys.all, "detail", id] as const,
};
