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

export interface FacultyListResponse {
  success: boolean;
  message: string;
  data: Faculty[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FacultyQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  school_category_id?: number;
}
