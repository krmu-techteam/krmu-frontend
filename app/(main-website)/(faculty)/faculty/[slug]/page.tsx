import * as cheerio from "cheerio";
import { getFacultyBySlug, singleFaculty } from "@/lib/api/faculty";
import FacultyTabsScript from "./FacultyTabsScript";
import Image from "next/image";

import { Mail, Phone } from "lucide-react"; // NEW ICONS
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

  // Extract interest HTML
  const interestHTML = $(".interest-lists").prop("outerHTML") || "";

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
        text: link,
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

  // Clean main HTML (remove other fullwidth blocks)
  const blocks = $(".fusion-fullwidth");
  blocks.not(blocks.eq(2)).remove();
  const cleanedHTML = $.html();

  return (
    <section
      className="faculty_container h-full w-full pt-52 px-5"
      style={{
        background: `linear-gradient(168deg,#051630 6.9%,#004e8a 162.66%)`,
      }}
    >
      <div className="fac_info_container">
        <div className="fac_img_container text-center">
          {facImgUrl && (
            <Image
              src={facImgUrl}
              width={272}
              height={292}
              className="h-[292px] rounded-[20px] inline-block w-full sm:w-fit object-cover"
              alt=""
            />
          )}
        </div>

        <div className="fac_name_desg_int text-white">
          <div className="py-[15px] border-b border-white">
            <h1 className="text-2xl lg:text-[35px] font-semibold">
              {facultyName}
            </h1>

            <p className="text-[18px]">{facultyDesignation}</p>
          </div>

          {/* INTEREST HTML (allowed) */}
          <div
            dangerouslySetInnerHTML={{ __html: interestHTML }}
            className="faculty_interest_wrapper mt-5"
          />
        </div>

        {/* ⭐ CLEAN SOCIAL LINKS (NO <i>, NO HTML INJECTION) */}
        <div className="fac_social_links text-white">
          <ul className="space-y-3 mt-4 border-b border-white py-5">
            {socialItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                {item.type === "email" && (
                  <div>
                    <Mail className="w-7 h-7 p-1.5 bg-[#cb000d] flex items-center justify-center rounded-full" />
                  </div>
                )}
                {item.type === "linkedin" && (
                  <div className="contents">
                    <Image
                      src="/linkedin.svg"
                      width={28}
                      height={28}
                      alt="Linkedin Icon"
                      className="w-7 h-7 p-1.5 bg-[#cb000d] flex items-center object-contain justify-center rounded-full"
                    />
                  </div>
                )}
                {item.type === "phone" && (
                  <div>
                    {" "}
                    <Phone className="w-7 h-7 p-1.5 bg-[#cb000d] flex items-center justify-center rounded-full" />
                  </div>
                )}

                {/* OPEN LINKS */}
                <a
                  href={
                    item.type === "email"
                      ? `mailto:${item.value}`
                      : item.type === "phone"
                      ? `tel:${item.value}`
                      : item.value
                  }
                  className="text-base break-all"
                  target={item.type === "linkedin" ? "_blank" : undefined}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        dangerouslySetInnerHTML={{ __html: cleanedHTML }}
        className="faculty_main_content_container"
      />

      <FacultyTabsScript />
    </section>
  );
};

export default page;
