import { FETCH_STRAPI_URL } from "@/app/constant";
import { NoticeResponse } from "../types/notice";

export async function getNoticePageData(): Promise<NoticeResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/notice?fields[0]=title&populate[bgimage]=true&populate[noticepdfs][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Finance Data");
  }

  const json: NoticeResponse = await res.json();
  return json.data;
}
