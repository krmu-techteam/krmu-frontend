import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getLifeAtKRMUOverviewData(): Promise<
  LifeAtKRMUOverviewResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/life-at-krmu-overview?fields[0]=heading&fields[1]=subheading&populate[overview_video][fields][0]=url&populate[hear_it_testimonials][fields][0]=name&populate[hear_it_testimonials][fields][1]=qualification&populate[hear_it_testimonials][fields][2]=info&populate[hear_it_testimonials][populate][img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Life at KRMU Data");
  const json = await res.json();
  return json.data;
}

export type LifeAtKRMUOverviewResponse = {
  data: {
    id: number;
    documentId: string;
    heading: string;
    subheading: string;
    overview_video: StrapiMedia;
    hear_it_testimonials: HearItTestimonials[];
    meta: Record<string, unknown>;
  };
};

export type HearItTestimonials = {
  id: number;
  name: string;
  qualification: string;
  info: string;
  img: StrapiMedia;
};

export type OverViewVideo = {
  id: number;
  documentId: string;
  url: string;
};

// {
// fields: ['heading', 'subheading'],
// populate:{
//   overview_video: {
//       fields: ['url']
//   },
//   hear_it_testimonials : {
//     fields: ['name', 'qualification', 'info'],
//     populate: {
//       img: {
//         fields: ['url']
//       }
//     }
//   }
// }
// }

export async function getLifeAtKRMUOverviewLatestEvents():Promise<OverviewEventsResponse> {
  const res = await fetch(
    `https://krmangalam.edu.in/wp-json/wp/v2/events-and-news?per_page=20&orderby=date&order=desc&_fields=id,title,slug,excerpt,featured_media`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch overview latest events");
  const json = await res.json();
  return json.data;
}

export type OverviewEventsResponse = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
};
