import * as cheerio from "cheerio";
import { getFacultyBySlug, singleFaculty } from "@/lib/api/faculty";
import Image from "next/image";
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MonitorPlay,
  Newspaper,
  Phone,
  Presentation,
  Trophy,
  UserRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getWordImageById } from "@/lib/api/common";
import { Metadata } from "next";
import { origUrl } from "@/app/constant";

type Props = {
  params: Promise<{ slug: string }>;
};

const FacultySectionIcon = ({ title }: { title: string }) => {
  const lowerTitle = title.toLowerCase();
  const Icon = lowerTitle.includes("profile")
    ? UserRound
    : lowerTitle.includes("education")
      ? GraduationCap
      : lowerTitle.includes("experience")
        ? BriefcaseBusiness
        : lowerTitle.includes("publication")
          ? Newspaper
          : lowerTitle.includes("presentation")
            ? Presentation
            : lowerTitle.includes("workshop") || lowerTitle.includes("webinar")
              ? MonitorPlay
              : lowerTitle.includes("chapter") || lowerTitle.includes("book")
                ? BookOpen
                : lowerTitle.includes("project") ||
                    lowerTitle.includes("achievement")
                  ? Trophy
                  : FileText;

  const gradientId = `faculty-section-icon-gradient-${
    lowerTitle.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "default"
  }`;

  return (
    <Icon
      className="faculty_section_icon"
      aria-hidden="true"
      stroke={`url(#${gradientId})`}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0060aa" />
          <stop offset="100%" stopColor="#e31e24" />
        </linearGradient>
      </defs>
    </Icon>
  );
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
    (fac: singleFaculty) => fac?.slug === slug,
  );

  const facultyContent = currentFaculty?.content.rendered || "";
  const facultyImgId = currentFaculty?.featured_media;
  const facultyName = currentFaculty?.title?.rendered || "";
  const facultyDesignation = currentFaculty?.acf?.staff_designation || "";

  let facImgUrl = "";

  if (facultyImgId !== undefined && facultyImgId !== null) {
    facImgUrl = await getWordImageById(facultyImgId);
  }

  const $ = cheerio.load(facultyContent);
  const interestHTML = $(".interest-lists").prop("outerHTML") || "";

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
    } else if (link) {
      socialItems.push({
        type: "link",
        value: link,
        text,
      });
    }
  });

  const blocks = $(".fusion-fullwidth");
  blocks.not(blocks.eq(2)).remove();

  const tabSections: {
    id: string;
    title: string;
    content: string;
  }[] = [];
  const seenTabSections = new Set<string>();

  const addTabSection = (section: {
    id: string;
    title: string;
    content: string;
  }) => {
    const sectionKey = `${section.title.toLowerCase()}-${section.content.replace(/\s+/g, " ").trim()}`;

    if (seenTabSections.has(sectionKey)) return;

    seenTabSections.add(sectionKey);
    tabSections.push(section);
  };

  $(".fusion-tabs .nav-tabs a.tab-link").each((index, tabLink) => {
    const href = $(tabLink).attr("href") || "";
    const title =
      $(tabLink).find(".fusion-tab-heading").text().trim() ||
      $(tabLink).text().trim() ||
      `Section ${index + 1}`;
    const pane = href ? $(href) : $(".fusion-tabs .tab-pane").eq(index);
    const content = pane.html()?.trim() || "";

    if (content) {
      addTabSection({
        id: href.replace("#", "") || `faculty-section-${index}`,
        title,
        content,
      });
    }
  });

  if (!tabSections.length) {
    $(".fusion-tabs .tab-pane").each((index, pane) => {
      const content = $(pane).html()?.trim() || "";

      if (content) {
        addTabSection({
          id: $(pane).attr("id") || `faculty-section-${index}`,
          title: $(pane).attr("aria-labelledby") || `Section ${index + 1}`,
          content,
        });
      }
    });
  }

  const cleanedHTML = $.html();

  return (
    <section className="faculty_container h-full w-full">
      {/* Hero Section */}
      <div className="faculty_profile_hero">
        <div className="faculty_profile_hero_overlay">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
            width={290}
            height={299}
            alt="KRMU Logo"
            className="faculty_profile_overlay_logo"
          />
        </div>
        <div className="absolute bottom-[-90px] right-[-240px] w-[300px] h-[500px] bg-radial-[at_60%_75%] from-red-500 via-red-500  to-80% rounded-md blur-3xl to-transparent  pointer-events-none"></div>
        <div className="fac_info_container">
          <div className="fac_img_container">
            {facImgUrl && (
              <Image
                src={facImgUrl}
                width={280}
                height={340}
                className="faculty_profile_img"
                alt={facultyName}
                priority
              />
            )}
          </div>

          <div className="fac_name_desg_int text-white">
            <h1 className="faculty_profile_name">{facultyName}</h1>
            <p className="faculty_profile_designation">{facultyDesignation}</p>

            <ul className="fac_social_links">
              {socialItems.map((item, index) => (
                <li key={index}>
                  <span className="faculty_social_icon">
                    {item.type === "email" && <Mail aria-hidden="true" />}
                    {item.type === "linkedin" && (
                      <Linkedin aria-hidden="true" />
                    )}
                    {item.type === "phone" && <Phone aria-hidden="true" />}
                    {item.type === "link" && <FileText aria-hidden="true" />}
                  </span>

                  <a
                    href={
                      item.type === "email"
                        ? `mailto:${item.value}`
                        : item.type === "phone"
                          ? `tel:${item.value}`
                          : item.value
                    }
                    target={item.type === "linkedin" ? "_blank" : undefined}
                    rel={item.type === "linkedin" ? "noreferrer" : undefined}
                  >
                    {item.text || item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="faculty_profile_body">
        {interestHTML && (
          <div
            dangerouslySetInnerHTML={{ __html: interestHTML }}
            className="faculty_interest_wrapper"
          />
        )}

        {tabSections.length > 0 ? (
          <Accordion
            type="multiple"
            defaultValue={[`${tabSections[0]?.id}-0`]}
            className="faculty_profile_card"
          >
            {tabSections.map((section, index) => (
              <AccordionItem
                key={`${section.id}-${index}`}
                value={`${section.id}-${index}`}
                className="faculty_profile_section"
              >
                <AccordionTrigger className="faculty_profile_trigger">
                  <span className="faculty_section_title">
                    <FacultySectionIcon title={section.title} />
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="faculty_section_content">
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: cleanedHTML }}
            className="faculty_main_content_container"
          />
        )}
      </div>
    </section>
  );
};

export default page;
