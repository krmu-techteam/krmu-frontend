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
            <script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: websiteSchema }}
            />
            <script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: organizationSchema }}
            />
            <script
                id="college-university-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: collegeUniversitySchema }}
            />
            {videoSchema && (
                <script
                    id="video-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: videoSchema }}
                />
            )}
        </>
    );
}

export default HomeSchemaScripts;
