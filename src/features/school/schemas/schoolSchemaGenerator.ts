import { School } from "@/lib/types/schools";
import {
    SCHOOL_SCHEMA_ALIASES,
    SCHOOL_SCHEMA_CONFIGS,
    SchoolProgrammeItem,
    SchoolSchemaInfo,
} from "./schoolSchemaData";

export type CMSMinimalSchoolData = Partial<School> | null | undefined;

export function resolveSchoolSchemaConfig(
    rawSlug: string,
    cmsData?: CMSMinimalSchoolData,
    dynamicProgrammes?: SchoolProgrammeItem[]
): SchoolSchemaInfo {
    const slug = decodeURIComponent(rawSlug || "")
        .trim()
        .toLowerCase()
        .replace(/\/$/, "");

    const canonicalSlug =
        SCHOOL_SCHEMA_ALIASES[slug] ||
        cmsData?.urlslug ||
        cmsData?.wordschoolslug ||
        slug;

    const config = SCHOOL_SCHEMA_CONFIGS[canonicalSlug];

    const defaultName = cmsData?.schoolname || formatSlugToTitle(canonicalSlug);
    const defaultDesc =
        cmsData?.subheading ||
        (config
            ? config.description
            : `Explore undergraduate and postgraduate programmes at ${defaultName}, K.R. Mangalam University.`);

    const resolvedProgrammes =
        dynamicProgrammes && dynamicProgrammes.length > 0
            ? dynamicProgrammes
            : config?.programmes && config.programmes.length > 0
              ? config.programmes
              : [
                    {
                        name:
                            cmsData?.programme_offered?.title ||
                            "Programmes Offered",
                        url: `https://www.krmangalam.edu.in/${canonicalSlug}#programmes`,
                    },
                ];

    if (config) {
        return {
            schoolName: cmsData?.schoolname || config.schoolName,
            shortName: config.shortName,
            metaTitle: cmsData?.schoolname
                ? `${cmsData.schoolname} | K.R. Mangalam University`
                : config.metaTitle,
            description: cmsData?.subheading || config.description,
            urlSlug: canonicalSlug,
            programmes: resolvedProgrammes,
        };
    }

    return {
        schoolName: defaultName,
        metaTitle: `${defaultName} | K.R. Mangalam University`,
        description: defaultDesc,
        urlSlug: canonicalSlug,
        programmes: resolvedProgrammes,
    };
}

function formatSlugToTitle(slug: string): string {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function generateSchoolSchemas(
    rawSlug: string,
    cmsData?: CMSMinimalSchoolData,
    dynamicProgrammes?: SchoolProgrammeItem[]
) {
    const schoolInfo = resolveSchoolSchemaConfig(
        rawSlug,
        cmsData,
        dynamicProgrammes
    );
    const fullUrl = `https://www.krmangalam.edu.in/${schoolInfo.urlSlug}`;

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Programmes Offered - ${schoolInfo.schoolName}`,
        description: `List of undergraduate, postgraduate and doctoral programmes offered by ${schoolInfo.schoolName} at K.R. Mangalam University.`,
        url: fullUrl,
        itemListElement: schoolInfo.programmes.map(
            (prog: SchoolProgrammeItem, index: number) => ({
                "@type": "ListItem",
                position: index + 1,
                name: prog.name,
                url: prog.url,
            })
        ),
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name:
            schoolInfo.metaTitle ||
            `${schoolInfo.schoolName} | K.R. Mangalam University`,
        url: fullUrl,
        description: schoolInfo.description,
        about: {
            "@type": "CollegeOrUniversity",
            name: schoolInfo.schoolName,
            url: "https://www.krmangalam.edu.in/",
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.krmangalam.edu.in/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: schoolInfo.schoolName,
                item: fullUrl,
            },
        ],
    };

    return {
        itemListJson: JSON.stringify(itemListSchema, null, 2),
        webPageJson: JSON.stringify(webPageSchema, null, 2),
        breadcrumbJson: JSON.stringify(breadcrumbSchema, null, 2),
        schoolInfo,
    };
}
