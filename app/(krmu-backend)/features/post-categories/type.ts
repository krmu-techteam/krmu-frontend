export interface PostCategory {
  id: number;

  name: string;

  slug: string;

  description: string | null;

  category_url: string | null;

  taxonomy: string;

  parent_id: number;

  post_count: number;

  seo_title: string | null;

  seo_description: string | null;

  seo_robots_index: string | null;

  seo_robots_follow: string | null;

  created_at: string;

  updated_at: string;
}

export interface PostCategoryResponse {
  success: boolean;

  message: string;

  data: PostCategory;
}
