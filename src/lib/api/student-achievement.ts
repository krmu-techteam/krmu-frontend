import { FETCH_STRAPI_URL } from "@/app/constant";
import { StudentAchievementResponse } from "../types/common";

export async function getStudentsAchievements(
  slug: string = ""
): Promise<StudentAchievementResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/student-achievements?filters[school_categories][slug][$eq]=${slug}&fields[0]=achievement_content&populate[achivementimage][fields][0]=url&populate[achivementimage][fields][1]=alternativeText&populate[school_categories][fields][0]=name&populate[school_categories][fields][1]=slug`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Student Achievements");
  const json: StudentAchievementResponse = await res.json();
  return json.data;
}

// {
// filters: {
//   school_categories: {
//     slug: {
//      $eq: 'SOET'
//     }
//   },
// },
//  fields: ['achievement_content'],
//  populate: {
//    achivementimage: {
//      fields: ['url', 'alternativeText']
//    },
//    school_categories: {
//      fields: ['name', 'slug']
//    }
//  }
//  pagination: {
//   pageSize: 1,
//   page: 1,
// },

// }
