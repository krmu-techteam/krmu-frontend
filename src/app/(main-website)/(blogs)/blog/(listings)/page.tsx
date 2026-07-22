import { getBlogService } from "@/features/blog";
import { CommonBlogLayout } from "@/presentation/blog";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata() {
  const pageInfo = await getBlogService().getBlogPageInfo();
  const seo = pageInfo?.blog_seo;

  if (!seo) return {};

  return strapiSeoToMetadata(seo);
}

const Page = async ({ searchParams }: Props) => {
  return (
    <>
      <CommonBlogLayout
        searchParams={searchParams}
        mainBlogClass={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}
      />
    </>
  );
};

export default Page;
