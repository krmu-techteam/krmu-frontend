

export interface StudAchievementResponse {
  data: AchievementItem[];
  meta: MetaData;
}

export interface AchievementItem {
  id: number;
  documentId: string;
  achievement_content: string;
  achivementimage: AchievementImage[];
  school_categories: SchoolCategory[];
}

export interface AchievementImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface MetaData {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}


export interface StudentAchievementResponse {
  data: AchievementItem[];
  meta: MetaData;
}

export interface AchievementItem {
  id: number;
  documentId: string;
  achievement_content: string;
  achivementimage: AchievementImage[];
  school_categories: SchoolCategory[];
}

export interface AchievementImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface MetaData {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
