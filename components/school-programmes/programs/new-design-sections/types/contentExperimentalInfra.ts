export interface InfraCardType {
  image: string;
  alt: string;
  label: string;
  title: string;
  desc: string;
}

export interface ExperimentalInfraContentType {
  badge: string;
  title: string;
  cards: InfraCardType[];
}

export interface ExperimentalInfraPageContentType {
  experimentalInfra: ExperimentalInfraContentType;
}
