import { FETCH_STRAPI_URL } from "@/app/constant";
import { PhotoGalleryApiResponse } from "../types/photo-gallery";

export async function getGallerImagesUsingSlug(
  slug: string
): Promise<PhotoGalleryApiResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/photo-galleries?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=slug&populate[gallery_images][populate][fields][0]=url&status=published&locale[0]=en`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const json: PhotoGalleryApiResponse = await res.json();
  return json.data;
}
