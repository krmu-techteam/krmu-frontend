import {
    getAdmissionsService,
    IAdmissionsService,
} from "@/features/admission/admissions";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import {
    createBreadcrumbProgSchema,
    createProgFaqSchema,
} from "@/lib/api/common";
import Script from "next/script";
import {
    AdmissionProcessSection,
    AlumniVoicesSection,
    ContactWithUSection,
    FeeOverviewSection,
    FrequentlyAskedQuestionSection,
    HeroSection,
    LocationSection,
    WhyKRMangalamUniversitySection,
} from "@/presentation/admission/admissions/sections";
import { ProgrammesExplorer } from "@/presentation/programmes/sections";
import SectionDivider from "@/components/common/SectionDivider";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("admissions");
    const seo = seoData?.[0];

    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : undefined;

    const title = seo?.title || "Admissions 2026 | K.R. Mangalam University";
    const description =
        seo?.metaDescription ||
        "Apply for Admissions 2026 at K.R. Mangalam University. Explore 100+ industry-aligned programmes, top placements & up to 100% scholarships.";
    const canonical =
        seo?.canonicalUrl || "https://www.krmangalam.edu.in/admissions";

    return {
        title,
        description,
        keywords:
            seo?.keyword ||
            "Admissions 2026, KRMU admissions, apply online, scholarship",
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
            images: shareImageUrl
                ? [
                      {
                          url: shareImageUrl,
                          width: 1200,
                          height: 630,
                          alt: title,
                      },
                  ]
                : [],
            type: "website",
        },

        // ✅ Twitter Card
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: shareImageUrl ? [shareImageUrl] : [],
        },
    };
}

const AddmissionPage = async () => {
    const admissionsService: IAdmissionsService = getAdmissionsService();
    const admission2Data = await admissionsService.getAdmissionPageData();

    if (!admission2Data) {
        return notFound();
    }

    const admTOC = admission2Data?.adm_toc;
    const admAlumni = admission2Data?.adm2_alumni || [];

    type FAQProg = {
        id?: number;
        ques: string;
        ans: string;
        tocpoint?: string;
    };

    const allFaqs: FAQProg[] = (admTOC?.tocfaq || []).flatMap((section) =>
        (section?.faq || []).map((item) => ({
            id: item?.id,
            ques: item?.ques || "",
            ans: item?.ans || "",
            tocpoint: section?.tocpoint || "",
        }))
    );

    const singleProgFAQLD =
        allFaqs.length > 0 ? createProgFaqSchema(allFaqs) : "";

    const breadcrumbItems = [
        { name: "Home", url: "https://www.krmangalam.edu.in/" },
        { name: "Admissions", url: "https://www.krmangalam.edu.in/admissions" },
    ];
    const breadcrumbSchema = createBreadcrumbProgSchema(breadcrumbItems);

    return (
        <>
            {singleProgFAQLD && (
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: singleProgFAQLD }}
                />
            )}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
            />
            <HeroSection />
            <AdmissionProcessSection />
            <WhyKRMangalamUniversitySection />
            <div className="relative pt-8 md:pt-12 xl:pt-20 pb-5 md:pb-12 xl:pb-20">
                <Suspense fallback={null}>
                    <ProgrammesExplorer />
                </Suspense>
                <SectionDivider />
            </div>
            <FeeOverviewSection />
            <AlumniVoicesSection admAlumni={admAlumni} />
            <FrequentlyAskedQuestionSection
                heading={admTOC?.heading || "Frequently Asked Questions"}
                highlight={admTOC?.highlightheading || ""}
                desc={admTOC?.description || ""}
                tocfaqs={admTOC?.tocfaq || []}
                tocimg={admTOC?.tocimg}
                tocbtn={admTOC?.tocbtn as any}
            />
            <LocationSection />
            <ContactWithUSection />
        </>
    );
};

export default AddmissionPage;
