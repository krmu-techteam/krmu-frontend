import { FETCH_STRAPI_URL } from "@/app/constant";
import { MembershipAndRankingResponseType } from "../types/membership-and-ranking";

export async function getMembershipAndRankingData(): Promise<
  MembershipAndRankingResponseType["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/membership-and-ranking?populate[memberships][fields][0]=cardurl&populate[memberships][fields][1]=cardtitle&populate[memberships][populate][cardimg]=true&populate[rankings][fields][0]=title&populate[rankings][populate][cardimg]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Not Fetch Membership and Ranking Data");

  const json: MembershipAndRankingResponseType = await res.json();
  return json.data;
}
