"use client";

import { useEffect } from "react";
import Script from "next/script";
import { SchoolProgrammeItem } from "./schoolSchemaData";
import {
    CMSMinimalSchoolData,
    generateSchoolSchemas,
} from "./schoolSchemaGenerator";

interface SyncProps {
    slug: string;
    itemListJson: string;
    webPageJson: string;
    breadcrumbJson: string;
}

export function SchoolSchemaSync({
    slug,
    itemListJson,
    webPageJson,
    breadcrumbJson,
}: SyncProps) {
    useEffect(() => {
        // 1. Remove legacy dynamic-id script tags from previous navigations
        const lingering = document.querySelectorAll(
            'script[id*="school-itemlist-schema-"], script[id*="school-webpage-schema-"], script[id*="school-breadcrumb-schema-"]'
        );
        lingering.forEach((el) => el.remove());

        // 2. Synchronize current school schema in DOM so that client-side route changes update
        // in-place without creating duplicate script tags
        syncSchoolScript("school-itemlist-schema", itemListJson);
        syncSchoolScript("school-webpage-schema", webPageJson);
        syncSchoolScript("school-breadcrumb-schema", breadcrumbJson);

        return () => {
            // When navigating away from schools to non-school pages, clean up school scripts.
            // A short delay avoids wiping schemas during React StrictMode / page refresh test unmounts.
            setTimeout(() => {
                if (
                    typeof window !== "undefined" &&
                    !window.location.pathname.includes("school-")
                ) {
                    const schoolScripts = document.querySelectorAll(
                        'script[id^="school-"]'
                    );
                    schoolScripts.forEach((el) => el.remove());
                }
            }, 100);
        };
    }, [slug, itemListJson, webPageJson, breadcrumbJson]);

    return null;
}

function syncSchoolScript(id: string, json: string) {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement("script");
        el.id = id;
        el.setAttribute("type", "application/ld+json");
        document.head.appendChild(el);
    }
    if (el.textContent !== json) {
        el.textContent = json;
    }
}

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
                id="school-itemlist-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: itemListJson }}
            />
            <Script
                id="school-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: webPageJson }}
            />
            <Script
                id="school-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
            />
            <SchoolSchemaSync
                slug={slug}
                itemListJson={itemListJson}
                webPageJson={webPageJson}
                breadcrumbJson={breadcrumbJson}
            />
        </>
    );
}

export default SchoolSchemaScripts;
