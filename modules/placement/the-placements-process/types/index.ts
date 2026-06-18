export interface IItems {
  id: number;
  description: string;
}

export interface PlacementPolicyCardProps {
  title: string;
  description: string;
  items: IItems[];
  note: string;
}

export interface CDCProgramProps {
  id: string;
  title: string;
  sections: {
    id: number;
    title: string;
    description: string;
  }[];
}