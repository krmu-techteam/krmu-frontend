import * as cheerio from "cheerio";
import { getFacultyBySlug, singleFaculty } from "@/lib/api/faculty";
import Image from "next/image";
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  // Linkedin,
  // Mail,
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
import { createPersonSchema, getWordImageById } from "@/lib/api/common";
import { Metadata } from "next";
import { origUrl } from "@/app/constant";
import Script from "next/script";

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
  let interestHTML = $(".interest-lists").prop("outerHTML") || "";

  // Replace h3 with h2 in interestHTML
  if (interestHTML) {
    const $interest = cheerio.load(interestHTML);
    $interest("h3").each((_, el) => {
      const $el = $interest(el);
      const h2 = $interest("<h2>")
        .append($el.contents())
        .attr("class", $el.attr("class"));
      $el.replaceWith(h2);
    });
    interestHTML = $interest.html() || interestHTML;
  }

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

  const personFacultySchema = {
    name: facultyName || "",
    image: facImgUrl || "",
    url: slug ? `https://krmangalam.edu.in/faculty/${slug}` : "",
  };

  const personJsonLd = createPersonSchema(personFacultySchema);

  return (
    <>
      <Script
        id="blog-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personJsonLd }}
        strategy="afterInteractive"
      />
      <section className="faculty_container h-full w-full">
        {/* Hero Section */}
        <div className="relative bg-[#0a1d3a] overflow-hidden h-[550px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                'url("https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/img_3717a6e847.png")',
            }}
          />
          {/* <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
          width={290}
          height={299}
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute lg:right-[6%] xl:right-[17%] 2xl:right-[25%] top-[53%] -translate-y-1/2 w-[240px] lg:w-[180px] xl:w-[200px] h-auto  pointer-events-none select-none "
        /> */}

          <div className="relative max-w-[1080px] h-full  mx-auto pt-[100px] sm:pt-[170px]  px-4 sm:px-6 lg:px-10 ">
            <div className="rounded-2xl fac_name_desg_int p-4 md:p-5 flex flex-col md:flex-row items-center md:items-stretch gap-5 md:gap-8 ">
              <Image
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
                width={290}
                height={299}
                alt=""
                aria-hidden="true"
                className="hidden lg:block absolute lg:right-[20px] xl:right-[20px]  top-[120px] -translate-y-1/2 w-[240px] lg:w-[180px] xl:w-[200px] h-auto  pointer-events-none select-none "
              />
              <div className="bg-[#eef2f7] rounded-xl overflow-hidden flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] h-[240px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
                {facImgUrl && (
                  <Image
                    src={facImgUrl}
                    width={300}
                    height={300}
                    alt={facultyName}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>

              <div className="flex-1 text-white py-4 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold leading-tight">
                  {facultyName}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/85 mt-1 mb-5 md:mb-6">
                  {facultyDesignation}
                </p>

                <ul className="flex flex-col gap-3 md:gap-3.5">
                  {socialItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-white/95 text-sm md:text-[15px] break-all justify-center md:justify-start"
                    >
                      <span className="w-7 h-7 md:w-8 md:h-8 rounded-sm bg-[#2196f3] inline-flex items-center justify-center flex-shrink-0">
                        {item.type === "email" && (
                          <Image
                            src={
                              "https://cdn-icons-png.flaticon.com/512/9068/9068642.png"
                            }
                            width={32}
                            height={32}
                            alt="Mail"
                            className=""
                            unoptimized
                          />
                        )}
                        {item.type === "linkedin" && (
                          <Image
                            src={
                              "https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                            }
                            width={35}
                            height={35}
                            alt="LinkedIn"
                            className=" text-white"
                            unoptimized
                          />
                        )}
                        {item.type === "phone" && (
                          <Phone
                            aria-hidden="true"
                            className="w-4 h-4 md:w-[18px] md:h-[18px] text-white"
                          />
                        )}
                        {item.type === "link" && (
                          <FileText
                            aria-hidden="true"
                            className="w-4 h-4 md:w-[18px] md:h-[18px] text-white"
                          />
                        )}
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
                        rel={
                          item.type === "linkedin" ? "noreferrer" : undefined
                        }
                      >
                        {item.text || item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
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
    </>
  );
};

export default page;
