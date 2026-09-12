export interface CDCTeamMember {
  id: number;
  name: string;
  designation: string;
  email: string;
  image: string;
  sort_order?: number;
  status?: string;
}

export interface CDCTeamResponse {
  data: CDCTeamMember[];
}
