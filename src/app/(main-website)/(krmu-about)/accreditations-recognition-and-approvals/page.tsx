import { STRAPI_URL } from "@/app/constant";
import { getAccrediationRecognitionApprovalData } from "@/lib/api/accrediationrecogapproval";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO(
    "accreditations-recognition-and-approvals",
  );
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
  const acraData = await getAccrediationRecognitionApprovalData();

  const acrerecogapp = acraData?.accrediationrecogapprovals;

  return (
    <>
      <section className="pt-40 pb-10 px-4 membership-ranking-bg">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="text-white mb-10 px-4 lg:px-0 text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl mb-5 lg:text-[64px] font-bold">
              {acraData?.title}
            </h3>
            <p>{acraData?.description}</p>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
            {acrerecogapp &&
              acrerecogapp.map((member) => {
                return (
                  <div
                    key={member?.id}
                    className="bg-white text-center h-[431px] flex flex-col items-center justify-center  rounded-4xl membership-ranking-card p-5"
                  >
                    {member?.cardurl ? (
                      <Link href={member.cardurl} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={`${STRAPI_URL}${member.cardimg.url}`}
                          width={274}
                          height={274}
                          alt={member.cardtitle || "acu"}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={`${STRAPI_URL}${member.cardimg.url}`}
                        width={274}
                        height={274}
                        alt={member.cardtitle || "acu"}
                      />
                    )}

                    {member?.cardurl ? (
                      <Link
                        href={member.cardurl}
                        target="_blank" rel="noopener noreferrer"
                        className="font-semibold text-[22px] mt-5 max-w-[300px] w-full hover:text-[#0060aa]"
                      >
                        {member.cardtitle}
                      </Link>
                    ) : (
                      <p className="font-semibold text-[22px] mt-5 max-w-[300px] w-full">
                        {member.cardtitle}
                      </p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
