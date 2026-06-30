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
  type: "email" | "linkedin";
  value: string;
};

export const StaticFacultyEmployeeCard = ({
  name,
  desg,
  slug,
  qual,
  imgURL,
}: Props) => {
  const [facultyContent, setFacultyContent] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    let mounted = true;

    const fetchFaculty = async () => {
      try {
        const res = await getFacultyBySlug(slug);

        if (!mounted) return;

        setFacultyContent(res?.[0]?.content?.rendered || "");
      } catch (error) {
        console.error("Error fetching faculty:", error);

        if (mounted) {
          setFacultyContent("");
        }
      }
    };

    fetchFaculty();

    return () => {
      mounted = false;
    };
  }, [slug]);

  const socialItems = useMemo<SocialItem[]>(() => {
    if (facultyContent === null) return [];

    const $ = cheerio.load(facultyContent);

    const items: SocialItem[] = [];
    let emailAdded = false;

    $(".fusion-checklist li a").each((_, el) => {
      const href = $(el).attr("href")?.trim();

      if (!href) return;

      // LINKEDIN
      if (href.includes("linkedin.com")) {
        items.push({
          type: "linkedin",
          value: href,
        });
      }

      // EMAIL — only add the first email found
      else if (href.startsWith("mailto:") && !emailAdded) {
        items.push({
          type: "email",
          value: href.replace("mailto:", ""),
        });
        emailAdded = true;
      }
    });

    // LinkedIn first
    return items.sort((a, b) =>
      a.type === "linkedin" ? -1 : b.type === "linkedin" ? 1 : 0,
    );
  }, [facultyContent]);

  const isLoading = facultyContent === null;

  return (
    <div className="relative w-full overflow-hidden bg-white transition-all duration-300 ease-in-out hover:shadow-xl group flex flex-col">
      {/* CARD LINK OVERLAY */}
      <Link
        href={`/faculty/${slug}`}
        target="_blank"
        className="absolute inset-0 z-10"
        aria-label={name}
      />

      {/* IMAGE SECTION */}
      <div className="relative flex h-full sm:h-[240px] md:h-[280px] w-full items-end justify-center overflow-hidden bg-white">
        {/* SOCIAL ICONS */}
        <ul className="absolute top-0 -right-2 flex h-14 items-center justify-center gap-2 px-4 sm:h-16 sm:py-2 z-30">
          {socialItems.map((item, index) => {
            const isLinkedin = item.type === "linkedin";

            return (
              <li key={`${item.type}-${index}`}>
                <Link
                  href={isLinkedin ? item.value : `mailto:${item.value}`}
                  target={isLinkedin ? "_blank" : undefined}
                  rel={isLinkedin ? "noopener noreferrer" : undefined}
                  className={`relative z-40 flex items-center justify-center rounded-[4px] p-1.5 transition-opacity hover:opacity-90 ${
                    isLinkedin ? "bg-[#0077b5]" : "bg-[#001732]"
                  }`}
                >
                  {isLinkedin ? (
                    <Image
                      src="/linkedin.svg"
                      width={20}
                      height={20}
                      alt="LinkedIn"
                      className="h-5 w-5"
                    />
                  ) : (
                    <Mail size={20} color="#fff" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* FACULTY IMAGE */}
        <Image
          src={imgURL}
          width={272}
          height={295}
          alt={name}
          priority={false}
          className="object-contain sm:object-cover h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">
        <div className="min-h-[105px] border-b border-[#ddd] p-1.5 sm:p-5 flex-1 bg-[#001732]">
          <span className="inline-block font-bold leading-snug text-lg text-white">
            {name}
          </span>

          <h5
            className="py-1 uppercase text-sm text-[#0099BB] font-medium"
            dangerouslySetInnerHTML={{
              __html: desg,
            }}
          />

          <h6
            className="text-sm text-white font-semibold"
            dangerouslySetInnerHTML={{
              __html: qual,
            }}
          />
        </div>
      </div>
    </div>
  );
};
