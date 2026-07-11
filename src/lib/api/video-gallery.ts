import { FETCH_STRAPI_URL } from "@/app/constant";
import { VideoGalleriesResponse } from "../types/video-gallery";

export async function getVideoGallery() {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/video-gallery?populate=*`, { next: { revalidate: 3600 } });

  if (!res.ok) throw new Error("Failed to fetch video");
  const json: VideoGalleriesResponse = await res.json();
  return json.data;
}
