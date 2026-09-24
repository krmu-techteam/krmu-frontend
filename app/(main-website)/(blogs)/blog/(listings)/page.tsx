import { getBlogPageInfo } from "@/lib/api/blogs/main-blog";
import CommonBlogLayout from "./comp/CommonBlogLayout";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

// ------------------------------------
// Metadata (never let a failure here break the page)
// ------------------------------------
export async function generateMetadata() {
  try {
    const pageInfo = await getBlogPageInfo();
    const seo = pageInfo?.blog_seo;
    return seo ? strapiSeoToMetadata(seo) : {};
  } catch (error) {
    console.error("Blog metadata error:", error);
    return {};
  }
}

// ------------------------------------
// Page
// ------------------------------------
const Page = async ({ searchParams }: Props) => {
  return (
    <CommonBlogLayout
      searchParams={searchParams}
      mainBlogClass="grid grid-cols-1 xl:grid-cols-2 gap-6"
    />
  );
};

export default Page;
