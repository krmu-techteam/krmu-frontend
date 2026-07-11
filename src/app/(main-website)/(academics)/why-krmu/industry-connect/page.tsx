import { getIndustryConnectPage } from "@/lib/api/industry-connect";
import IndustryHero from "./comp/IndustryHero";

import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";
import IndustryConnectAccordion from "./comp/IndustryConnectAccordion";
import IndusAcadCollab from "./comp2/IndusAcadCollab";
import { folderRouteSEO } from "@/lib/api/siteseo";
import IndustryPartenerships from "./comp/IndustryPartenerships";

// export async function generateMetadata(): Promise<Metadata> {
//   const seoData = await industryConnectSEO();
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

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("industryconnect");
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
  const getIndustryConnectPageData = await getIndustryConnectPage();

  return (
    <>
      <main className="indus_connect_content">
        {getIndustryConnectPageData && (
          <IndustryHero
            title={getIndustryConnectPageData?.title}
            desc={getIndustryConnectPageData?.description}
            bgImgURL={getIndustryConnectPageData?.bgimage?.url}
          />
        )}
        <IndustryPartenerships
          title={getIndustryConnectPageData?.partnerships_title}
          logos={getIndustryConnectPageData?.partnership_logos}
        />

        <div className="py-10">
          <IndusAcadCollab /> 
        </div>
        <div className="py-10">
          <IndustryConnectAccordion />
        </div>
        {/* 
        <JapeneseCuisines cuisine={getIndustryConnectPageData?.cuisines} />
        <ArtMuralEvent mural={getIndustryConnectPageData?.mural_event} />
        <NetworkingOpportunities
          netopp={getIndustryConnectPageData?.networking_opportunities}
        />
        <ShapingCareer
          shapcareer={getIndustryConnectPageData?.shaping_career}
        />

        <IdeaForge forgeData={getIndustryConnectPageData?.idea_forge} />
        <ExpertTalk expertTalk={getIndustryConnectPageData?.expert_talk_role} />
        <DeputyCommissioner
          deput={getIndustryConnectPageData?.deputy_commissioner}
        /> */}
      </main>
    </>
  );
};

export default page;
