import { getInternationCollabData } from "@/lib/api/international-collab";
import InternationalCollabCards from "./comp/InternationalCollabCards";
 
import { STRAPI_URL } from "@/app/constant";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { HeroSection } from "@/presentation/why-krmu/international-collaboration/sections";;

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("international-collaboration");
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
// export async function generateMetadata(): Promise<Metadata> {
//   const seoData = await internationCollaborationSEO();
//   const seo = seoData?.seo;

//   const shareImageUrl = seo?.shareImage?.url
//     ? `${STRAPI_URL}${seo?.shareImage?.url}`
//     : undefined;

//   // ✅ Fallback if SEO is missing
//   if (!seo) {
//     return {
//       title: "K.R. Mangalam University",
//       description: "",
//       robots: {
//         index: true,
//         follow: true,
//       },
//     };
//   }

//   return {
//     title: seo?.metaTitle || "K.R. Mangalam University",
//     description: seo?.metaDescription || "",
//     keywords: seo?.metaKeyword || "",
//     alternates: {
//       canonical: seo?.canonical || "",
//     },
//     robots: {
//       index: true,
//       follow: true,
//     },

//     // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
//     openGraph: {
//       title: seo?.metaTitle || "K.R. Mangalam University",
//       description: seo?.metaDescription || "",
//       url: seo?.canonical || "",
//       siteName: "K.R. Mangalam University",
//       images: shareImageUrl
//         ? [
//             {
//               url: shareImageUrl,
//               width: 1200,
//               height: 630,
//               alt: seo?.metaTitle || "K.R. Mangalam University",
//             },
//           ]
//         : [],
//       type: "website",
//     },

//     // ✅ Twitter Card
//     twitter: {
//       card: "summary_large_image",
//       title: seo?.metaTitle || "K.R. Mangalam University",
//       description: seo?.metaDescription || "",
//       images: shareImageUrl ? [shareImageUrl] : [],
//     },
//   };
// }
const page = async () => {
  const intCollabData = await getInternationCollabData();

  return (
    <>
      <HeroSection
        title={intCollabData?.title}
        desc={intCollabData?.desc}
        heroBtn={intCollabData?.int_collab_btn}
        heroGrid={intCollabData?.int_collab_hero_grid}
      />
      <InternationalCollabCards
        intCollabCard={intCollabData?.intcollab_card}
        intCollabFullWidthCard={intCollabData?.int_collab_full_width_card}
      />
    </>
  );
};

export default page;
