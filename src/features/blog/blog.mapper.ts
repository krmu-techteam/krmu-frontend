import {
  MainBlogs,
  BlogPostContent,
  AuthorInfo,
  PostByAuthorCard,
  WPBlog,
} from "./blog.types";

export class BlogMapper {
  static toMainBlogs(raw: MainBlogs[]): MainBlogs[] {
    return raw;
  }

  static toSingleBlog(raw: BlogPostContent[]): BlogPostContent[] {
    return raw;
  }

  static toAuthorInfo(raw: AuthorInfo[]): AuthorInfo[] {
    return raw;
  }

  static toPostByAuthorCards(raw: PostByAuthorCard[]): PostByAuthorCard[] {
    return raw;
  }

  static toWPBlogs(raw: WPBlog[]): WPBlog[] {
    return raw;
  }
}
