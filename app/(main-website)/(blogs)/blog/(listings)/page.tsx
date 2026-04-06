import { getBlogPageInfo } from "@/lib/api/blogs/main-blog";
// import CommonBlogHeroSection from "./comp/CommonBlogHeroSection";
import CommonBlogLayout from "./comp/CommonBlogLayout";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";
// import CommonBlogHeroSection from "./comp/CommonBlogHeroSection";

type Props = {
  searchParams: Promise<{ page?: string }>;
};
// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata() {
  const pageInfo = await getBlogPageInfo();
  const seo = pageInfo.blog_seo;

  if (!seo) return {};

  return strapiSeoToMetadata(seo);
}

const Page = async ({ searchParams }: Props) => {
  return (
    <>
      {/* <CommonBlogHeroSection /> */}
      <CommonBlogLayout searchParams={searchParams} mainBlogClass={"grid grid-cols-1 xl:grid-cols-2 gap-6"} />
    </>
  );
};

export default Page;
