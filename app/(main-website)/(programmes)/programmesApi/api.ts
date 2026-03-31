// /api/schools?fields[0]=schoolname&populate[school_category][fields][0]=name&populate[school_category][fields][1]=slug

import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getAllSchoolsInfo() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/schools?fields[0]=schoolname&populate[school_category][fields][0]=name&populate[school_category][fields][1]=slug`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch School Info");
  const json: AllSchoolsResponse = await res.json();
  return json.data;
}
export async function getAllDegreeInfo() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/degrees?sort[0]=name:desc&fields[0]=name&fields[1]=slug`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Degree Info");
  const json: DegreeResponse = await res.json();
  return json.data;
}

// Root response
export interface AllSchoolsResponse {
  data: SchoolItem[];
  meta: Meta;
}

// Each school item
export interface SchoolItem {
  id: number;
  documentId: string;
  schoolname: string;
  school_category: SchoolCategory;
}

// Nested category
export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

// Meta & pagination
export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

///////////////////////// Degree Response

export interface DegreeResponse {
  data: ProgrammeLevel[];
  meta: Meta;
}

export interface ProgrammeLevel {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

///////////////////////////////////////////////////////
// Get School Programme info

export interface Criteria {
  id: number;
  eligibility_criteria: string;
  Duration: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
  programme_offered_number: string;
}

export interface Programme {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
  criteria: Criteria;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProgrammesResponse {
  data: Programme[];
  meta: {
    pagination: Pagination;
  };
}

export async function getAllSchoolProgrammeByDegOrCatPaginated( 
  deg: string = "undergraduate-programmes",
  cat: string = "soet",
  page: number = 1,
  pageSize: number = 6
): Promise<ProgrammesResponse> {
  const url =
    `${FETCH_STRAPI_URL}/api/school-programmes` +
    `?sort[0]=order_num:asc&filters[degree][slug][$eq]=${deg}` +
    `&filters[school_category][slug][$eq]=${cat}` +
    `&fields[0]=title` +
    `&fields[1]=programmeslug` +
    `&populate[criteria][populate]=*` +
    `&pagination[page]=${page}` +
    `&pagination[pageSize]=${pageSize}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch programmes");

  return res.json();
}

///////////////////////////////////////////// PHD Programmes
export interface PhdCriteria {
  id: number;
  eligibility_criteria: string;
  Duration: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
  programme_offered_number: string;
}

export interface PhdProgramme {
  id: number;
  documentId: string;
  phdslug: string;
  heading: string;
  criteria: PhdCriteria;
}

export interface PhdPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PhdProgrammesResponse {
  data: PhdProgramme[];
  meta: {
    pagination: PhdPagination;
  };
}

export async function getAllSchoolPhdProgrammeByCatPaginated(
  cat: string = "soet",
  page: number = 1,
  pageSize: number = 6
): Promise<PhdProgrammesResponse> {
  const url =
    `${FETCH_STRAPI_URL}/api/phd-single-programmes` +
    `?filters[school_category][slug][$eq]=${cat}` +
    `&fields[0]=phdslug` +
    `&fields[1]=heading` +
    `&populate[criteria][populate]=*` +
    `&pagination[page]=${page}` +
    `&pagination[pageSize]=${pageSize}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch PhD programmes");
  }

  return res.json();
}

///////////////// search query

export async function searchSchoolProgrammes(
  searchQuery: string = "",
  page: number = 1,
  pageSize: number = 6
): Promise<ProgrammesResponse> {
  // Start query string
  const queryParams = new URLSearchParams({
    "fields[0]": "title",
    "fields[1]": "programmeslug",
    "populate[criteria][populate]": "*",
    "pagination[page]": page.toString(),
    "pagination[pageSize]": "1000",
  });

  if (searchQuery) {
    queryParams.append("filters[title][$containsi]", searchQuery);
  }

  const url = `${FETCH_STRAPI_URL}/api/school-programmes?${queryParams.toString()}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch school programmes");

  return res.json();
}

export async function searchPhdProgrammes(
  searchQuery: string = "",
  page: number = 1,
  pageSize: number = 6
): Promise<PhdProgrammesResponse> {
  // Build query parameters safely
  const queryParams = new URLSearchParams({
    "fields[0]": "heading",
    "fields[1]": "phdslug",
    "populate[criteria][populate]": "*",
    "pagination[page]": page.toString(),
    "pagination[pageSize]": "1000",
  });

  if (searchQuery) {
    queryParams.append("filters[heading][$containsi]", searchQuery);
  }

  const url = `${FETCH_STRAPI_URL}/api/phd-single-programmes?${queryParams.toString()}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch PhD programmes");

  return res.json();
}

// /api/school-programmes?filters[title][$contains]=B.Tech.&populate[criteria][populate]=*&fields[0]=title&fields[1]=programmeslug&pagination[pageSize]=6&pagination[page]=1

// {
//   filters: {
//     title: {
//       $contains: 'B.Tech.'
//     }
//   },
//   populate: {
//     criteria: {
//       populate: '*'
//     }
//   },
//   fields: ['title', 'programmeslug'],
//   pagination: {
//     pageSize: 6,
//     page: 1
//   }
// }

// /api/phd-single-programmes?filters[heading][$contains]=p&populate[criteria][populate]=*&fields[0]=heading&fields[1]=phdslug&pagination[pageSize]=6&pagination[page]=1
// {
//   filters: {
//     heading: {
//       $containsi: 'computer' // case-insensitive partial match
//     }
//   },
//   populate: {
//     criteria: {
//       populate: '*' // fetch all nested relations of criteria
//     }
//   },
//   fields: ['heading', 'phdslug'],
//   pagination: {
//     pageSize: 6,
//     page: 1
//   }
// }
