import { FETCH_STRAPI_URL, KRMUWordUrl } from "@/app/constant";

export async function getAllBlogs() {
  let allPosts: any[] = [];
  let page = 1;
  const perPage = 100;

  try {
    while (true) {
      const res = await fetch(
        `${KRMUWordUrl}/blog/wp-json/wp/v2/posts?_fields=slug,modified&per_page=${perPage}&page=${page}`,
        { next: { revalidate: 3600 } }
      );

      if (!res.ok) break;

      const data = await res.json();

      if (!data.length) break;

      allPosts = [...allPosts, ...data];
      page++;
    }
  } catch (error) {
    console.error("Error fetching all blogs for SEO:", error);
  }

  return allPosts;
}

export async function getAllNewsEvents() {
  let allNewsEvents: any[] = [];
  let page = 1;
  const perPage = 100;

  try {
    while (true) {
      const res = await fetch(
        // `https://krmangalam.edu.in/wp-json/wp/v2/posts?_fields=slug,modified&per_page=${perPage}&page=${page}`,
        `${KRMUWordUrl}/wp-json/wp/v2/events-and-news?_fields=slug,modified&page=${page}&per_page=${perPage}`,
        { next: { revalidate: 3600 } }
      );

      if (!res.ok) break;

      const data = await res.json();

      if (!data.length) break;

      allNewsEvents = [...allNewsEvents, ...data];
      page++;
    }
  } catch (error) {
    console.error("Error fetching all news events for SEO:", error);
  }

  return allNewsEvents;
}
export async function getAllFaculties() {
  let allFaculties: any[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const res = await fetch(
      // `https://krmangalam.edu.in/wp-json/wp/v2/posts?_fields=slug,modified&per_page=${perPage}&page=${page}`,
      `${KRMUWordUrl}/wp-json/wp/v2/faculty?_fields=slug,modified&page=${page}&per_page=${perPage}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) break;

    const data = await res.json();

    if (!data.length) break;

    allFaculties = [...allFaculties, ...data];
    page++;
  }

  return allFaculties;
}

export type FolderRouteShareImage = {
  id: number;
  documentId: string;
  url: string;
};

export type FolderRouteSeoItem = {
  id: number;
  documentId: string;
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  index: boolean;
  shareImg: FolderRouteShareImage;
  keyword: string;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type FolderRouteSeoResponse = {
  data: FolderRouteSeoItem[];
  meta: {
    pagination: Pagination;
  };
};

export async function folderRouteSEO(
  slug: string = ""
): Promise<FolderRouteSeoResponse["data"]> {
<<<<<<< HEAD
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/site-seos?sort[0]=title:asc&filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=metaDescription&fields[2]=canonicalUrl&fields[3]=index&fields[4]=keyword&populate[shareImg][fields][0]=url`,
    {
      next: { revalidate: 3600 }
    }
  );
  if (!res.ok) throw new Error("Failed to fetch seo");
  const json = await res.json();
  return json.data;
}

export async function getAllSchools() {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/schools?fields[0]=schoolname&fields[1]=urlslug`,
    { next: { revalidate: 3600 } }
  );
=======
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/site-seos?sort[0]=title:asc&filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=metaDescription&fields[2]=canonicalUrl&fields[3]=index&fields[4]=keyword&populate[shareImg][fields][0]=url`,
      {
        cache: "no-cache"
      }
    );
    if (!res.ok) throw new Error("Failed to fetch seo");
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Folder route SEO fetch error:", error, slug);
    return [];
  }
}

export async function getAllSchools() {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/schools?fields[0]=schoolname&fields[1]=urlslug`,
      { cache: "no-store" }
    );
>>>>>>> 99befcb590b70b14fa4c7eaf2ae0eeab4b3dc6ab

    if (!res.ok) {
      throw new Error("Failed to fetch schools");
    }

    const json = await res.json();
    return json.data as {
      id: number;
      documentId: string;
      schoolname: string;
      urlslug: string;
    }[];
  } catch (error) {
    console.error("All schools fetch error:", error);
    return [];
  }
}

export async function getAllSchoolProgrammes() {
  let allProgrammes: any[] = [];
  let page = 1;
  let pageCount = 1;

<<<<<<< HEAD
  while (page <= pageCount) {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/school-programmes?fields[0]=programmeslug&pagination[pageSize]=50&pagination[page]=${page}`,
      { next: { revalidate: 3600 } }
    );
=======
  try {
    while (page <= pageCount) {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/school-programmes?fields[0]=programmeslug&pagination[pageSize]=50&pagination[page]=${page}`,
        { cache: "no-store" }
      );
>>>>>>> 99befcb590b70b14fa4c7eaf2ae0eeab4b3dc6ab

      if (!res.ok) throw new Error("Failed to fetch school programmes");

      const json = await res.json();
      allProgrammes = allProgrammes.concat(json.data);
      pageCount = json.meta.pagination.pageCount;
      page++;
    }
  } catch (error) {
    console.error("All school programmes fetch error:", error);
  }

  return allProgrammes as {
    id: number;
    documentId: string;
    programmeslug: string;
  }[];
}


export async function getAllSchoolPhdProgrammes() {
  let allProgrammes: any[] = [];
  let page = 1;
  let pageCount = 1;

<<<<<<< HEAD
  while (page <= pageCount) {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/phd-single-programmes?fields[0]=phdslug&pagination[pageSize]=50&pagination[page]=${page}`,
      { next: { revalidate: 3600 } }
    );
=======
  try {
    while (page <= pageCount) {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/phd-single-programmes?fields[0]=phdslug&pagination[pageSize]=50&pagination[page]=${page}`,
        { cache: "no-store" }
      );
>>>>>>> 99befcb590b70b14fa4c7eaf2ae0eeab4b3dc6ab

      if (!res.ok) throw new Error("Failed to fetch PhD programmes");

      const json = await res.json();
      allProgrammes = allProgrammes.concat(json.data);
      pageCount = json.meta.pagination.pageCount;
      page++;
    }
  } catch (error) {
    console.error("All PhD programmes fetch error:", error);
  }

  return allProgrammes as {
    id: number;
    documentId: string;
    phdslug: string;
  }[];
}




export async function getAllPhotoGalleries() {
  let allGalleries: {
    id: number;
    documentId: string;
    slug: string;
  }[] = [];

  let page = 1;
  let pageCount = 1;

<<<<<<< HEAD
  while (page <= pageCount) {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/photo-galleries?fields[0]=slug&pagination[pageSize]=50&pagination[page]=${page}`,
      { next: { revalidate: 3600 } }
    );
=======
  try {
    while (page <= pageCount) {
      const res = await fetch(
        `${FETCH_STRAPI_URL}/api/photo-galleries?fields[0]=slug&pagination[pageSize]=50&pagination[page]=${page}`,
        { cache: "no-store" }
      );
>>>>>>> 99befcb590b70b14fa4c7eaf2ae0eeab4b3dc6ab

      if (!res.ok) throw new Error("Failed to fetch photo galleries");

      const json = await res.json();

      allGalleries = allGalleries.concat(json.data);
      pageCount = json.meta.pagination.pageCount;
      page++;
    }
  } catch (error) {
    console.error("All photo galleries fetch error:", error);
  }

  return allGalleries;
}
