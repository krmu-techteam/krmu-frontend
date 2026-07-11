import { StrapiMedia } from "./common";

export interface AdmissionProcessCard {
  id: number;
  title: string;
  cardclass: string;
  cardcontent: string;
  cardimg: StrapiMedia;
}

export interface AwardsRecognitionCardType {
  id: number;
  title: string;
  cardclass: string;
  cardcontent: string;
  cardimg: StrapiMedia;
}

export interface AdmissionCardsDataResponse {
  data: {
    id: string;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    admissionprocesscards: AdmissionProcessCard[];
    awardsrecognition: AwardsRecognitionCardType[]; // ✅ Add this
  };
}

