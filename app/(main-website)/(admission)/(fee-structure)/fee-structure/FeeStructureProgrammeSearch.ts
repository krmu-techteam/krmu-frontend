import { FETCH_STRAPI_URL } from "@/app/constant";

function normalize(text: string | null | undefined) {
  if (!text) return "";
  return text.toLowerCase().replace(/[\.\s]/g, "");
}

export async function getAllProgramme(
  query: string = "",
): Promise<ProgrammeItem[]> {
  // Fetch school programmes
  let schoolData: any[] = [];
  let page = 1;
  let pageCount = 1;
  do {
    const queryParams = new URLSearchParams({
      "sort[0]": "title:asc",
      "filters[title][$containsi]": `${query}`,
      "fields[0]": "title",
      "fields[1]": "programmeslug",
      "pagination[pageSize]": "100",
      "pagination[page]": page.toString(),
    });

    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/school-programmes?${queryParams.toString()}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) throw new Error("Failed to fetch School Info");

    const json = await res.json();
    schoolData = [...schoolData, ...json.data];
    pageCount = json.meta.pagination.pageCount;
    page++;
  } while (page <= pageCount);

  // Fetch PhD programmes
  let phdData: any[] = [];
  page = 1;
  pageCount = 1;
  do {
    const queryParams = new URLSearchParams({
      "sort[0]": "heading:asc",
      "filters[heading][$containsi]": `${query}`,
      "fields[0]": "heading",
      "fields[1]": "phdslug",
      "pagination[pageSize]": "100",
      "pagination[page]": page.toString(),
    });

    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/phd-single-programmes?${queryParams.toString()}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) throw new Error("Failed to fetch PhD Info");

    const json = await res.json();
    phdData = [...phdData, ...json.data];
    pageCount = json.meta.pagination.pageCount;
    page++;
  } while (page <= pageCount);

  // Map PhD programmes to ProgrammeItem
  const mappedPhd: ProgrammeItem[] = phdData.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.heading,
    programmeslug: item.phdslug,
  }));

  // Dedup: drop school-programme rows whose normalized title collides with a PhD heading (stale duplicates)
  const normalizedPhdTitles = new Set(
    mappedPhd.map((item) => normalize(item.title)),
  );

  const schoolMapped: ProgrammeItem[] = schoolData.map((item: any) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    programmeslug: item.programmeslug,
  }));

  const schoolDeduped = schoolMapped.filter(
    (item) => !normalizedPhdTitles.has(normalize(item.title)),
  );

  return [...mappedPhd, ...schoolDeduped];
}

export interface ProgrammeItem {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProgrammeResponse {
  data: ProgrammeItem[];
  meta: {
    pagination: Pagination;
  };
}
