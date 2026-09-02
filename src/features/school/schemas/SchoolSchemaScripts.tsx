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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: itemListJson }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: webPageJson }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
            />
        </>
    );
}

export default SchoolSchemaScripts;
