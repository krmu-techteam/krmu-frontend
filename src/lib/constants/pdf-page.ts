import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getPDFPageData(
  slug: string = "phd-submission-checklist"
): Promise<PDFPageResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pdfs?filters[slug][$eq]=${slug}&populate[pdf_content_card][fields][0]=content&populate[pdf_content_card][populate][pdf_btn][fields][0]=btn_text&populate[pdf_content_card][populate][pdf_btn][fields][1]=btn_link`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch pdf page data");
  const json = await res.json();
  return json.data;
}

export interface PDFPageResponse {
  data: Item[];
  meta: Meta;
}

export interface Item {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  pdf_content_card: PdfContentCard[];
}

export interface PdfContentCard {
  id: number;
  content: string;
  pdf_btn: PdfButton;
}

export interface PdfButton {
  id: number;
  btn_text: string;
  btn_link: string;
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

// {

// filters: {
//   slug: {
//     $eq: 'phd-submission-checklist',
//   },
// },
//  populate: {
//    pdf_content_card : {
//      fields: ['content'],
//      populate: {
//        pdf_btn: {
//          fields: ['btn_text', 'btn_link']
//        }
//      }
//    }
//  }
// }

export interface MainPdfPageResponse {
  data: MainPdfPageData;
  meta: MainPdfPageMeta;
}

/* ---------- Main Data ---------- */

export interface MainPdfPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pdf_cards: MainPdfPageCard[];
}

/* ---------- Cards ---------- */

export interface MainPdfPageCard {
  id: number;
  content: string;
  pdf_btn: MainPdfPageButton;
}

export interface MainPdfPageMeta {
  pagination: MainPdfPagePagination;
}

export interface MainPdfPagePagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}


/* ---------- Button ---------- */

export interface MainPdfPageButton {
  id: number;
  btn_text: string;
  btn_link: string;
}

/* ---------- Meta ---------- */

export async function getMainPDFPageData(): Promise<
  MainPdfPageResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/pdf-page?populate[pdf_cards][fields][0]=content&populate[pdf_cards][populate][pdf_btn][fields][0]=btn_text&populate[pdf_cards][populate][pdf_btn][fields][1]=btn_link`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Main Pdf page data");
  }

  const json: MainPdfPageResponse = await res.json();
  return json.data;
}
