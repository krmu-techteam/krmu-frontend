import { FETCH_STRAPI_URL } from "@/app/constant";
import { PhDProgrammeResponse } from "../types/phd-programmes";

export async function getPHDProgramme(phdslug: string) {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/phd-single-programmes?filters[phdslug][$eq]=${phdslug}&fields[0]=heading&fields[1]=phdslug&fields[2]=degree&fields[3]=phdfaqtitle&populate[bgimg][fields][0]=url&populate[duration][fields][0]=countertext&populate[duration][fields][1]=countercontent&populate[fee_per_year][fields][0]=countertext&populate[fee_per_year][fields][1]=countercontent&populate[eligibility_criteria][fields][0]=countertext&populate[eligibility_criteria][fields][1]=countercontent&populate[phdoverview][fields][0]=title&populate[phdoverview][fields][1]=desc&populate[phdoverview][populate][overviewimage][fields][0]=url&populate[scholarsponsoredparttime][fields][0]=title1&populate[scholarsponsoredparttime][fields][1]=desc1&populate[scholarsponsoredparttime][fields][2]=title2&populate[scholarsponsoredparttime][fields][3]=desc2&populate[scholarsponsoredparttime][fields][4]=title3&populate[scholarsponsoredparttime][fields][5]=desc3&populate[scholarsponsoredparttime][populate][scholarshipimg][fields][0]=url&populate[connectingtalent][fields][0]=title&populate[connectingtalent][fields][1]=desc&populate[connectingtalent][populate][dreamimg][fields][0]=url&populate[connectingtalent][populate][dreamcounter][fields][0]=countertext&populate[connectingtalent][populate][dreamcounter][fields][1]=countercontent&populate[phdlogoslide][fields][0]=url&populate[careeroptions][fields][0]=title&populate[careeroptions][fields][1]=desc&populate[careeroptions][fields][2]=testimonialheading&populate[careeroptions][populate][careerpointers][fields][0]=listtext&populate[careeroptions][populate][careerpointers][fields][1]=listlink&populate[careeroptions][populate][testimonials][fields][0]=countertext&populate[careeroptions][populate][testimonials][fields][1]=countercontent&populate[phdoutcome][fields][0]=title&populate[phdoutcome][populate][phdoutcome][fields][0]=outcomedesc&populate[programmehighlight][fields][0]=heading&populate[programmehighlight][fields][1]=phdcontent&populate[programmehighlight][populate][bgimage][fields][0]=url&populate[pursue][fields][0]=title&populate[pursue][fields][1]=pursue&populate[pursue][populate][bgimage][fields][0]=url&populate[phdadmissionselect][fields][0]=title1&populate[phdadmissionselect][fields][1]=desc1&populate[phdadmissionselect][fields][2]=title2&populate[phdadmissionselect][fields][3]=desc2&populate[phdadmissionselect][populate][bgimg][fields][0]=url&populate[phdprogrammefaq][fields][0]=ques&populate[phdprogrammefaq][fields][1]=ans&populate[seo][populate]=*&populate[school_category][fields][0]=slug&populate[school_category][fields][1]=name&populate[commence_journey][populate]=*`,
      {
        next: {
          revalidate: 1200, // ISR (revalidate every 60s)
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Single PhD programme Data");
    }

    const json: PhDProgrammeResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching Single PhD Programme:", error);
    return null;
  }
}

// {
//     filters: {
//       phdslug: {
//         $eq: "phd-forensic-science",
//       },
//     },
//     fields: ["heading", "phdslug", 'degree', 'phdfaqtitle'],
//     populate: {
//       duration: {
//         fields: ["countertext", "countercontent"],
//       },
//       fee_per_year: {
//         fields: ["countertext", "countercontent"],
//       },
//       eligibility_criteria: {
//         fields: ["countertext", "countercontent"],
//       },
//       phdoverview: {
//         fields: ["title", "desc"],
//         populate: {
//           overviewimage: {
//             fields: ["url"],
//           },
//         },
//       },
//       scholarsponsoredparttime: {
//         fields: ["title1", "desc1", "title2", "desc2", "title3", "desc3"],
//         populate: {
//           scholarshipimg: {
//             fields: ["url"],
//           },
//         },
//       },
//       connectingtalent: {
//         fields: ["title", "desc"],
//         populate: {
//           dreamimg: { fields: ["url"] },
//           dreamcounter: { fields: ["countertext", "countercontent"] },
//         },
//       },
//       phdlogoslide: {
//         fields: ["url"],
//       },
//       careeroptions: {
//         fields: ["title", "desc", "testimonialheading"],
//         populate: {
//           careerpointers: { fields: ["listtext", "listlink"] },
//           testimonials: { fields: ["countertext", "countercontent"] },
//         },
//       },
//       phdoutcome: {
//         fields: ["title"],
//         populate: {
//           phdoutcome: { fields: ["outcomedesc"] },
//         },
//       },
//       programmehighlight: {
//         fields: ["heading", "phdcontent"],
//         populate: {
//           bgimage: { fields: ["url"] },
//         },
//       },
//       pursue: {
//         fields: ["title", "pursue"],
//         populate: {
//           bgimage: { fields: ["url"] },
//         },
//       },
//       phdadmissionselect: {
//         fields: ['title1', 'desc1', 'title2', 'desc2'],
//         populate:  {
//           bgimg: {
//             fields: ['url']
//           }
//         }
//       },
//      phdprogrammefaq: {
//       fields: ['ques', 'ans']
//      },

//      seo: {
//        populate : '*'
//      },
//      school_category: {
//        fields : ['slug', 'name']
//      },
//      commence_journey: {
//         populate : '*'
//      }
//     },
//   }
