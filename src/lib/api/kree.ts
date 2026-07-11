import { FETCH_STRAPI_URL } from "@/app/constant";
import { KREEResponse } from "../types/kree";

export async function getKREEData(): Promise<KREEResponse["data"]> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/kree?populate[kree_enrol][populate]=*&populate[kree_apply_online][populate]=*`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch KREE page data");
  const json: KREEResponse = await res.json();
  return json.data;
}
