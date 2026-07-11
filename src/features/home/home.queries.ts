import { KRMUWordUrl } from "@/app/constant";

export const HOMEPAGE_QUERY =
  "/api/home-page?populate[PageContent][populate]=*";

export const TESTIMONIALS_QUERY = "/api/testimonials?populate=*";

export const NEWS_EVENTS_QUERY = (page: number, perPage: number) =>
  `${KRMUWordUrl}/wp-json/wp/v2/events-and-news?_fields=id,title,slug,acf,featured_media,date,modified&page=${page}&per_page=${perPage}`;
