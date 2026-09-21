import { API } from "../endpoints";
import { http } from "../http";
import { CDCTeamMember, CDCTeamResponse } from "./cdc-team.types";

export const cdcTeamService = {
  getAll: async (): Promise<CDCTeamMember[]> => {
    const { data } = await http.get<CDCTeamResponse>(API.CDCTEAM);
    return data.data;
  },
};
