import { FETCH_STRAPI_URL, KRMUWordUrl } from "@/app/constant";
import { NewsEventsPageResponse } from "../types/news-events";

export async function getNewsEvents(): Promise<NewsEventsPageResponse["data"] | null> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/news-event?fields[0]=main_heading&fields[1]=main_desc&status=published&locale[0]=en`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch News and Events Page Data");
    const json: NewsEventsPageResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("News events page info fetch error:", error);
    return null;
  }
}

// {

// fields: ['main_heading', 'main_desc'],
// status: 'published',
// locale: ['en'],
// }

// export async function getAllNewsAndEvents(
//   page: number = 1,
//   pageSize: number = 10
// ): Promise<NewsEventsListResponse["data"]> {
//   const res = await fetch(
//     `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:asc&fields[0]=title&fields[1]=slug&populate[featured_img]=true&pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&locale[0]=en`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch All news and events");
//   const json: NewsEventsListResponse = await res.json();
//   return json.data;
// }

export async function getAllNewsAndEventsWithMeta(
  page: number = 1,
  pageSize: number = 10
) {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=publishedAt:asc&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[newsmedia]=true&pagination[pageSize]=${pageSize}&pagination[page]=${page}&status=published&locale[0]=en`,
      { next: { revalidate: 36000 } }
    );

    if (!res.ok) throw new Error("Failed to fetch All news and events");
    return res.json(); // returns { data, meta }
  } catch (error) {
    console.error("All news and events fetch error:", error);
    return { data: [], meta: {} };
  }
}

// {
// sort: ['title:asc'],
// fields: ['title', 'slug'],
// populate: {
//   newsmedia: true
//    },

// pagination: {
//   pageSize: 2,
//   page: 1,
// },
// status: 'published',
// locale: ['en'],
// }

export async function getNewsEventsWP(page = 1, perPage = 10) {
  try {
    const res = await fetch(
      `${KRMUWordUrl}/wp-json/wp/v2/events-and-news?_fields=id,title,slug,acf,featured_media,date,modified&page=${page}&per_page=${perPage}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news & events");
    }

    const data = await res.json();

    const total = Number(res.headers.get("X-WP-Total"));
    const totalPages = Number(res.headers.get("X-WP-TotalPages"));

    return {
      data,
      pagination: {
        page,
        perPage,
        total,
        totalPages,
      },
    };
  } catch (error) {
    console.error("WP news & events fetch error:", error);
    return {
      data: [],
      pagination: {
        page,
        perPage,
        total: 0,
        totalPages: 0,
      },
    };
  }
}
