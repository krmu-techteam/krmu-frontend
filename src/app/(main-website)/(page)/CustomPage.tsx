import { getCustomPageData } from "@/lib/constants/page";
import { notFound } from "next/navigation";

type Props = {
    slug: string;
};

import CustomPageClient from "./CustomPageClient";

function sanitizeCustomPageHtml(rawHtml: string): string {
    if (!rawHtml) return "";
    let html = rawHtml;

    // 1. Remove comments containing sandip or other competitor references
    html = html.replace(/<!--[\s\S]*?-->/g, (comment) => {
        if (/sandip/i.test(comment)) {
            return "";
        }
        return comment;
    });

    // 2. In sustain-panel-2, remove the table-responsive block containing competitor event links
    html = html.replace(
        /(<div[^>]*id=["']sustain-panel-2["'][^>]*>[\s\S]*?)<div class="table-responsive">[\s\S]*?<\/table>\s*<\/div>/gi,
        "$1"
    );

    // 3. Remove any table row (<tr>) containing sandip links
    html = html.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, (row) => {
        if (/sandip/i.test(row)) {
            return "";
        }
        return row;
    });

    // 4. Remove any <a> tags containing sandip
    html = html.replace(
        /<a\b[^>]*href=["'][^"']*sandip[^"']*["'][^>]*>[\s\S]*?<\/a>/gi,
        ""
    );

    // 5. Replace any remaining competitor URLs
    html = html.replace(/https?:\/\/[^\s"'>]*sandip[^\s"'>]*/gi, "#");

    // 6. Replace any remaining "Sandip University" text
    html = html.replace(/Sandip\s+University/gi, "K.R. Mangalam University");

    // 7. Remove any orphan "sandip" word
    html = html.replace(/sandip/gi, "");

    return html;
}

const CustomPage = async ({ slug }: Props) => {
    const allCustomPages = await getCustomPageData(slug);

    const currentCustomPage = allCustomPages?.find(
        (item) => item?.slug === slug
    );

    if (!currentCustomPage) return notFound();

    const sanitizedHtml = sanitizeCustomPageHtml(
        currentCustomPage?.maincontent2 || ""
    );

    return (
        <CustomPageClient
            html={sanitizedHtml}
            css={currentCustomPage?.custom_page_css}
            js={currentCustomPage?.custom_page_js}
            slug={slug}
        />
    );
};

export default CustomPage;
