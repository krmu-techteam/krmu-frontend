import {
    commonCollegeUniversitySchema,
    createOrganizationSchema,
    createVideoSchema,
    createWebsiteSchema,
} from "@/lib/api/common";

export interface HomePageSchema {
    websiteSchema: string;
    organizationSchema: string;
    educationalOrganizationSchema: string;
    collegeUniversitySchema: string;
    collegeOrUniversitySchema: string;
    videoSchema: string;
}

export class HomeSchemaService {
    getHomePageSchemas(): HomePageSchema {
        const websiteSchema = createWebsiteSchema({
            name: "K.R. Mangalam University",
            alternateName: "KRMU",
            url: "https://www.krmangalam.edu.in",
            searchPath: "https://www.krmangalam.edu.in/search?q=",
        });

        const organizationSchema = createOrganizationSchema({
            name: "K.R. Mangalam University",
            alternateName: "KRMU",
            url: "https://www.krmangalam.edu.in/",
            logo: "https://www.krmangalam.edu.in/KRMU-Logo-NAAC.webp",
            description:
                "K.R. Mangalam University is a private university located in Gurugram, Haryana, India. Established in 2013, the university offers undergraduate, postgraduate, doctoral and diploma programmes across multiple disciplines.",
            telephone: "+91-8800697010",
            email: "welcome@krmangalam.edu.in",
            foundingDate: "2013",
            address: {
                streetAddress: "Sohna Road",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122103",
                addressCountry: "IN",
            },
            sameAs: [
                "https://www.linkedin.com/school/k-r-mangalam-university/",
                "https://www.facebook.com/krmangalamuniversity/",
                "https://www.instagram.com/krmangalamuniversity/",
                "https://www.youtube.com/@krmangalamuniversity",
                "https://en.wikipedia.org/wiki/K.R._Mangalam_University",
            ],
        });

        const collegeUniversitySchema = JSON.stringify(
            commonCollegeUniversitySchema({
                name: "K.R. Mangalam University",
                alternateName: "KRMU",
                url: "https://www.krmangalam.edu.in",
                logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
                award: "NAAC 'A' Grade",
                numberOfEmployees: {
                    name: "Faculty",
                    value: 700,
                },
                amenityFeature: [
                    {
                        name: "Campus Area",
                        value: "35+ acres",
                    },
                    {
                        name: "Total Students",
                        value: "12000+",
                    },
                    {
                        name: "Recruiting Companies",
                        value: "800+",
                    },
                    {
                        name: "Highest Package",
                        value: "56.6 LPA",
                    },
                ],
                sameAs: [
                    "https://www.facebook.com/krmuniv",
                    "https://www.instagram.com/krmuniv",
                    "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
                    "https://in.linkedin.com/school/krmuniv",
                ],
            })
        );

        const videoSchema = createVideoSchema({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "K.R. Mangalam University | Top Private University in Gurugram",
            description:
                "Explore K.R. Mangalam University, a NAAC A accredited university in Gurugram offering 100+ programmes with industry-focused education, career opportunities, and placement support.",
            thumbnailUrl: ["https://www.krmangalam.edu.in/images/thumb.png"],
            uploadDate: "2024-01-15T08:00:00+05:30",
            duration: "PT42S",
            contentUrl:
                "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/krm_bg_hero_e316d4159a.mp4",
            embedUrl: "https://www.krmangalam.edu.in/",
            // publisher: {
            //     "@type": "Organization",
            //     name: "K.R. Mangalam University",
            //     logo: {
            //         "@type": "ImageObject",
            //         url: "https://www.krmangalam.edu.in/images/logo.png",
            //     },
            // },
        });

        return {
            websiteSchema,
            organizationSchema,
            educationalOrganizationSchema: organizationSchema,
            collegeUniversitySchema,
            collegeOrUniversitySchema: collegeUniversitySchema,
            videoSchema,
        };
    }
}

export const homeSchemaService = new HomeSchemaService();
