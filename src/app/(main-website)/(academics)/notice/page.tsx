import { getNoticePageData } from "@/lib/api/notice";
import NoticeHero from "./comp/NoticeHero";
import NoticePDF from "./comp/NoticePDF";
import { Metadata } from "next";

import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("notice");
  const seo = seoData?.[0];

  const title = seo?.title || "University Notices | K.R. Mangalam University";
  const description =
    seo?.metaDescription ||
    "View the latest official notices from K.R. Mangalam University, including academic updates, fee notices, and campus announcements.";
  const canonical = seo?.canonicalUrl || "https://www.krmangalam.edu.in/notice";
  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords:
      seo?.keyword ||
      "Notice, K.R. Mangalam University, Circulars, Announcements",
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "K.R. Mangalam University",
      locale: "en_IN",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImageUrl],
    },
  };
}
// export async function generateMetadata(): Promise<Metadata> {
//   const seoData = await noticeSEO();
//   const seo = seoData?.seo;

//   const shareImageUrl = seo?.shareImage?.url
//     ? `${STRAPI_URL}${seo?.shareImage?.url}`
//     : undefined;

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
  const noticePage = await getNoticePageData();

  return (
    <>
      <NoticeHero
        title={noticePage?.title}
        bgimageUrl={noticePage?.bgimage?.url}
      />
      <NoticePDF noticePDFS={noticePage?.noticepdfs} />
    </>
  );
};

export default page;
