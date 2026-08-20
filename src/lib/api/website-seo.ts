import { FETCH_STRAPI_URL } from "@/app/constant";
///////////////////// HOME PAGE SEO /////////////////////////////////
export async function HomePageSEO(): Promise<HomepageSeoResponse["data"] | null> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/home-page?populate[seofields][populate][shareImage][fields][0]=url`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch homepage seo");

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Home page SEO fetch error:", error);
    return null;
  }
}

// =======================
// HOMEPAGE SEO DATA
// =======================
export type HomepageSeoData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seofields: SeoFields | null;
};

// =======================
// HOMEPAGE SEO RESPONSE
// =======================
export type HomepageSeoResponse = {
  data: HomepageSeoData | null;
  meta: Record<string, never>;
};
//////////////////////////////////////////////////////////////////////////////

export async function getSchoolSEO(
  rawSlug: string
): Promise<SchoolSEOResponse["data"]> {
  if (!rawSlug) return [];
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase().replace(/\/$/, "");
  const slugsToTry = [slug];

  const aliases: Record<string, string> = {
    "school-of-agriculutural-sciences": "school-of-agricultural-sciences",
    "school-of-agricultural-sciences": "school-of-agriculutural-sciences",
    "school-of-medical-allied-sciences": "school-of-medical-and-allied-sciences",
    "school-of-medical-and-allied-sciences": "school-of-medical-allied-sciences",
    "school-of-engineering-technology": "school-of-engineering-and-technology",
    "school-of-management-commerce": "school-of-management-and-commerce",
    "school-of-hotel-management-catering-technology": "school-of-hotel-management-and-catering-technology",
  };

  if (aliases[slug] && !slugsToTry.includes(aliases[slug])) {
    slugsToTry.push(aliases[slug]);
  }

  for (const s of slugsToTry) {
    try {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/schools?filters[urlslug][$eq]=${encodeURIComponent(s)}&fields[0]=schoolname&populate[school_seo][populate][shareImage][fields][0]=url`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );
      if (res.ok) {
        const json: SchoolSEOResponse = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          return json.data;
        }
      }
    } catch (error) {
      console.error(`School SEO fetch error for urlslug ${s}:`, error);
    }
  }

  for (const s of slugsToTry) {
    try {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/schools?filters[wordschoolslug][$eq]=${encodeURIComponent(s)}&fields[0]=schoolname&populate[school_seo][populate][shareImage][fields][0]=url`,
        {
          next: {
            revalidate: 3600,
          },
        }
      );
      if (res.ok) {
        const json: SchoolSEOResponse = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          return json.data;
        }
      }
    } catch (error) {
      console.error(`School SEO fetch error for wordschoolslug ${s}:`, error);
    }
  }

  return [];
}

export interface SchoolSEOResponse {
  data: SchoolSEO[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCounter: number;
      total: number;
    };
  };
}

export interface SchoolSEO {
  school_seo: SeoFields;
}

////////////////////////////////////////////////////////////////////////////

////////////////////// ACADEMIC AFFAIRS ///////////////////////////////////

export async function academicAffairsSEO(): Promise<
  AcademicAffarisResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/academic-affair?populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Academic Affairs seo");

  const json = await res.json();
  return json.data;
}

export type AcademicAffairsSeoData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: SeoFields | null;
};

export type AcademicAffarisResponse = {
  data: AcademicAffairsSeoData | null;
  meta: Record<string, never>;
};

////////////////////////////////////////////////////////////////////////////

//////////////////// PEDAGOGY ////////////////////////////////////////////

export async function pedagogySEO(): Promise<PedagogySeoResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pedagogy?populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Pedagogy seo");

  const json = await res.json();
  return json.data;
}

export type PedagogySeoData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: SeoFields | null;
};

// =======================
// HOMEPAGE SEO RESPONSE
// =======================
export type PedagogySeoResponse = {
  data: PedagogySeoData | null;
  meta: Record<string, never>;
};

////////////////////////////////////////////////////////////////////////

////////////////////// Examination ////////////////////////////////////

export async function examinationSEO(): Promise<
  ExaminationSeoResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/examination?populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Pedagogy seo");

  const json = await res.json();
  return json.data;
}

export type ExaminationSeoData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: SeoFields | null;
};

export type ExaminationSeoResponse = {
  data: ExaminationSeoData | null;
  meta: Record<string, never>;
};

///////////////////////////////////////////////////////////////////////

////////////////////// Internation Collaboration /////////////////////

export async function internationCollaborationSEO(): Promise<
  InternationCollabSeoResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/international-collaboration?fields[0]=title&populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok)
    throw new Error("Failed to fetch International Collaboration seo");

  const json = await res.json();
  return json.data;
}

export type internationalSeoData = {
  id: number;
  documentId: string;
  seo: SeoFields | null;
};

export type InternationCollabSeoResponse = {
  data: internationalSeoData | null;
  meta: Record<string, never>;
};

//////////////////////////////////////////////////////////////////////////

///////////////////// Industry Connect //////////////////////////////////
export async function industryConnectSEO(): Promise<
  IndustryConnectSeoResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/industry-connect?fields[0]=title&populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok)
    throw new Error("Failed to fetch International Collaboration seo");

  const json = await res.json();
  return json.data;
}

export type IndustryConnectSeoData = {
  id: number;
  documentId: string;
  seo: SeoFields | null;
};

export type IndustryConnectSeoResponse = {
  data: IndustryConnectSeoData | null;
  meta: Record<string, never>;
};

////////////////////////////////////////////////////////////////////////

////////////////// Dean Honor List ////////////////////////////////////

export async function deanHonorsListSEO(): Promise<
  DeanHonorsListSeoResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/dean-honor-list?fields[0]=title&populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Dean Honor List seo");

  const json = await res.json();
  return json.data;
}

export type DeanHonorsListSeoData = {
  id: number;
  documentId: string;
  seo: SeoFields | null;
};

export type DeanHonorsListSeoResponse = {
  data: DeanHonorsListSeoData | null;
  meta: Record<string, never>;
};

//////////////////////////////////////////////////////////////////////

///////////////// Notice ////////////////////////////////////////////

export async function noticeSEO(): Promise<NoticeSeoResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/notice?fields[0]=title&populate[seo][populate][shareImage][fields][0]=url`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Notice seo");

  const json = await res.json();
  return json.data;
}

export type NoticeSeoData = {
  id: number;
  documentId: string;
  seo: SeoFields | null;
};

export type NoticeSeoResponse = {
  data: NoticeSeoData | null;
  meta: Record<string, never>;
};

////////////////////////////////////////////////////////////////////

// =======================
// SEO IMAGE
// =======================
export type SeoShareImage = {
  id: number;
  documentId: string;
  url: string;
};

// =======================
// SEO FIELDS
// =======================
export type SeoFields = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  metaKeyword: string;
  noIndex: boolean;
  tags: string;
  shareImage: SeoShareImage | null;
};
