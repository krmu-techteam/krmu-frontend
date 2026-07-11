
// app/about/page.tsx
import { Raleway } from "next/font/google";
import AdvisoryBoardCard from "@/app/(main-website)/components/Cards/AdvisoryBoardCard";
import { getAdvisoryBoard } from "@/lib/api/common";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";



import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";






export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("advisory-board");
  const seo = seoData[0];

  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
    : undefined;

  // ✅ Fallback if SEO is missing
  if (!seo) {
    return {
      title: "K.R. Mangalam University",
      description: "",
      robots: {
        index: true,
        follow: true,
      },
    };
  }

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

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      url: seo?.canonicalUrl || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
          {
            url: shareImageUrl,
            width: 1200,
            height: 630,
            alt: seo?.title || "K.R. Mangalam University",
          },
        ]
        : [],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}

// Load Raleway and define fallback fonts
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // or any you need
  display: "swap",
});

const page = async () => {
  const advisoryData = await getAdvisoryBoard();

  const advisoryMembers = advisoryData?.advisoryboard || [];

  return (
    <>
      <section className="bg-[url(/advisory-board.webp)] bg-cover bg-center px-4 lg:px-[30px] pt-[120px] xl:pt-[7%] ">
        <div className="max-w-[1600px] mx-auto w-full text-center py-[6%] lg:px-[20%] text-white">
          <div
            className={`${raleway.className} mb-5 leading-8`}
            style={{ fontFamily: "Raleway, Arial, Helvetica, sans-serif" }}
          >
            <BlocksRenderer content={advisoryData?.description || []} />
          </div>
        </div>
      </section>
      <section className="pt-[6%]">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-10 lg:gap-5 pb-[7%] xl:pb-0">
            <AdvisoryBoardCard advisoryMembers={advisoryMembers} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-10">
            <div className="hidden xl:block lg:my-32 px-[7.68%] w-full border border-t-[#d9dada]"></div>
            <div className="hidden xl:block lg:my-32 px-[7.68%] w-full border border-t-[#d9dada]"></div>
            <div className="hidden xl:block lg:my-32 px-[7.68%] w-full border border-t-[#d9dada]"></div>
            <div className="hidden xl:block lg:my-32 px-[7.68%] w-full border border-t-[#d9dada]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
