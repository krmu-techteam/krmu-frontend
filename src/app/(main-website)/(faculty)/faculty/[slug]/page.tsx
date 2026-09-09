import * as cheerio from "cheerio";
import { getFacultyBySlug, singleFaculty } from "@/lib/api/faculty";
import SingleFacultyHero from "../comp/SingleFacultyHero";
import FacultyAccordion from "../comp/FacultyAccordion";
import { getWordImageById } from "@/lib/api/common";
import { Metadata } from "next";
import { origUrl } from "@/app/constant";

type Props = {
    params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const facultyResData = await getFacultyBySlug(slug);
        const metadata = facultyResData?.[0]?.yoast_head_json;
        return {
            title: metadata?.title || "K.R. Mangalam University",
            description: metadata?.description || "",
            alternates: {
                canonical: `${origUrl}/faculty/${slug}` || "",
            },
            robots: {
                index: metadata?.robots?.index.replace("no", "") === "index",
                follow: metadata?.robots?.follow.replace("no", "") === "follow",
            },
        };
    } catch (error) {
        console.error("SEO Error:", error);
        return {
            title: "K.R. Mangalam University",
            description: "",
        };
    }
}
const page = async ({ params }: Props) => {
    const { slug } = await params;

    const facultyResData = await getFacultyBySlug(slug);
    const currentFaculty = facultyResData?.find(
        (fac: singleFaculty) => fac?.slug === slug
    );

    const facultyContent = currentFaculty?.content.rendered || "";
    const facultyImgId = currentFaculty?.featured_media;
    const facultyName = currentFaculty?.title?.rendered || "";
    const facultyDesignation = currentFaculty?.acf?.staff_designation || "";

    let facImgUrl = "";

    if (facultyImgId !== undefined && facultyImgId !== null) {
        facImgUrl = await getWordImageById(facultyImgId);
    }
    // Load HTML
    const $ = cheerio.load(facultyContent);

    // Extract interest title and items
    const interestTitle =
        $(".interest-title").first().text().trim() || "Interest Area(s)";
    const interestItems: string[] = [];
    $(".interest-lists li").each((_, li) => {
        const text = $(li).text().trim();
        if (text) interestItems.push(text);
    });

    // Extract tabs and their contents
    const tabList: { title: string; content: string }[] = [];
    const seenPanes = new Set<string>();

    $(".nav-tabs li a").each((_, el) => {
        const href = $(el).attr("href") || "";
        const paneId = href.replace("#", "").trim();
        const title =
            $(el).find(".fusion-tab-heading").text().trim() ||
            $(el).text().trim();

        if (paneId && !seenPanes.has(paneId)) {
            seenPanes.add(paneId);
            const content = $("#" + paneId).html() || "";
            if (title) {
                tabList.push({ title, content });
            }
        }
    });

    // Extract social links <ul>
    const socialItems: {
        type: "email" | "linkedin" | "phone" | "link";
        value: string;
        text: string;
    }[] = [];

    $(".fusion-checklist li").each((_, li) => {
        const link = $(li).find("a").attr("href") || "";
        const text = $(li).find("a").text().trim();

        if (link.startsWith("mailto:")) {
            socialItems.push({
                type: "email",
                value: link.replace("mailto:", ""),
                text,
            });
        } else if (link.includes("linkedin.com")) {
            socialItems.push({
                type: "linkedin",
                value: link,
                text: "Connect with LinkedIn",
            });
        } else if (link.startsWith("tel:")) {
            socialItems.push({
                type: "phone",
                value: link.replace("tel:", ""),
                text,
            });
        } else {
            socialItems.push({
                type: "link",
                value: link,
                text,
            });
        }
    });

    return (
        <main className="faculty_container h-full w-full min-h-screen overflow-x-hidden bg-transparent">
            {/* Hero Section matching the reference image */}
            <SingleFacultyHero
                facName={facultyName}
                desg={facultyDesignation}
                facultyImgURL={facImgUrl}
                socialLinks={socialItems}
            />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 md:py-14 text-[#111827]">
                {/* Interest Area(s) Pill Badges matching user design */}
                {interestItems.length > 0 && (
                    <div className="mb-10">
                        <h2 className="md:text-[36px] text-[28px] font-serif font-bold text-white mb-4">
                            {interestTitle}
                        </h2>
                        <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {interestItems.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1 bg-transparent text-white/90  text-xs md:text-sm font-normal rounded-full inline-flex items-center border border-white/90"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Faculty Tabs rendered as modern Accordion matching design */}
                {tabList.length > 0 && <FacultyAccordion tabs={tabList} />}
            </div>
        </main>
    );
};

export default page;
