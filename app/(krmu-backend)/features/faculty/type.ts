// src/features/faculty/types.ts

export interface Faculty {
  id: number;
  name: string;
  designation: string;
  qualification: string | null;
  description: string | null;
  school_category_id: number | null;
  image: string | null;
}

export interface FacultyResponse {
  success: boolean;
  message: string;
  data: Faculty;
}
