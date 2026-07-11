import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getLeadershipData(): Promise<LeadershipResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/leadership?populate[leadership][fields][0]=id&populate[leadership][fields][1]=name&populate[leadership][fields][2]=desg&populate[leadership][fields][3]=content&populate[leadership][populate][leadership_img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Leadership Data");
  const json = await res.json();
  return json.data;
}

// Leadership Image
export type LeadershipImage = {
  id: number;
  documentId: string;
  url: string;
};

// Single Leadership Member
export type Leadership = {
  id: number;
  name: string;
  desg: string;
  content: string;
  leadership_img: LeadershipImage;
};

// Main API Data
export type LeadershipData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  leadership: Leadership[];
};

// API Response Wrapper
export type LeadershipResponse = {
  data: LeadershipData;
  meta: Record<string, unknown>;
};

// {
//   populate: {
//      leadership: {
//       fields: ['id', 'name', 'desg', 'content'],
//       populate:{
//         leadership_img: {
//           fields: ['url'] 
//         } 
//       } 
//      }
//    }
// }