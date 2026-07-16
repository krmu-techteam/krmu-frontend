export interface ApiResponse<T> {
  data: T;
  meta: Record<string, never>;
}

export interface LeadershipDomain {
  id: number;
  documentId: string;
  leadership: Leadership[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Leadership {
  id: number;
  name: string;
  desg: string;
  content: string;
  leadership_img: Media;
}

export interface Media {
  id: number;
  documentId: string;
  url: string;
}

export type LeadershipApiResponse = ApiResponse<LeadershipDomain>;
