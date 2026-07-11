import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  AdmissionBanner,
  AdmissionHeroBannerResponse,
  AdmissionPageResponse,
  VisitUs,
  VisitUsResponse,
} from "../types/admission";
import { AdmissionCardsDataResponse } from "../types/admissioncards";
import { FeeCardComponentResponse, FeeDetailsInfo } from "../types/FeeCard";

export async function getAdmissionPageData(): Promise<
  AdmissionPageResponse["data"]["AdmissionPageComponent"]
> {
  // const res = await fetch(`https://truthful-cabbage-82fd27e8f6.strapiapp.com/api/home-page?populate[PageContent][populate]=*`, {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/admission?populate[AdmissionPageComponent][populate]=*`,
    {
      // Use ISR (revalidates every 60 seconds)
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch home page");

  const json: AdmissionPageResponse = await res.json();
  return json.data.AdmissionPageComponent;
}
export async function getAdmissionProcessCardsData(): Promise<
  AdmissionCardsDataResponse["data"]["admissionprocesscards"]
> {
  // const res = await fetch(`https://truthful-cabbage-82fd27e8f6.strapiapp.com/api/home-page?populate[PageContent][populate]=*`, {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/admission?populate[admissionprocesscards][fields][0]=title&populate[admissionprocesscards][fields][1]=cardclass&populate[admissionprocesscards][fields][2]=cardcontent&populate[admissionprocesscards][populate][cardimg]=true`,
    {
      // Use ISR (revalidates every 60 seconds)
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch home page");

  const json: AdmissionCardsDataResponse = await res.json();
  return json.data.admissionprocesscards;
}

// {
//   populate: {
//     awardsrecognition : {
//       fields: ['title', 'cardclass', 'cardcontent'],
//       populate: {
//         cardimg: true
//       }
//     }
//   }
// }

export async function getAwardsRecognition(): Promise<
  AdmissionCardsDataResponse["data"]["awardsrecognition"]
> {
  // const res = await fetch(`https://truthful-cabbage-82fd27e8f6.strapiapp.com/api/home-page?populate[PageContent][populate]=*`, {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/admission?populate[awardsrecognition][fields][0]=title&populate[awardsrecognition][fields][1]=cardclass&populate[awardsrecognition][fields][2]=cardcontent&populate[awardsrecognition][populate][cardimg]=true`,
    {
      // Use ISR (revalidates every 60 seconds)
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch home page");

  const json: AdmissionCardsDataResponse = await res.json();
  return json.data.awardsrecognition;
}

export async function getVisitUsData(): Promise<VisitUs> {
  const res = await fetch(`${FETCH_STRAPI_URL}/api/admission?populate[visitus]=*`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Visit Us data");
  }

  const json: VisitUsResponse = await res.json();
  return json.data.visitus;
}

export async function getFeeCardData(): Promise<FeeDetailsInfo[]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/admission?populate[feedetailsinfos][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Fee Card Data");
  }

  const json: FeeCardComponentResponse = await res.json();
  return json.data.feedetailsinfos;
}
export async function getAdmissionBannerData(): Promise<AdmissionBanner[]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/admission?populate[admissionherobanner][populate]=*`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Fee Card Data");
  }

  const json: AdmissionHeroBannerResponse = await res.json();
  return json.data.admissionherobanner;
}

