const Page = async () => {
  return <div>TEST BLOG PAGE</div>;
};

export default Page;

// import { getBlogPageInfo } from "@/lib/api/blogs/main-blog";
// import CommonBlogLayout from "./comp/CommonBlogLayout";
// import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";

// type Props = {
//   searchParams: Promise<{
//     page?: string;
//   }>;
// };

// // ------------------------------------
// // Metadata
// // ------------------------------------
// export async function generateMetadata() {
//   const pageInfo = await getBlogPageInfo();

//   const seo = pageInfo?.blog_seo;

//   if (!seo) {
//     return {};
//   }

//   return strapiSeoToMetadata(seo);
// }

// // ------------------------------------
// // Page
// // ------------------------------------
// const Page = async ({ searchParams }: Props) => {
//   return (
//     <CommonBlogLayout
//       searchParams={searchParams}
//       mainBlogClass="grid grid-cols-1 xl:grid-cols-2 gap-6"
//     />
//   );
// };

// export default Page;
