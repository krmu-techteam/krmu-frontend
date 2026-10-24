import { getExaminationPageData } from "@/lib/api/examination";
import ExaminationABCDigilocker from "./comp/ExaminationABCDigilocker";
import ExaminationDownload from "./comp/ExaminationDownload";
import ExaminationFAQ from "./comp/ExaminationFAQ";
import ExaminationHero from "./comp/ExaminationHero";
import ExaminationApplyOnline from "./comp/ExaminationApplyOnline";

import { Metadata } from "next";
import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("examination");
    const seo = seoData?.[0];

    const title = seo?.title || "Examination - K.R. Mangalam University";
    const description =
        seo?.metaDescription ||
        "Access KRMU's examination resources: manuals, regulations, datesheets, and results. Stay updated with the latest exam notifications.";
    const canonical =
        seo?.canonicalUrl || "https://www.krmangalam.edu.in/examination";
    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        keywords:
            seo?.keyword ||
            "Examination, K.R. Mangalam University, Exam Schedule, Results, Date Sheet",
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

const page = async () => {
    const examinationData = await getExaminationPageData();

    return (
        <>
            {examinationData?.examination_hero && (
                <ExaminationHero
                    title={examinationData?.examination_hero?.title}
                    bgImgUrl={examinationData?.examination_hero?.bgimg?.url}
                />
            )}
            {examinationData?.imp_download && (
                <ExaminationDownload
                    heading={examinationData?.imp_download?.heading}
                    downloadCards={
                        examinationData?.imp_download?.imp_download_card
                    }
                />
            )}
            {examinationData?.abc_nad_digilocker && (
                <ExaminationABCDigilocker
                    heading={examinationData?.abc_nad_digilocker?.heading}
                    url={examinationData?.abc_nad_digilocker?.url}
                    btns={examinationData?.abc_nad_digilocker?.abc_nad_btns}
                />
            )}
            {examinationData?.apply_online && (
                <ExaminationApplyOnline
                    applyContent={
                        examinationData?.apply_online?.apply_online_content
                    }
                />
            )}
            {examinationData?.examination_faq && (
                <ExaminationFAQ
                    heading={examinationData?.examination_faq?.heading}
                    faqs={examinationData?.examination_faq?.faq_accordion}
                />
            )}
        </>
    );
};

export default page;
