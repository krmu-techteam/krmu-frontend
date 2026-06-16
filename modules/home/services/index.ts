import { cache } from "react";
import { apiRequest } from "@/lib/api-request";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { HomePageResponse } from "../types";

export const getHomePageContent = cache(async () => {
    const response = await apiRequest<HomePageResponse>("/api/home-page?populate[PageContent][populate]=*");
    return response?.data?.PageContent
});

export const getHomeNewsEvents = cache(async (page = 1, perPage = 10) => {
    return await getNewsEventsWP(page, perPage);
});