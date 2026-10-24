import { Metadata } from "next";
import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { QuestionPaperOddSemClient } from "@/presentation/static-pages/question-paper-odd-sem-2024-25";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("question-paper-odd-sem-2024-25");
    const seo = seoData?.[0];

    const title =
        seo?.title ||
        "Odd Sem Question Papers 2024-25 | K.R. Mangalam University";
    const description =
        seo?.metaDescription ||
        "Download K.R. Mangalam University's odd semester question papers for 2024-25 across all schools to help students prepare effectively for upcoming examinations.";
    const canonical =
        seo?.canonicalUrl ||
        "https://www.krmangalam.edu.in/question-paper-odd-sem-2024-25";
    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        keywords:
            seo?.keyword ||
            "Question Paper Odd Sem 2024-25, KRMU question papers, past papers, examination, university exam question papers",
        alternates: {
            canonical,
        },
        robots: {
            index: true,
            follow: true,
        },

        // ✅ Open Graph (WhatsApp, LinkedIn, Facebook)
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

export default function QuestionPaperOddSemPage() {
    return <QuestionPaperOddSemClient />;
}
