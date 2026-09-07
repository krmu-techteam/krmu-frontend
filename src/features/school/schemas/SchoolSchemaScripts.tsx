"use client";

import { useEffect } from "react";
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

    // Clean up lingering next/script tags and remove previous school schemas on client-side route changes
    useEffect(() => {
        // Remove any legacy next/script tags if lingering in DOM
        const lingeringNextScripts = document.querySelectorAll(
            'script[id*="school-itemlist-schema-"], script[id*="school-webpage-schema-"], script[id*="school-breadcrumb-schema-"]'
        );
        lingeringNextScripts.forEach((el) => el.remove());

        return () => {
            // When leaving this school page or switching slugs, remove the schema tags
            const oldScripts = document.querySelectorAll(
                "script[data-school-schema]"
            );
            oldScripts.forEach((el) => el.remove());
        };
    }, [slug]);

    return (
        <>
            <script
                id="school-itemlist-schema"
                data-school-schema="itemlist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: itemListJson }}
            />
            <script
                id="school-webpage-schema"
                data-school-schema="webpage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: webPageJson }}
            />
            <script
                id="school-breadcrumb-schema"
                data-school-schema="breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
            />
        </>
    );
}

export default SchoolSchemaScripts;
