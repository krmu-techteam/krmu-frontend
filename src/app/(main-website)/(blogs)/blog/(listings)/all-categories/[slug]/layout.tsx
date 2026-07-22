import { getBlogService } from "@/features/blog";
import { ReactNode } from "react";

type Props = {
  params: Promise<{ slug: string }>;
  children: ReactNode;
};

export default async function getCategoryLayout({ params, children }: Props) {
  const { slug } = await params;

  const catData = await getBlogService().getCategoryBySlug(slug);

  const catName = catData?.name;

  return (
    <>
      {/* <h3
        className="text-3xl underline font-semibold mb-5"
        dangerouslySetInnerHTML={{
          __html: catName,
        }}
      /> */}
      {children}
    </>
  );
}
