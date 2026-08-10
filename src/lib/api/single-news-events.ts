import { FETCH_STRAPI_URL, KRMUWordUrl } from "@/app/constant";
import { NewsAndEventResponse } from "../types/news-and-events";

export async function getSingleNewsAndEvents(
  newsandeventsslug: string = "international-yoga-day"
): Promise<NewsAndEventResponse["data"]> {
  try {
    const baseUrl = FETCH_STRAPI_URL || "https://truthful-cabbage-82fd27e8f6.strapiapp.com";
    const res = await fetch(
      `${baseUrl}/api/news-and-events?filters[slug][$eq]=${newsandeventsslug}&populate[bgimg][populate]=*&populate[newsmedia][populate]=*`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) return [];
    const json: NewsAndEventResponse = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("getSingleNewsAndEvents error:", error);
    return [];
  }
}

export async function getSingleNewsAndEventsWP(newsandeventsslug: string = "") {
  if (!newsandeventsslug) return [];
  try {
    const baseUrl = KRMUWordUrl || "https://wp.krmangalam.edu.in";
    const res = await fetch(
      `${baseUrl}/wp-json/wp/v2/events-and-news?slug=${newsandeventsslug}&_fields=id,title,content,featured_media,acf.event_images,slug,yoast_head_json`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("getSingleNewsAndEventsWP error:", error);
    return [];
  }
}

