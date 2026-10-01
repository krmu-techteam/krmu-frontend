import { getCustomPageData } from "@/lib/constants/page";
import { notFound } from "next/navigation";

type Props = {
    slug: string;
};

import CustomPageClient from "./CustomPageClient";

const CustomPage = async ({ slug }: Props) => {
    const allCustomPages = await getCustomPageData(slug);

    const currentCustomPage = allCustomPages?.find(
        (item) => item?.slug === slug
    );

    if (!currentCustomPage) return notFound();

    return (
        <CustomPageClient
            html={currentCustomPage?.maincontent2 || ""}
            css={currentCustomPage?.custom_page_css}
            js={currentCustomPage?.custom_page_js}
            slug={slug}
        />
    );
};

export default CustomPage;
