import { FETCH_STRAPI_URL } from "@/app/constant";
import { HomePageResponse } from "../types/home";

export async function getHomePageData(): Promise<
  HomePageResponse["data"]["PageContent"]
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/home-page?populate[PageContent][populate]=*`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch home page");

    const json: HomePageResponse = await res.json();
    return json.data.PageContent;
  } catch (error) {
    console.error("Home page data fetch error:", error);
    return [];
  }
}

// export async function getHomePageData(): Promise<HomePageResponse["data"]["PageContent"]> {
//   const res = await fetch(`${FETCH_STRAPI_URL}/api/home-page?populate[PageContent][populate]=*`, {
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Failed to fetch home page");

//   const json: HomePageResponse = await res.json();
//   return json.data.PageContent;
// }

