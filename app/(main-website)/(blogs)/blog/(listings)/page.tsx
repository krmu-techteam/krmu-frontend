// import { getBlogPageInfo } from "@/lib/api/blogs/main-blog";
// import CommonBlogLayout from "./comp/CommonBlogLayout";
// import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";

// type Props = {
//   searchParams: Promise<{ page?: string }>;
// };
// ---------------------------
// ✅ Metadata
// ---------------------------
// export async function generateMetadata() {
//   const pageInfo = await getBlogPageInfo();
//   const seo = pageInfo.blog_seo;

//   if (!seo) return {};

//   return strapiSeoToMetadata(seo);
// }

// const Page = async ({ searchParams }: Props) => {
const Page = () => {
  return (
    <>
      {/* <CommonBlogLayout searchParams={searchParams} mainBlogClass={"grid grid-cols-1 xl:grid-cols-2 gap-6"} /> */}
      <p>Blog page</p>
    </>
  );
};

export default Page;
