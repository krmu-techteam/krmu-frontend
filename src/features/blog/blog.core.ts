import { createProvider } from "@/lib/core/create-provider";
import { FETCH_STRAPI_URL, krmBlogURL } from "@/app/constant";
import { BLOG_QUERIES } from "./blog.queries";
import { BlogMapper } from "./blog.mapper";
import { cache } from "react";
import {
  AuthorResponse,
  MainBlogs,
  BlogPostContent,
  AllBlogCategories,
  BlogData,
  BlogCategoryData,
  WPBlog,
  PostByAuthorCard,
} from "./blog.types";

// ── 1. Repository ────────────────────────────────────────

class BlogRepository {
  private blogPageInfoPromise: Promise<BlogData | null> | null = null;
  private blogCategoryPageInfoPromise: Promise<BlogCategoryData | null> | null = null;

  async getBlogPageInfo(): Promise<BlogData | null> {
    if (!this.blogPageInfoPromise) {
      this.blogPageInfoPromise = (async () => {
        try {
          const res = await fetch(`${FETCH_STRAPI_URL}${BLOG_QUERIES.blogPageInfo}`, {
            next: { revalidate: 3600 },
          });
          if (!res.ok) throw new Error("Failed to fetch blog page info");
          const json = await res.json();
          return json.data;
        } catch (error) {
          console.error("Blog page info fetch error:", error);
          this.blogPageInfoPromise = null;
          return null;
        }
      })();
    }
    return this.blogPageInfoPromise;
  }

  async getBlogCategoryPageInfo(): Promise<BlogCategoryData | null> {
    if (!this.blogCategoryPageInfoPromise) {
      this.blogCategoryPageInfoPromise = (async () => {
        try {
          const res = await fetch(`${FETCH_STRAPI_URL}${BLOG_QUERIES.blogCategoryPageInfo}`, {
            next: { revalidate: 3600 },
          });
          if (!res.ok) throw new Error("Failed to fetch blog category page info");
          const json = await res.json();
          return json.data;
        } catch (error) {
          console.error("Blog category page info fetch error:", error);
          this.blogCategoryPageInfoPromise = null;
          return null;
        }
      })();
    }
    return this.blogCategoryPageInfoPromise;
  }

  async getAllBlogsByPerPageOrCategorySlug(
    num_of_blogs: number = 6,
    page: number = 1,
    categorySlug?: string
  ): Promise<{ blogs: MainBlogs[]; totalPages: number }> {
    try {
      const params = new URLSearchParams({
        per_page: String(num_of_blogs),
        page: String(page),
        _embed: "1",
      });

      let categoryId: number | null = null;

      if (categorySlug) {
        const catRes = await fetch(BLOG_QUERIES.categories(categorySlug), {
          next: { revalidate: 3600, tags: ["blogs"] },
        });

        if (catRes.ok) {
          const cats = await catRes.json();
          if (cats?.length) categoryId = cats[0].id;
        }

        if (!categoryId) return { blogs: [], totalPages: 0 };
      }

      if (categoryId) params.append("categories", String(categoryId));

      const res = await fetch(BLOG_QUERIES.posts(params.toString()), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });

      if (!res.ok) throw new Error("Failed to fetch blogs");

      const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
      const rawBlogs = await res.json();

      return {
        blogs: BlogMapper.toMainBlogs(rawBlogs),
        totalPages,
      };
    } catch (error) {
      console.error("Blog fetch error:", error);
      return { blogs: [], totalPages: 0 };
    }
  }

  async getRecentPosts(): Promise<MainBlogs[]> {
    try {
      const res = await fetch(BLOG_QUERIES.recentPosts(), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });
      if (!res.ok) throw new Error("Failed to fetch recent posts");
      const raw = await res.json();
      return BlogMapper.toMainBlogs(raw);
    } catch (error) {
      console.error("Recent posts fetch error:", error);
      return [];
    }
  }

  async getSingleBlogDataBySlug(slug: string = ""): Promise<BlogPostContent[]> {
    try {
      const res = await fetch(BLOG_QUERIES.singleBlog(slug), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });
      if (!res.ok) throw new Error("Failed to fetch Single Blog");
      const raw = await res.json();
      return BlogMapper.toSingleBlog(raw);
    } catch (error) {
      console.error("Single blog fetch error:", error);
      return [];
    }
  }

  async getAllBlogCategories(): Promise<AllBlogCategories[]> {
    try {
      const res = await fetch(BLOG_QUERIES.categories(), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });
      if (!res.ok) throw new Error("Failed to fetch Blog Categories");
      const json = await res.json();
      return json;
    } catch (error) {
      console.error("All categories fetch error:", error);
      return [];
    }
  }

  async getBlogImageById(imgId: number): Promise<string | null> {
    if (!imgId) return null;
    try {
      const res = await fetch(BLOG_QUERIES.media(imgId), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });

      if (!res.ok) {
        console.warn("Image not found for ID:", imgId, res.status);
        return null;
      }

      const json = await res.json();
      return json?.guid?.rendered ?? null;
    } catch (error) {
      console.error("Error fetching image:", imgId, error);
      return null;
    }
  }

  async getBlogImageByIdClientComp(id: number): Promise<string | null> {
    try {
      const res = await fetch(BLOG_QUERIES.clientMedia(id));
      if (!res.ok) return null;
      const json = await res.json();
      return json.source_url;
    } catch (error) {
      console.error("Client image fetch error:", error);
      return null;
    }
  }

  async getCategoryBySlug(slug: string): Promise<AllBlogCategories | null> {
    try {
      const res = await fetch(BLOG_QUERIES.categories(slug), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });

      if (!res.ok) return null;

      const data = await res.json();
      return data?.[0] || null;
    } catch (error) {
      console.error("Category fetch error:", error);
      return null;
    }
  }

  async searchBlogs(query: string, page: number = 1): Promise<WPBlog[]> {
    if (!query) return [];
    const url = `${krmBlogURL}/wp-json/wp/v2/posts?search=${encodeURIComponent(
      query
    )}&per_page=6&page=${page}&_embed`;

    try {
      const res = await fetch(url, { next: { revalidate: 3600, tags: ["blogs"] } });
      if (!res.ok) {
        console.error("Failed to fetch search results:", res.statusText);
        return [];
      }
      const raw = await res.json();
      return BlogMapper.toWPBlogs(raw);
    } catch (error) {
      console.error("Error searching blogs:", error);
      return [];
    }
  }

  async getAuthInfoBySlug(authSlug: string = ""): Promise<AuthorResponse> {
    try {
      const res = await fetch(BLOG_QUERIES.authorInfo(authSlug), {
        next: {
          revalidate: 3600,
          tags: ["blogs"],
        },
      });

      if (!res.ok) throw new Error("Failed to fetch Author Info");

      const raw = await res.json();
      return BlogMapper.toAuthorInfo(raw);
    } catch (error) {
      console.error("Author info fetch error:", error);
      return [];
    }
  }

  async getPostsByAuthId(authId: number, page: number = 1): Promise<PostByAuthorCard[]> {
    try {
      const res = await fetch(BLOG_QUERIES.postsByAuthor(authId, page), {
        next: { revalidate: 3600, tags: ["blogs"] },
      });

      if (!res.ok) throw new Error("Failed to fetch posts by author ID");

      const json = await res.json();
      return BlogMapper.toPostByAuthorCards(json);
    } catch (error) {
      console.error("Posts by author fetch error:", error);
      return [];
    }
  }

  async getPostsCountByAuthId(authId: number): Promise<number> {
    try {
      const res = await fetch(
        `${BLOG_QUERIES.postsByAuthor(authId, 1)}&per_page=1`,
        { next: { revalidate: 3600, tags: ["blogs"] } },
      );
      if (!res.ok) return 0;
      const total = res.headers.get("X-WP-Total");
      return total ? parseInt(total, 10) : 0;
    } catch {
      return 0;
    }
  }
}

// ── 2. Service Interface ─────────────────────────────────

export interface IBlogService {
  getBlogPageInfo(): Promise<BlogData | null>;
  getBlogCategoryPageInfo(): Promise<BlogCategoryData | null>;
  getAllBlogsByPerPageOrCategorySlug(
    num_of_blogs?: number,
    page?: number,
    categorySlug?: string
  ): Promise<{ blogs: MainBlogs[]; totalPages: number }>;
  getRecentPosts(): Promise<MainBlogs[]>;
  getSingleBlogDataBySlug(slug: string): Promise<BlogPostContent[]>;
  getAllBlogCategories(): Promise<AllBlogCategories[]>;
  getBlogImageById(imgId: number): Promise<string | null>;
  getBlogImageByIdClientComp(id: number): Promise<string | null>;
  getCategoryBySlug(slug: string): Promise<AllBlogCategories | null>;
  searchBlogs(query: string, page?: number): Promise<WPBlog[]>;
  getAuthInfoBySlug(authSlug: string): Promise<AuthorResponse>;
  getPostsByAuthId(authId: number, page?: number): Promise<PostByAuthorCard[]>;
  getPostsCountByAuthId(authId: number): Promise<number>;
}

// ── 3. Service ───────────────────────────────────────────

class BlogService implements IBlogService {
  constructor(private readonly repository: BlogRepository) {}

  async getBlogPageInfo(): Promise<BlogData | null> {
    return await this.repository.getBlogPageInfo();
  }

  async getBlogCategoryPageInfo(): Promise<BlogCategoryData | null> {
    return await this.repository.getBlogCategoryPageInfo();
  }

  async getAllBlogsByPerPageOrCategorySlug(
    num_of_blogs: number = 6,
    page: number = 1,
    categorySlug?: string
  ): Promise<{ blogs: MainBlogs[]; totalPages: number }> {
    return await this.repository.getAllBlogsByPerPageOrCategorySlug(
      num_of_blogs,
      page,
      categorySlug
    );
  }

  async getRecentPosts(): Promise<MainBlogs[]> {
    return await this.repository.getRecentPosts();
  }

  async getSingleBlogDataBySlug(slug: string): Promise<BlogPostContent[]> {
    return await this.repository.getSingleBlogDataBySlug(slug);
  }

  async getAllBlogCategories(): Promise<AllBlogCategories[]> {
    return await this.repository.getAllBlogCategories();
  }

  getBlogImageById = cache(async (imgId: number): Promise<string | null> => {
    return await this.repository.getBlogImageById(imgId);
  });

  async getBlogImageByIdClientComp(id: number): Promise<string | null> {
    return await this.repository.getBlogImageByIdClientComp(id);
  }

  async getCategoryBySlug(slug: string): Promise<AllBlogCategories | null> {
    return await this.repository.getCategoryBySlug(slug);
  }

  async searchBlogs(query: string, page: number = 1): Promise<WPBlog[]> {
    return await this.repository.searchBlogs(query, page);
  }

  async getAuthInfoBySlug(authSlug: string): Promise<AuthorResponse> {
    return await this.repository.getAuthInfoBySlug(authSlug);
  }

  async getPostsByAuthId(authId: number, page: number = 1): Promise<PostByAuthorCard[]> {
    return await this.repository.getPostsByAuthId(authId, page);
  }

  async getPostsCountByAuthId(authId: number): Promise<number> {
    return await this.repository.getPostsCountByAuthId(authId);
  }
}

// ── 4. Provider (Singleton) ──────────────────────────────

export const getBlogService = createProvider<IBlogService>(
  () => new BlogService(new BlogRepository()),
);
export function generateRealisticViews(dateString: string, identifier: string | number): string {
  if (!dateString || !identifier) return "594";
  
  const strId = String(identifier);
  let seed = 0;
  for (let i = 0; i < strId.length; i++) {
    seed += strId.charCodeAt(i);
  }
  
  const pubDate = new Date(dateString);
  const isValidDate = !isNaN(pubDate.getTime());
  const pDate = isValidDate ? pubDate : new Date();
  
  const isRecent = (Date.now() - pDate.getTime()) < 60 * 24 * 60 * 60 * 1000; // 60 days
  const random = (Math.sin(seed) + 1) / 2;
  
  let val: number;
  if (isRecent) {
    val = Math.floor(random * (600 - 500 + 1)) + 500;
  } else {
    val = Math.floor(random * (2000 - 1000 + 1)) + 1000;
  }
  
  return val.toLocaleString("en-IN");
}
