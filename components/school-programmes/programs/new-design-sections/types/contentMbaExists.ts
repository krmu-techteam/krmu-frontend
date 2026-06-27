export interface DemandType {
  id: string;
  label: string;
}

export interface MbaExistsContentType {
  badge: string;
  titleLineOne: string;
  titleLineTwo: string;
  readMoreLink: string;
  details?: string;
  demands: DemandType[];
}

export interface MbaExistsPageContentType {
  mbaExists: MbaExistsContentType;
}

