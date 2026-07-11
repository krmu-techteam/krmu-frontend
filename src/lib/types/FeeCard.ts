import { StrapiMedia } from "./common";

export interface FeeInfoPriceDetails {
  id: number;
  refund: boolean;
  price: string;
  heading: string;
}

export interface FeeDetailsInfo {
  id: number;
  feecardtitle: string;
  feecardimg: StrapiMedia;
  feepricedetails: FeeInfoPriceDetails[];
}

export interface FeeCardComponentResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    feedetailsinfos: FeeDetailsInfo[];
  };
}
