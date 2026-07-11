import { FETCH_STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "../types/common";

export async function getKRMUCampusFacility(): Promise<
  KRMUCampusFacilityResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/krmu-campus-facility?populate[state_of_art][fields][0]=heading&populate[state_of_art][fields][1]=content&populate[state_of_art][populate][state_of_the_art_imgs][fields][0]=url&populate[lab_workshops][fields][0]=heading&populate[lab_workshops][fields][1]=content&populate[lab_workshops][populate][lab_workshop_imgs][fields][0]=url&populate[modern_classroom][fields][0]=heading&populate[modern_classroom][fields][1]=content&populate[modern_classroom][populate][modern_classrooms_imgs][fields][0]=url&populate[comfy_hostel][fields][0]=heading&populate[comfy_hostel][fields][1]=content&populate[comfy_hostel][populate][comfy_slide_imgs][fields][0]=url&populate[sport_fitness][fields][0]=heading&populate[sport_fitness][fields][1]=content&populate[sport_fitness][populate][sport_fitness_imgs][fields][0]=url&populate[research_support][fields][0]=heading&populate[research_support][fields][1]=content&populate[research_support][populate][research_support_imgs][fields][0]=url&populate[aesthetics_cafeteria][fields][0]=heading&populate[aesthetics_cafeteria][fields][1]=content&populate[aesthetics_cafeteria][populate][aethetics_cafeteria_imgs][fields][0]=url`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch KRMU Times Data");
  const json = await res.json();
  return json.data;
}

export interface KRMUCampusFacilityResponse {
  data: KRMUCampusData;
  meta: Record<string, unknown>;
}

export interface KRMUCampusData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  state_of_art: StateOfArtSection;
  lab_workshops: LabsWorkshopsSection;
  modern_classroom: ModernClassroomSection;
  comfy_hostel: ComfyHostelSection;
  sport_fitness: SportFitnessSection;
  research_support: ResearchSupportSection;
  aesthetics_cafeteria: AestheticsCafeteriaSection;
}

export interface AestheticsCafeteriaSection {
  id: number;
  heading: string;
  content: string;
  aethetics_cafeteria_imgs: StrapiMedia[];
}

export interface ResearchSupportSection {
  id: number;
  heading: string;
  content: string;
  research_support_imgs: StrapiMedia[];
}

export interface SportFitnessSection {
  id: number;
  heading: string;
  content: string;
  sport_fitness_imgs: StrapiMedia[];
}

export interface ComfyHostelSection {
  id: number;
  heading: string;
  content: string;
  comfy_slide_imgs: StrapiMedia[];
}

export interface ModernClassroomSection {
  id: number;
  heading: string;
  content: string;
  modern_classrooms_imgs: StrapiMedia[];
}

export interface LabsWorkshopsSection {
  id: number;
  heading: string;
  content: string;
  lab_workshop_imgs: StrapiMedia[];
}

export interface StateOfArtSection {
  id: number;
  heading: string;
  content: string;
  state_of_the_art_imgs: StrapiMedia[];
}

export interface StateOfArtImage {
  id: number;
  documentId: string;
  url: string;
}

// {
//   populate: {
//    state_of_art: {
//      fields: ['heading', 'content'],
//      populate: {
//        state_of_the_art_imgs : {
//          fields: ['url']
//        },

//      },

//    },
//    lab_workshops: {
//       fields: ['heading', 'content'],
//     populate: {
//       lab_workshop_imgs: {
//         fields: ['url']
//       }
//     }
//    },
//    modern_classroom: {
//     fields: ['heading', 'content'],
//      populate: {
//       modern_classrooms_imgs : {
//         fields: ['url']
//       }
//    }
//   },
//   comfy_hostel: {
//     fields: ['heading', 'content'],
//     populate: {
//       comfy_slide_imgs : {
//         fields: ['url']
//       }
//     }
//   },
//   sport_fitness: {
//     fields: ['heading', 'content'],
//     populate: {

//      sport_fitness_imgs : {
//        fields: ['url']
//      }
//     }
//   },
//   research_support: {
//     fields: ['heading', 'content'],
//     populate: {
//        research_support_imgs : {
//          fields: ['url']
//        }
//     }
//   },
//   aesthetics_cafeteria: {
//     fields: ['heading', 'content'],
//     populate: {
//       aethetics_cafeteria_imgs: {
//         fields: ['url']
//       }
//     }
//   }

//   }

// }
