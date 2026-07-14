import { NSSConnectResponse } from "@/lib/api/community-connect";
import { CommunityConnectDomain } from "./community-connect.types";
import staticDataJson from "./data/index.json";

export class CommunityConnectMapper {
  static toDomain(nssRaw: NSSConnectResponse | null): CommunityConnectDomain {
    return {
      staticData: staticDataJson.data,
      nssData: nssRaw ? nssRaw.data : null,
    };
  }
}
