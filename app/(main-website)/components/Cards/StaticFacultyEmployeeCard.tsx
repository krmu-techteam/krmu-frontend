"use client";

import { getFacultyBySlug } from "@/lib/api/faculty";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import * as cheerio from "cheerio";
import { Mail } from "lucide-react";

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
      .filter(
        (item) =>
          item.type === "linkedin" || item.type === "email",
      )
      .sort((a, b) => {
        if (a.type === "linkedin") return -1;
        if (b.type === "linkedin") return 1;
        return 0;
      });
  }, [facultyContent]);

  return (
    <div className="overflow-hidden rounded-t-xl bg-white">
      {/* IMAGE SECTION */}
      <div className="bg-[#001732] relative h-[297px] w-full overflow-hidden flex items-end justify-center">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
            width={290}
            height={299}
            alt="KRMU Logo"
            className="object-contain"
          />
        </div>

        <Image
          src={imgURL}
          width={272}
          height={295}
          alt={name}
          className="rounded-t-[15px] relative z-10 object-cover"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div>
        {/* DETAILS */}
        <div className="border-b border-[#cccccc] p-4">
          <h4 className="text-xl font-bold">{name}</h4>

          <h5
            className="text-base uppercase py-1"
            dangerouslySetInnerHTML={{
              __html: desg,
            }}
          />

          <h6
            className="text-sm font-semibold"
            dangerouslySetInnerHTML={{
              __html: qual,
            }}
          />
        </div>

        {/* SOCIAL ICONS */}
        {socialItems.length > 0 && (
          <ul className="flex items-center justify-center gap-3 p-4">
            {socialItems.map((item, index) => {
              const isLinkedin = item.type === "linkedin";

              return (
                <li key={`${item.type}-${index}`}>
                  <Link
                    href={
                      isLinkedin
                        ? item.value
                        : `mailto:${item.value}`
                    }
                    target={
                      isLinkedin ? "_blank" : undefined
                    }
                    rel={
                      isLinkedin
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`p-2 flex items-center justify-center rounded-md transition-opacity hover:opacity-90 ${
                      isLinkedin
                        ? "bg-[#0077b5]"
                        : "bg-[#001732]"
                    }`}
                  >
                    {isLinkedin ? (
                      <Image
                        src="/linkedin.svg"
                        width={24}
                        height={24}
                        alt="LinkedIn Icon"
                        className="w-6 h-6"
                      />
                    ) : (
                      <Mail color="#fff" size={24} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};