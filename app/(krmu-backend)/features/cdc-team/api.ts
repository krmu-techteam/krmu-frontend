import { createResource } from "../../services/create-resource";
import { API } from "../../lib/api/endpoints";
import { CreateCdcTeamDto } from "./schema";
import { CDCTeamResponse } from "./type";

export const cdcTeamApi = createResource<CDCTeamResponse, CreateCdcTeamDto>(
  API.CDCTEAM,
);
