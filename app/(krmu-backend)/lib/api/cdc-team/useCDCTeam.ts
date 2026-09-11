"use client";

import { useQuery } from "@tanstack/react-query";

import { cdcTeamService } from "./cdc-team.service";
import { cdcTeamKeys } from "./cdc-team.keys";

export const useCDCTeam = () => {
  return useQuery({
    queryKey: cdcTeamKeys.list(),
    queryFn: cdcTeamService.getAll,
  });
};
