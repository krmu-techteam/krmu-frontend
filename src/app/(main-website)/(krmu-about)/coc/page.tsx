import { getCoC } from "@/lib/api/coc";

import Image from "next/image";
import Link from "next/link";
import { STRAPI_URL } from "@/app/constant";


import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";






export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("coc");
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

const page = async () => {
  const cocData = await getCoC();

  const breadcrumb = cocData.breadcrumb;
  const imageUrl = breadcrumb?.backgroundimage?.url;

  const codeofconductlists = cocData.cocitems;

  return (
    <>
      {breadcrumb && (
        <section
          className="pt-32 md:pt-[187px] pb-[94px] px-2.5"
          style={{
            backgroundImage: imageUrl
              ? `url(${STRAPI_URL}${imageUrl})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              {breadcrumb.breadcrumbtext}
            </h1>
          </div>
        </section>
      )}
      <section className="p-5 md:p-10">
        <div className="max-w-[1600px] mx-auto w-full">
          {codeofconductlists && (
            <ul className="lg:pl-10 my-4">
              {codeofconductlists.map((item) => {
                return (
                  <li key={item.id} className="mb-2.5 hover:text-[#0060aa]">
                    <Link
                      href={item.listlink}
                      className="text-xl flex tracking-[-1px]"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Image
                        src={`${STRAPI_URL}${item.listicon.url}`}
                        alt={item.listicon.alternativeText || ""}
                        width={21}
                        height={22}
                        className="mr-4 object-contain"
                      />
                      {item.listtext}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
