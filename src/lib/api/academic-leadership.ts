import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getAcademicLeadershipData(): Promise<
  AcademicLeadershipResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/academic-leadership?populate[academic_leadership][fields][0]=id&populate[academic_leadership][fields][1]=name&populate[academic_leadership][fields][2]=desg&populate[academic_leadership][fields][3]=content&populate[academic_leadership][populate][academic_leadership_img][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Academic Leadership Data");
  const json = await res.json();
  return json.data;
}

// AcademicLeadership Image
export type AcademicLeadershipImage = {
  id: number;
  documentId: string;
  url: string;
};

// Single AcademicLeadership Member
export type AcademicLeadership = {
  id: number;
  name: string;
  desg: string;
  content: string;
  academic_leadership_img: AcademicLeadershipImage;
};

// Main API Data
export type AcademicLeadershipData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  academic_leadership: AcademicLeadership[];
};

// API Response Wrapper
export type AcademicLeadershipResponse = {
  data: AcademicLeadershipData;
  meta: Record<string, unknown>;
};

// {
//   populate: {
//      academic_leadership: {
//       fields: ['id', 'name', 'desg', 'content'],
//       populate:{
//         academic_leadership_img: {
//           fields: ['url'] 
//         } 
//       } 
//      }
//    }
// }