import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  GlobalDownloadProspectusResponse,
  GlobalPageAssetsResponse,
} from "../types/global-setting";
export async function getDownloadProspectusSetting(): Promise<
  GlobalDownloadProspectusResponse["data"] | null
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/controller-setting?fields[0]=download_prospectus_enable_disable&fields[1]=programme_handbook_enable_disable&fields[2]=open_elective_enable_disable&fields[3]=minor_enable_disable`,
      {
        cache: "no-cache"
      }
    );
    if (!res.ok) throw new Error("Failed to fetch Download Prospectus");
    const json: GlobalDownloadProspectusResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Download prospectus setting fetch error:", error);
    return null;
  }
}

export async function getPageAssets(): Promise<
  GlobalPageAssetsResponse["data"] | null
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/page-asset?fields[0]=css_in_header&fields[1]=js_in_footer`,
      {
        cache: "no-cache"
      }
    );
    if (!res.ok) throw new Error("Failed to fetch Page Assets");
    const json: GlobalPageAssetsResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Page assets fetch error:", error);
    return null;
  }
}
