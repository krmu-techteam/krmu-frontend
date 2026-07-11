import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getPlacementHighlightData(): Promise<
  PlacementHighlightResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/placement-hightlight?fields[0]=heading&populate[placement_highlight_img][fields][0]=url&populate[placement_highlight_img][fields][1]=alternativeText`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch placement highlights data");
  const json = await res.json();
  return json.data;
}

export interface PlacementHighlightResponse {
  data: PlacementHighlightData;
  meta: Record<string, unknown>;
}

export interface PlacementHighlightData {
  id: number;
  documentId: string;
  heading: string;
  placement_highlight_img: PlacementHighlightImage[];
}

export interface PlacementHighlightImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

// {
//   fields: ['heading'],
//   populate: {
//     placement_highlight_img: {
//       fields: ['url', 'alternativeText']
//     }
//   }
// }
