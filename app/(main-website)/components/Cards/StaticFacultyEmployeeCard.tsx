"use client";

import { getFacultyBySlug } from "@/lib/api/faculty";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import * as cheerio from "cheerio";
import { Mail } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  name: string;
  desg: string;
  slug: string;
  qual: string;
  imgURL: string;
};

type SocialItem = {
  type: "email" | "linkedin" | "phone" | "link";
  value: string;
  text: string;
};

export const StaticFacultyEmployeeCard = ({
  name,
  desg,
  slug,
  qual,
  imgURL,
}: Props) => {
  const [facultyContent, setFacultyContent] = useState("");

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await getFacultyBySlug(slug);
        const fac = res?.[0];

        setFacultyContent(fac?.content?.rendered || "");
      } catch (error) {
        console.error("Error fetching faculty:", error);
      }
    };

    if (slug) {
      fetchFaculty();
    }
  }, [slug]);

  const socialItems = useMemo<SocialItem[]>(() => {
    if (!facultyContent) return [];

    const $ = cheerio.load(facultyContent);

    const items: SocialItem[] = [];

    $(".fusion-checklist li").each((_, li) => {
      const link = $(li).find("a").attr("href") || "";
      const text = $(li).find("a").text().trim();

      if (!link) return;

      if (link.startsWith("mailto:")) {
        items.push({
          type: "email",
          value: link.replace("mailto:", ""),
          text,
        });
      } else if (link.includes("linkedin.com")) {
        items.push({
          type: "linkedin",
          value: link,
          text,
        });
      } else if (link.startsWith("tel:")) {
        items.push({
          type: "phone",
          value: link.replace("tel:", ""),
          text,
        });
      } else {
        items.push({
          type: "link",
          value: link,
          text,
        });
      }
    });

    return items
      .filter((item) => item.type === "linkedin" || item.type === "email")
      .sort((a, b) => {
        if (a.type === "linkedin") return -1;
        if (b.type === "linkedin") return 1;
        return 0;
      });
  }, [facultyContent]);

  return (
    <div className="overflow-hidden rounded-t-xl bg-white group hover:shadow-xl duration-300 ease-in-out">
      {/* IMAGE SECTION */}
      <Link
        href={`/faculty/${slug}`}
        className="bg-[#001732]  relative h-[130px] sm:h-[297px] w-full overflow-hidden flex items-end justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
            width={290}
            height={299}
            alt="KRMU Logo"
            className="object-contain opacity-95"
          />
        </div>

        <Image
          src={imgURL}
          width={272}
          height={295}
          alt={name}
          className="h-[120px] sm:w-full sm:h-full rounded-t-[15px] relative z-10 object-contain group-hover:scale-103  duration-500 ease"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col ">
        {/* DETAILS */}
        <div className="border-b border-[#ddd] p-1.5 sm:p-5 h-[105px] sm:h-full">
          <Link
            href={`/faculty/${slug}`}
            target="_blank"
            className="text-[11px] sm:text-base font-bold inline-block leading-snug"
          >
            {name}
          </Link>

          <h5
            className="text-[10px] sm:text-xs uppercase py-1"
            dangerouslySetInnerHTML={{
              __html: desg,
            }}
          />

          <h6
            className="text-[10px] sm:text-xs font-bold"
            dangerouslySetInnerHTML={{
              __html: qual,
            }}
          />
        </div>

        {/* SOCIAL ICONS */}
        <div className="h-16 flex items-center justify-center">
          {socialItems === undefined || socialItems === null ? (
            // LOADING STATE
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          ) : socialItems.length > 0 ? (
            // SOCIAL ICONS
            <ul className="flex items-center justify-center gap-3 px-4 sm:py-2 h-14 sm:h-16">
              {socialItems.map((item, index) => {
                const isLinkedin = item.type === "linkedin";

                return (
                  <li key={`${item.type}-${index}`}>
                    <Link
                      href={isLinkedin ? item.value : `mailto:${item.value}`}
                      target={isLinkedin ? "_blank" : undefined}
                      rel={isLinkedin ? "noopener noreferrer" : undefined}
                      className={`p-1.5 flex items-center justify-center rounded-md transition-opacity hover:opacity-90 ${
                        isLinkedin ? "bg-[#0077b5]" : "bg-[#001732]"
                      }`}
                    >
                      {isLinkedin ? (
                        <Image
                          src="/linkedin.svg"
                          width={16}
                          height={16}
                          alt="LinkedIn Icon"
                          className="w-5 h-5"
                        />
                      ) : (
                        <Mail color="#fff" size={20} />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            // NO ICONS
            <div className="h-9" />
          )}
        </div>
      </div>
    </div>
  );
};
