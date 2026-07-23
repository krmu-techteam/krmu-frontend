import { krmBlogURL } from "@/app/constant";

export const BLOG_QUERIES = {
  // Strapi Endpoints
  blogPageInfo: `/api/blog?fields[0]=Title&populate[blog_seo][populate][shareImage][fields][0]=url`,
  blogCategoryPageInfo: `/api/blog-category?fields[0]=Title&populate[blog_category_seo][populate][shareImage][fields][0]=url`,

  // WordPress Endpoints
  posts: (params: string) => `${krmBlogURL}/wp-json/wp/v2/posts?${params}`,
  categories: (slug?: string) => {
    if (slug) {
      return `${krmBlogURL}/wp-json/wp/v2/categories?slug=${slug}`;
    }
    return `${krmBlogURL}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug,taxonomy`;
  },
  recentPosts: () => `${krmBlogURL}/wp-json/wp/v2/posts?per_page=20&_embed`,
  singleBlog: (slug: string) =>
    `${krmBlogURL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
  media: (id: number) => `${krmBlogURL}/wp-json/wp/v2/media/${id}?_fields=guid`,
  clientMedia: (id: number) => `${krmBlogURL}/wp-json/wp/v2/media/${id}`,
  authorInfo: (slug: string) =>
    `${krmBlogURL}/wp-json/wp/v2/users?slug=${slug}&_fields=id,name,slug,acf.profile_image,acf`,
  postsByAuthor: (authId: number, page: number) =>
    `${krmBlogURL}/wp-json/wp/v2/posts?author=${authId}&per_page=6&page=${page}&_fields=id,title,featured_media,date,slug`,
};
