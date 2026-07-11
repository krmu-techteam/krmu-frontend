import { folderRouteSEO } from "@/lib/api/siteseo";
import GrievanceTabsUI from "./GrievanceTabsUI";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("grievance-redressal-mechanism");
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

const page = () => {
  return (
    <>
      <section className="pt-[140px] lg:pt-[10%] lg:pb-[5%] bg-[url(/iqac/bg.png)] bg-cover bg-no-repeat">
        <div className="max-w-[1664px] mx-auto w-full">
          <h1 className="text-white font-semibold text-4xl text-center">
            Grievance Redressal Mechanism
          </h1>
        </div>
      </section>
      <section className="bg-[#f0f0f0] py-[2%]">
        <div className="max-w-[1664px] mx-auto w-full">
          <GrievanceTabsUI />
        </div>
      </section>
    </>
  );
};

export default page;
