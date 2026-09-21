export interface CareerProspectItemType {
  title: string;
  desc: string;
}

export interface CareerProspectSlideType {
  id: number;
  items: CareerProspectItemType[];
}

export interface CareerProspectsContentType {
  badge: string;
  title: string;
  description: string;
  image: string;
  slides: CareerProspectSlideType[];
}

export interface CareerProspectsPageContentType {
  careerProspects: CareerProspectsContentType;
}
