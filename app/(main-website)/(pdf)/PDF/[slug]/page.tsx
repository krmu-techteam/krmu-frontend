import { folderRouteSEO } from "@/lib/api/siteseo";
import { getPDFPageData } from "@/lib/constants/pdf-page";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ no await
  const pdfSlug = slug === "conferences" ? "pdf-conferences" : slug;
  const customSEO = await folderRouteSEO(pdfSlug);
  // console.log('slug', slug);
  const seo = customSEO[0];
  return {
    title: seo?.title || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.keyword || "",
    alternates: {
      canonical: seo?.canonicalUrl || "",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const pdfData = await getPDFPageData(slug);
  const currentPdfPage = pdfData?.find((pdf) => pdf?.slug === slug);

  if (!currentPdfPage) return notFound();
  const pdfCards = currentPdfPage?.pdf_content_card;

  return (
    <section className="pt-32 pb-20 bg-[#d7e2fe] bg-cover bg-center bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-16">
          {pdfCards &&
            pdfCards?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="p-5 bg-[url(/phd-regulation/rectangle.webp)] bg-cover bg-no-repeat rounded-[40px] text-white flex flex-col items-center justify-center"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.content,
                    }}
                    className="mb-5 text-center"
                  />
                  <div>
                    {item?.pdf_btn?.btn_link && (
                      <Link
                        href={item?.pdf_btn?.btn_link || "#"}
                        className="bg-[#cb000d] text-white py-[9px] px-5 text-xs leading-3.5 inline-block rounded-[4px] font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item?.pdf_btn?.btn_text}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default page;
