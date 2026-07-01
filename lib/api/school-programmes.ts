import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  SchoolPhDProgrammeResponse,
  SCHOOLPROGRAMMECARDINFORESPONSE,
  SchoolProgrammeResponse,
} from "../types/school-programme";

export async function getSchoolProgrammeData(
  slug?: string,
): Promise<SchoolProgrammeResponse["data"]> {
  let urlcode = "";
  if (slug) {
    urlcode = `filters[programmeslug][$eq]=${slug}&`;
  }
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/school-programmes?${urlcode}&populate[herosection][populate][herobtn][populate]=*&populate[herosection][populate][heroimg][populate]=*&populate[programmeeligibility][populate]=*&populate[programmescope][populate]=*&populate[programmehighlight][populate][programmehighlightcards][populate]=*&populate[specialisation][populate][specialisationcards][populate]=*&populate[admissionprocess][populate][admissionbtn][populate]=*&populate[admissionprocess][populate][admissionprocesscard][populate]=*&populate[admissionprocess][populate][desktopadmissionprocessimg][populate]=*&populate[curriculum][populate][currbtn][populate]=*&populate[curriculum][populate][years][populate][semester][populate][subjects][populate]=*&populate[curriculum][populate][years][populate][semester][populate][pdfbtns][populate]=*&populate[labsfacilities][populate]=*&populate[beyondclassroom][populate]=*&populate[career][populate]=*&populate[dreamcareer][populate]=*&populate[financialassistance][populate]=*&populate[toc][populate][tocfaq][populate]=*&populate[toc][populate][tocimg][populate]=*&populate[toc][populate][tocbtn][populate]=*&populate[ourlocation][populate]=*`,
    // `${FETCH_STRAPI_URL}/api/school-programmes?${urlcode}populate[herosection][populate][herobtn][populate]=*&populate[herosection][populate][heroimg][populate]=*&populate[programmeeligibility][populate]=*&populate[programmescope][populate]=*&populate[programmehighlight][populate][programmehighlightcards][populate]=*&populate[specialisation][populate][specialisationcards][populate]=*&populate[admissionprocess][populate][admissionbtn][populate]=*&populate[admissionprocess][populate][admissionprocesscard][populate]=*&populate[admissionprocess][populate][desktopadmissionprocessimg][populate]=*&populate[curriculum][populate][currbtn][populate]=*&populate[curriculum][populate][years][populate][semester][populate][subjects][populate][course_name][populate]=*&populate[curriculum][populate][years][populate][semester][populate][pdfbtns][populate]=*&populate[labsfacilities][populate]=*&populate[beyondclassroom][populate]=*&populate[career][populate]=*&populate[dreamcareer][populate]=*&populate[financialassistance][populate]=*&populate[toc][populate][tocfaq][populate]=*&populate[toc][populate][tocimg][populate]=*&populate[toc][populate][tocbtn][populate]=*&populate[ourlocation][populate]=*`,
    `${FETCH_STRAPI_URL}/api/school-programmes?${urlcode}populate[herosection][populate][herobtn][populate]=*&populate[herosection][populate][heroimg][populate]=*&populate[programmeeligibility][populate]=*&populate[programmescope][populate]=*&populate[programmehighlight][populate][programmehighlightcards][populate]=*&populate[specialisation][populate][specialisationcards][populate]=*&populate[admissionprocess][populate][admissionbtn][populate]=*&populate[admissionprocess][populate][admissionprocesscard][populate]=*&populate[admissionprocess][populate][desktopadmissionprocessimg][populate]=*&populate[curriculum][populate][currbtn][populate]=*&populate[curriculum][populate][years][populate][semester][populate][subjects][populate][course_name][populate]=*&populate[curriculum][populate][years][populate][semester][populate][pdfbtns][populate]=*&populate[labsfacilities][populate]=*&populate[beyondclassroom][populate]=*&populate[career][populate]=*&populate[dreamcareer][populate]=*&populate[financialassistance][populate]=*&populate[toc][populate][tocfaq][populate]=*&populate[toc][populate][tocimg][populate]=*&populate[toc][populate][tocbtn][populate]=*&populate[ourlocation][populate]=*&populate[school_category][fields][0]=id&populate[school_category][fields][1]=name&populate[school_category][fields][2]=slug`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch School Programme Data");
  const json: SchoolProgrammeResponse = await res.json();
  return json.data;
}

// {
//   filters: {
//     programmeslug: {
//       $eq: 'b-a-hons-psychology', // 👈 use your slug variable here
//     },
//   },
//   populate: {
//     herosection: {
//       populate: {
//         herobtn: { populate: '*' },
//         heroimg: { populate: '*' }
//       }
//     },
//     programmeeligibility: { populate: '*' },
//     programmescope: { populate: '*' },
//     programmehighlight: {
//       populate: {
//         programmehighlightcards: { populate: '*' }
//       }
//     },
//     specialisation: {
//       populate: {
//         specialisationcards: { populate: '*' }
//       }
//     },
//     admissionprocess: {
//       populate: {
//         admissionbtn: { populate: '*' },
//         admissionprocesscard: { populate: '*' },
//         desktopadmissionprocessimg: { populate: '*' }
//       }
//     },
//     curriculum: {
//     fields: ['only_years'],
//       populate: {
//         currbtn: { populate: '*' },
//         years: {
//           populate: {
//             semester: {
//               populate: {
//                 subjects: {
//                   populate: {
//                     course_name: { populate: '*' } // Fixed typo here
//                   }
//                 },
//                 pdfbtns: { populate: '*' }
//               }
//             }
//           }
//         }
//       }
//     },
//     labsfacilities: { populate: '*' },
//     beyondclassroom: { populate: '*' },
//     career: { populate: '*' },
//     dreamcareer: { populate: '*' },
//     financialassistance: { populate: '*' },
//     toc: {
//       populate: {
//         tocfaq: { populate: '*' },
//         tocimg: { populate: '*' },
//         tocbtn: { populate: '*' }
//       }
//     },
//     ourlocation: { populate: '*' },

//     school_category: {
//       fields: ["id", "name", "slug"],
//     },
//   }
// }

export async function getSchoolProgrammePhdSchema(
  schoolCatName: string,
): Promise<SchoolPhDProgrammeResponse["data"]> {
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/school-programmes?filters[degrees][name][$eq]=${deg}&filters[school_categories][name][$eq]=${schoolCatName}&fields[0]=title&fields[1]=programmeslug&populate[criteria][fields][0]=Duration&populate[criteria][fields][1]=eligibility_criteria&populate[criteria][fields][2]=semester_i&populate[criteria][fields][3]=semester_ii&populate[criteria][fields][4]=programme_fee_per_year&populate[criteria][fields][5]=eligibility_utm_links&populate[criteria][populate][degree][fields][0]=name&populate[criteria][populate][degree][fields][1]=slug&pagination[pageSize]=50&pagination[page]=1&sort[0]=id:asc`,
    `${FETCH_STRAPI_URL}/api/phd-single-programmes?filters[school_category][name][$eq]=${schoolCatName}&field[0]=title&field[1]=phdslug[populate]=*`,
    {
      next: {
        revalidate: 28800,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to school PHD Programme Info");
  const json: SchoolPhDProgrammeResponse = await res.json();
  return json.data;
}

export async function getSchoolProgrammesForSchema(
  schoolCatName: string,
): Promise<SCHOOLPROGRAMMECARDINFORESPONSE["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/school-programmes?filters[school_category][name][$eq]=${schoolCatName}&fields[0]=title&fields[1]=programmeslug&pagination[page]=1&pagination[pageSize]=100`,
    {
      next: {
        revalidate: 43200,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch school programmes");

  const json: SCHOOLPROGRAMMECARDINFORESPONSE = await res.json();
  return json.data;
}
export async function getSchoolProgrammeInfoByDegree(
  deg: string = "Undergraduate Programmes",
  schoolCatName: string,
): Promise<SCHOOLPROGRAMMECARDINFORESPONSE["data"]> {
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/school-programmes?filters[degrees][name][$eq]=${deg}&filters[school_categories][name][$eq]=${schoolCatName}&fields[0]=title&fields[1]=programmeslug&populate[criteria][fields][0]=Duration&populate[criteria][fields][1]=eligibility_criteria&populate[criteria][fields][2]=semester_i&populate[criteria][fields][3]=semester_ii&populate[criteria][fields][4]=programme_fee_per_year&populate[criteria][fields][5]=eligibility_utm_links&populate[criteria][populate][degree][fields][0]=name&populate[criteria][populate][degree][fields][1]=slug&pagination[pageSize]=50&pagination[page]=1&sort[0]=id:asc`,
    `${FETCH_STRAPI_URL}/api/school-programmes?sort[0]=order_num:asc&filters[degree][name][$eq]=${deg}&filters[school_category][name][$eq]=${schoolCatName}&fields[0]=title&fields[1]=programmeslug&fields[2]=highlightitle&populate[criteria][fields][0]=Duration&populate[criteria][fields][1]=eligibility_criteria&populate[criteria][fields][2]=semester_i&populate[criteria][fields][3]=semester_ii&populate[criteria][fields][4]=programme_fee_per_year&populate[criteria][fields][5]=eligibility_utm_links&pagination[page]=1&pagination[pageSize]=50`,
    {
      next: {
        revalidate: 43200,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to school Programme Info");
  const json: SCHOOLPROGRAMMECARDINFORESPONSE = await res.json();
  return json.data;
}

export async function getSchoolProgrammePhdDataDegree(
  deg: string = "Doctoral Programme",
  schoolCatName: string,
): Promise<SchoolPhDProgrammeResponse["data"]> {
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/school-programmes?filters[degrees][name][$eq]=${deg}&filters[school_categories][name][$eq]=${schoolCatName}&fields[0]=title&fields[1]=programmeslug&populate[criteria][fields][0]=Duration&populate[criteria][fields][1]=eligibility_criteria&populate[criteria][fields][2]=semester_i&populate[criteria][fields][3]=semester_ii&populate[criteria][fields][4]=programme_fee_per_year&populate[criteria][fields][5]=eligibility_utm_links&populate[criteria][populate][degree][fields][0]=name&populate[criteria][populate][degree][fields][1]=slug&pagination[pageSize]=50&pagination[page]=1&sort[0]=id:asc`,
    `${FETCH_STRAPI_URL}/api/phd-single-programmes?filters[degree][$eq]=${deg}&filters[school_category][name][$eq]=${schoolCatName}&field[0]=title&field[1]=phdslug&field[2]=degree&populate[school_category][fields][0]=name&populate[school_category][fields][1]=slug&populate[criteria][populate]=*`,
    {
      next: {
        revalidate: 28800,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to school PHD Programme Info");
  const json: SchoolPhDProgrammeResponse = await res.json();
  return json.data;
}

// {
//   filters: {
//     degrees: {
//       name: {
//         $eq: "Undergraduate Programmes"
//       }
//     }
//   },
//   fields: ["title", "programmeslug"],
//   populate: {
//     criteria: {
//       fields: ["Duration", "eligibility_criteria", 'semester_i', 'semester_ii', 'programme_fee_per_year', 'eligibility_utm_links'],
//       populate: {
//        degree: {
//          fields: ['name','slug' ]
//        }
//        }

//     }
//   },
//   pagination: {
//     pageSize: 50,
//     page: 1
//   },
//   sort: ["id:asc"]
// }

// {
//   filters: {
//   degree: {
//     name: { $eq: "Undergraduate Programmes" }
//   },
//  school_category: {
//   name: { $eq: "SOET" }
//  }
// },
//  fields: ["title", "programmeslug", "highlightitle"],
//  populate: {
//    criteria: {
//       fields: ["Duration", "eligibility_criteria", 'semester_i', 'semester_ii', 'programme_fee_per_year', 'eligibility_utm_links'],

//    }
//  },
//   pagination: {
//     page: 1,
//     pageSize: 50  // or any number you need
//   }
// }
