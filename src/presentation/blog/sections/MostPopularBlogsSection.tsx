import { getBlogService } from "@/features/blog";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import CommonBlogCard from "../components/CommonBlogCard";
import SingleBlogCarouselSlider from "../single/SingleBlogCarouselSlider";

const MostPopularBlogsSection = async () => {
    let blogs: MainBlogs[] = [];

    try {
        const rawPosts = await getBlogService().getRecentPosts();
        if (rawPosts && rawPosts.length > 0) {
            blogs = (rawPosts as MainBlogs[]).slice(0, 12);
        }
    } catch (error) {
        console.error("Error fetching popular blogs:", error);
    }

    if (!blogs.length) return null;

    return (
        <section className="w-full">
            <SingleBlogCarouselSlider title="Most Popular blogs">
                {blogs.map((blog) => (
                    <CommonBlogCard
                        key={blog.id}
                        title={blog.title.rendered}
                        excerpt={blog.excerpt.rendered}
                        slug={blog.slug}
                        imgId={blog.featured_media}
                        imageUrl={
                            blog._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url
                        }
                        date={blog.date}
                        categoryName={
                            blog?._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                            "KRMU Blog"
                        }
                        authorName={blog?._embedded?.author?.[0]?.name}
                        authorSlug={blog?._embedded?.author?.[0]?.slug}
                        authorAvatarUrl={
                            blog?._embedded?.author?.[0]?.avatar_urls?.["48"] ||
                            blog?._embedded?.author?.[0]?.avatar_urls?.["24"]
                        }
                        authorImgId={
                            blog?._embedded?.author?.[0]?.acf?.profile_image
                        }
                    />
                ))}
            </SingleBlogCarouselSlider>
        </section>
    );
};

export default MostPopularBlogsSection;
