import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  FacultyResponse,
  SCHOOLEVENTSANDEXPRESPONSE,
  SchoolsResponse,
  School,
} from "../types/schools";
import { SingleFacultyResponse } from "./common";

const SCHOOL_SLUG_ALIASES: Record<string, string> = {
  "school-of-agriculutural-sciences": "school-of-agricultural-sciences",
  "school-of-agricultural-sciences": "school-of-agriculutural-sciences",
  "school-of-medical-allied-sciences": "school-of-medical-and-allied-sciences",
  "school-of-engineering-technology": "school-of-engineering-and-technology",
  "school-of-management-commerce": "school-of-management-and-commerce",
  "school-of-hotel-management-catering-technology": "school-of-hotel-management-and-catering-technology",
  "school-of-journalism-and-mass-communication": "school-of-emerging-media-and-creator-economy",
};

const POPULATE_QUERY =
  "populate[school_category][populate]=*&populate[schoolcomps][populate]=*&populate[schoolherobanner]=true&populate[admissionbtn]=true&populate[herobutton]=true&populate[excitedbtns]=true&populate[excitedbg]=true&populate[newsletterbg]=true&populate[newsletterbtns]=true&populate[advantagimg]=true&populate[alumnilogo]=true&populate[advantageCards][populate][fields][0]=title&populate[advantageCards][populate][fields][1]=cardcontent&populate[advantageCards][populate][fields][2]=cardclass&populate[advantageCards][populate][cardimg]=true&populate[collabcards][populate]=*&populate[listitem1][populate][listsitems]=true&populate[listitem2][populate][listsitems]=true&populate[listitem3][populate][listsitems]=true&populate[coebtn1]=true&populate[coebtn2]=true&populate[knowledgepartenerlogos]=true&populate[testimonials][populate]=*&populate[eventsbtn][populate]=*&populate[facility_slide][populate]=*&populate[video_comp][populate]=*&populate[programme_offered][fields][0]=title&populate[programme_offered][fields][1]=content&populate[studentachievementsbtn][populate]=*&populate[commence_journey][populate]=*&populate[school_advantage][populate]=*&populate[fac_adv]=true&populate[fields][0]=deanvisionsubtitle&populate[deanimg][populate]=*";

export async function getSchoolBySlug(rawSlug: string): Promise<School | null> {
  if (!rawSlug) return null;
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase().replace(/\/$/, "");
  const alias = SCHOOL_SLUG_ALIASES[slug];

  const slugsToTry = [slug];
  if (alias && !slugsToTry.includes(alias)) {
    slugsToTry.push(alias);
  }
  // Try variant with or without "-and-"
  if (slug.includes("-and-")) {
    const withoutAnd = slug.replace(/-and-/g, "-");
    if (!slugsToTry.includes(withoutAnd)) slugsToTry.push(withoutAnd);
  } else {
    const withAnd = slug.replace(/-(allied|creator|technology|commerce|rehabilitation)/g, "-and-$1");
    if (!slugsToTry.includes(withAnd)) slugsToTry.push(withAnd);
  }

  // 1. Try querying urlslug directly
  for (const s of slugsToTry) {
    try {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/schools?filters[urlslug][$eq]=${encodeURIComponent(s)}&${POPULATE_QUERY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );
      if (res.ok) {
        const json: SchoolsResponse = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          return json.data[0];
        }
      }
    } catch (err) {
      console.error(`Error fetching school by urlslug (${s}):`, err);
    }
  }

  // 2. Try querying wordschoolslug directly
  for (const s of slugsToTry) {
    try {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/schools?filters[wordschoolslug][$eq]=${encodeURIComponent(s)}&${POPULATE_QUERY}`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );
      if (res.ok) {
        const json: SchoolsResponse = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          return json.data[0];
        }
      }
    } catch (err) {
      console.error(`Error fetching school by wordschoolslug (${s}):`, err);
    }
  }

  // 3. Fallback to all schools list search
  try {
    const allSchools = await getSchoolPage();
    const found = allSchools.find((item) => {
      const uSlug = item.urlslug?.trim()?.toLowerCase();
      const wSlug = item.wordschoolslug?.trim()?.toLowerCase();
      return (
        slugsToTry.includes(uSlug) ||
        slugsToTry.includes(wSlug) ||
        uSlug === slug ||
        wSlug === slug
      );
    });
    if (found) return found;
  } catch (err) {
    console.error("Fallback to getSchoolPage error:", err);
  }

  return null;
}

export async function getSchoolPage(): Promise<SchoolsResponse["data"]> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/schools?pagination[pageSize]=100&pagination[page]=1&${POPULATE_QUERY}`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    if (!res.ok) {
      console.error("Failed To Fetch AboutKRMU Data status:", res.status);
      return [];
    }

    const json: SchoolsResponse = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("getSchoolPage fetch error:", error);
    return [];
  }
}

// {

//   populate: {
//   school_category: {
//   populate: "*"
//   },
//     schoolcomps: {
//       populate: "*"
//     },
//     schoolherobanner: true,
//     admissionbtn: true,
//     herobutton : true,
//     excitedbtns : true,
//     excitedbg: true,
//     newsletterbg: true,
//     newsletterbtns : true,
//     advantagimg: true,
//     alumnilogo: true,
//     advantageCards: {
//       populate: {
//         fields: ['title', 'cardcontent', 'cardclass'],
//         cardimg: true
//       }
//     },
//     collabcards: {
//       populate: '*'
//     },
//     listitem1: {
//       populate: {
//         listsitems : true
//       }
//     },
//      listitem2: {
//       populate: {
//         listsitems : true
//       }
//     },
//      listitem3: {
//       populate: {
//         listsitems : true
//       }
//     },
//     coebtn1: true,
//     coebtn2: true,
//     knowledgepartenerlogos : true,
//     testimonials: {
//      populate: '*'
//     },
//      eventsbtn: {
//      populate: '*'
//     },
//     facility_slide : {
//      populate: '*'
//     },
//     video_comp: {
//       populate: '*'
//     },
//     programme_offered: {
//      fields: ['title', 'content']
//     },
//     studentachievementsbtn: {
//       populate: '*'
//     },
//  commence_journey: {
//      populate: '*'
//     },
//     school_advantage: {populate: '*'},
//     fac_adv: true,
//     fields: ['deanvisionsubtitle'],
//    deanimg: {
//      populate: '*'
//    }
//   }
// }

export async function getEventsAndExperiencesBySchoolCat(cat: string = "SOET") {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/news-and-events?sort[0]=title:asc&filters[school_categories][name][$eq]=${cat}&fields[0]=slug&fields[1]=title&fields[2]=content&populate[newsmedia]=true&pagination[pageSize]=40&pagination[page]=1`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    if (!res.ok) return [];
    const json: SCHOOLEVENTSANDEXPRESPONSE = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("getEventsAndExperiencesBySchoolCat error:", err);
    return [];
  }
}

// {
//   sort: ['publishedAt:asc'],
//   filters: {
//     school_categories: {
//       name: {
//         $eq: 'SOET'
//       }
//     }

//   },
//    fields: ['slug', 'title', 'content'],
//    populate: {
//     newsmedia: true
//    },
// pagination: {
//   pageSize: 40,
//   page: 1,
// },
// }

export async function getFacultyByCat(
  cat: string = "SOET",
): Promise<FacultyResponse["data"]> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/faculties?sort[0]=order_num:asc&filters[school_categories][name][$eq]=${cat}&populate[faculty_img]=true&fields[0]=faculty_name&fields[1]=facultyslug&fields[2]=faculty_card_desg&fields[3]=faculty_qualification&fields[4]=faculty_type&pagination[pageSize]=60&pagination[page]=1`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    if (!res.ok) return [];
    const json: FacultyResponse = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("getFacultyByCat error:", err);
    return [];
  }
}

// {
// sort: ['publishedAt:asc'],
// filters: {
//   school_categories: {
//     name: {
//      $eq: 'SOET'
//     }
//   },
// },

// fields: ['faculty_name', 'facultyslug', 'faculty_designation', 'faculty_qualification'],
// populate: {
//   faculty_img: true
// }
// }

// {
// sort: ['publishedAt:asc'],
// filters: {
//  school_categories: {
//     name: {
//      $eq: 'SOET'
//     }
//   },
// },
// populate: {
//   faculty_img: true
// },
// fields: ['faculty_name', 'facultyslug', 'faculty_designation', 'faculty_qualification'],
// pagination: {
//   pageSize: 40,
//   page: 1,
// },
// }

export async function getSingleFacultyBySlug(
  slug: string = "ankita-samuel-pt-1",
): Promise<SingleFacultyResponse["data"]> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/faculties?filters[facultyslug][$eq]=${slug}&fields[0]=faculty_name&fields[1]=faculty_designation&fields[2]=facultyslug&populate[faculty_img][fields][0]=url&populate[faculty_interest_areas][fields][0]=fac_int_content&populate[faculty_social_links][fields][0]=listtext&populate[faculty_social_links][fields][1]=listlink&populate[faculty_social_links][populate][listicon][fields][0]=url&populate[faculty_tab_content][populate][faculty_tab][fields][0]=tabname&populate[faculty_tab_content][populate][faculty_tab][fields][1]=tabcontent`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );
    if (!res.ok) return [];
    const json: SingleFacultyResponse = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("getSingleFacultyBySlug error:", err);
    return [];
  }
}

// {
// filters: {
//   facultyslug: {
//     $eq: 'ankita-samuel-pt-1',
//   },
// },
// fields: ['faculty_name', 'faculty_designation', 'facultyslug'],
// populate: {
// faculty_img: {
//  fields: ['url']
// },
// faculty_interest_areas : {
//  fields: ['fac_int_content']
// },
// faculty_social_links : {
//  fields: ['listtext', 'listlink'],
//  populate: {
//    listicon: {
//     fields: ['url']
//    }
//  }
// },
//  faculty_tab_content: {
//   populate: {
//     faculty_tab :{
//       fields: ['tabname', 'tabcontent']
//     }
//   }
// }
// }
// }

export async function getSchoolInfoForFacultyBySlug(
  slug: string = "school-of-agricultural-sciences",
) {
  try {
    const url = `https://krmangalam.edu.in/wp-json/wp/v2/schools?slug=${slug}&_fields=id,school_faculty`;

    const res = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json) && json.length > 0) return json;
    }

    const fallbackSlug =
      slug === "school-of-agriculutural-sciences"
        ? "school-of-agricultural-sciences"
        : slug === "school-of-agricultural-sciences"
        ? "school-of-agriculutural-sciences"
        : null;

    if (fallbackSlug) {
      const fallbackUrl = `https://krmangalam.edu.in/wp-json/wp/v2/schools?slug=${fallbackSlug}&_fields=id,school_faculty`;
      const fallbackRes = await fetch(fallbackUrl, {
        next: { revalidate: 3600 },
      });
      if (fallbackRes.ok) {
        return await fallbackRes.json();
      }
    }

    return [];
  } catch (err) {
    console.error("getSchoolInfoForFacultyBySlug error:", err);
    return [];
  }
}

export async function getWordSchoolFaculty(
  wordFacultyId: number,
  page: number = 1,
  perPage: number = 4,
) {
  const url = `https://krmangalam.edu.in/wp-json/wp/v2/faculty?school_faculty=${wordFacultyId}&_fields=id,title,acf,featured_media,slug&per_page=${perPage}&page=${page}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return { data: [], totalPages: 0 };
    }

    const data = await res.json();
    const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 0;

    return {
      data,
      totalPages,
    };
  } catch (err) {
    console.error("getWordSchoolFaculty error:", err);

    return {
      data: [],
      totalPages: 0,
    };
  }
}

// export async function getWordSchoolFaculty(wordFacultyId: number) {
//   const res = await fetch(
//     `https://krmangalam.edu.in/wp-json/wp/v2/faculty?school_faculty=${wordFacultyId}&_fields=id,title,acf,featured_media,slug&per_page=4&page=1`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch Faculty info");
//   const json: WordSchoolFacultyResponse = await res.json();
//   return json;
// }
