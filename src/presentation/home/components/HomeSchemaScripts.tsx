import Script from "next/script";
import { homeSchemaService } from "@/features/home";

export function HomeSchemaScripts() {
    const {
        websiteSchema,
        organizationSchema,
        collegeUniversitySchema,
        videoSchema,
    } = homeSchemaService.getHomePageSchemas();

    return (
        <>
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: websiteSchema }}
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: organizationSchema }}
            />
            <Script
                id="collage-university-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: collegeUniversitySchema }}
            />
            {videoSchema && (
                <Script
                    id="video-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: videoSchema }}
                />
            )}
        </>
    );
}

export default HomeSchemaScripts;
