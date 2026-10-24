import { getProgrammePageData } from "@/lib/api/programme";
import ProgrammesConnectWithUs from "./comp/ProgrammesConnectWithUs";
import ProgrammesOurLocation from "./comp/ProgrammesOurLocation";
import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { createBreadcrumbProgSchema } from "@/lib/api/common";
import Script from "next/script";
import { Suspense } from "react";
import {
    AlumniSection,
    HeroSection,
    ProgrammesExplorer,
} from "@/presentation/programmes/sections";
import {
    getAllSchoolsInfo,
    getAllDegreeInfo,
    getAllProgrammesServer,
    getAllPhdProgrammesServer,
} from "@/app/(main-website)/(programmes)/programmesApi/api";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("programmes");
    const seo = seoData?.[0];

    const title = seo?.title || "Programmes - K.R. Mangalam University";
    const description =
        seo?.metaDescription ||
        "Explore UG, PG, Ph.D. & diploma programmes at K.R. Mangalam University with top faculty, modern facilities & global exposure.";
    const canonical =
        seo?.canonicalUrl || "https://www.krmangalam.edu.in/programmes";
    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        keywords:
            seo?.keyword ||
            "Programmes, Courses, Undergraduate, Postgraduate, PhD, K.R. Mangalam University",
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

type PageProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const page = async ({ searchParams }: PageProps) => {
    const resolvedParams = await searchParams;
    const initialSchoolSlug =
        typeof resolvedParams?.school === "string"
            ? resolvedParams.school
            : undefined;
    const initialDegreeSlug =
        typeof resolvedParams?.degree === "string"
            ? resolvedParams.degree
            : undefined;

    const [
        ProgrammeData,
        initialSchools,
        initialDegrees,
        allSchoolProgrammes,
        allPhdProgrammes,
    ] = await Promise.all([
        getProgrammePageData(),
        getAllSchoolsInfo(),
        getAllDegreeInfo(),
        getAllProgrammesServer(),
        getAllPhdProgrammesServer(),
    ]);

    const seenSlugs = new Set<string>();
    const seenTitles = new Set<string>();
    const initialProgrammes: any[] = [];
    for (const prog of [
        ...(allPhdProgrammes || []),
        ...(allSchoolProgrammes || []),
    ]) {
        const slug = (
            ("programmeslug" in prog
                ? (prog as any).programmeslug
                : (prog as any).phdslug) || ""
        )
            .toLowerCase()
            .trim();
        const rawTitle =
            ("title" in prog ? (prog as any).title : (prog as any).heading) ||
            "";
        const normTitle = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, "");

        if (
            slug === "phd-education" &&
            "programmeslug" in prog &&
            (prog as any).criteria?.programme_fee_per_year === "1,20,000"
        ) {
            continue;
        }
        if (slug && seenSlugs.has(slug)) continue;
        if (normTitle && seenTitles.has(normTitle)) continue;

        if (slug) seenSlugs.add(slug);
        if (normTitle) seenTitles.add(normTitle);
        initialProgrammes.push(prog);
    }

    const programmeAlumnis = ProgrammeData?.alumni;
    const breadcrumbItems = [
        { name: "Home", url: "https://www.krmangalam.edu.in/" },
        { name: "Programs", url: "https://www.krmangalam.edu.in/programmes" },
    ];

    const breadcrumbSchema = createBreadcrumbProgSchema(breadcrumbItems);

    return (
        <>
            <Script
                id="programmes-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
            />
            {/* <ProgrammesHero /> */}
            <HeroSection />
            <Suspense fallback={null}>
                <ProgrammesExplorer
                    initialProgrammes={initialProgrammes}
                    initialSchools={initialSchools}
                    initialDegrees={initialDegrees}
                    initialSchoolSlug={initialSchoolSlug}
                    initialDegreeSlug={initialDegreeSlug}
                />
            </Suspense>
            <AlumniSection alumniData={programmeAlumnis} />
            <ProgrammesOurLocation />
            <ProgrammesConnectWithUs />
        </>
    );
};

export default page;
