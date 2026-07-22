import { YoastHeadJson } from "@/lib/constants/yoastMeta";
import { AuthorResponse, AuthorInfo, PostByAuthorResponse, PostByAuthorCard as LegacyPostByAuthorCard } from "@/lib/types/blogs/auth-blogs";
import { MainBlogResponse, MainBlogs, BlogPageSEOResponse, BlogCategoryPageSEOResponse, BlogData, BlogCategoryData } from "@/lib/types/blogs/main-blogs";
import { SingleBlogResponse, BlogPostContent, AllBlogCategoriesResponse, AllBlogCategories as LegacyAllBlogCategories } from "@/lib/types/blogs/single-blog";

// Extend with properties that exist in the WordPress response fields
export interface PostByAuthorCard extends LegacyPostByAuthorCard {
  slug: string;
}

export interface AllBlogCategories extends LegacyAllBlogCategories {
  yoast_head_json?: YoastHeadJson;
}

export interface WPBlog {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>;
  };
}

export type {
  AuthorResponse,
  AuthorInfo,
  PostByAuthorResponse,
  MainBlogResponse,
  MainBlogs,
  BlogPageSEOResponse,
  BlogCategoryPageSEOResponse,
  BlogData,
  BlogCategoryData,
  SingleBlogResponse,
  BlogPostContent,
  AllBlogCategoriesResponse
};
