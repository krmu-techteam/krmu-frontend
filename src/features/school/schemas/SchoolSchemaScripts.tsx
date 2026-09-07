import Script from "next/script";
import { SchoolProgrammeItem } from "./schoolSchemaData";
import {
    CMSMinimalSchoolData,
    generateSchoolSchemas,
} from "./schoolSchemaGenerator";

interface Props {
    slug: string;
    school?: CMSMinimalSchoolData | null;
    dynamicProgrammes?: SchoolProgrammeItem[];
}

export function SchoolSchemaScripts({
    slug,
    school,
    dynamicProgrammes,
}: Props) {
    const { itemListJson, webPageJson, breadcrumbJson } = generateSchoolSchemas(
        slug,
        school,
        dynamicProgrammes
    );

    return (
        <>
            <Script
                id={`school-itemlist-schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: itemListJson }}
            />
            <Script
                id={`school-webpage-schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: webPageJson }}
            />
            <Script
                id={`school-breadcrumb-schema-${slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
            />
        </>
    );
}

export default SchoolSchemaScripts;
