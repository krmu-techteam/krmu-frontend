export interface ContactInfoType {
  id: string;
  icon: string;
  label: string;
  value: string;
  link: string;
}

export interface LocationContentType {
  badge: string;
  title: string;
  description: string;
  image: string;
  contactInfo: ContactInfoType[];
}

export interface LocationPageContentType {
  location: LocationContentType;
}
