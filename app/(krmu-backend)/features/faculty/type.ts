// src/features/faculty/types.ts

export interface CreateFacultyDto {
  name: string;
  image?: File | null;
  school_category_id?: number;
}

export interface UpdateFacultyDto {
  name: string;
  image?: File | null;
  school_category_id?: number;
}

export interface Faculty {
  id: number;
  name: string;
  image: string | null;
  school_category_id: number | null;
}

export interface FacultyResponse {
  success: boolean;
  message: string;
  data: Faculty;
}