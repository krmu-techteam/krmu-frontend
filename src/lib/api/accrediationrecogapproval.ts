import { FETCH_STRAPI_URL } from "@/app/constant";
import { AccrediationRecogApprovalsResponse } from "../types/accrecogapp";

export async function getAccrediationRecognitionApprovalData(): Promise<
  AccrediationRecogApprovalsResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/accreditations-recognition-and-approval?populate[accrediationrecogapprovals][fields][0]=cardtitle&populate[accrediationrecogapprovals][fields][1]=cardurl&populate[accrediationrecogapprovals][populate][cardimg]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Not Fetch Membership and Ranking Data");

  const json: AccrediationRecogApprovalsResponse = await res.json();
  return json.data;
}
