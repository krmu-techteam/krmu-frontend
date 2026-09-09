export interface CDCTeam {
  id: number;
  name: string;
  designation: string;
  qualifications: string | null;
  description: string | null;
  school_category_id: number | null;
  image_url: string | null;
}

export interface CDCTeamResponse {
  success: boolean;
  message: string;
  data: CDCTeam;
}
