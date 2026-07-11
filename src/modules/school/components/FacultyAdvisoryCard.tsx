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

export const FacultyAdvisoryCard = ({
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

      // EMAIL
      else if (href.startsWith("mailto:")) {
        items.push({
          type: "email",
          value: href.replace("mailto:", ""),
        });
      }
    });

    // LinkedIn first
    return items.sort((a, b) =>
      a.type === "linkedin" ? -1 : b.type === "linkedin" ? 1 : 0,
    );
  }, [facultyContent]);

  const isLoading = facultyContent === null;

  return (
    <div className="overflow-hidden rounded-t-xl bg-[#061623]/50 transition-all duration-300 ease-in-out  group flex flex-col font-poppins">
      {/* IMAGE SECTION */}
      <Link
        href={`/faculty/${slug}`}
        className="relative flex h-[240px] sm:h-[280px] w-full items-end justify-center overflow-hidden bg-transparent"
      >
        {/* BG LOGO */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
            width={290}
            height={299}
            alt="KRMU Logo"
            className="object-contain opacity-95"
          />
        </div>

        {/* FACULTY IMAGE */}
        <Image
          src={imgURL}
          width={272}
          height={295}
          alt={name}
          priority={false}
          className="relative z-10 h-[240px] -mb-2 sm:h-full sm:w-full rounded-t-[15px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          
        />
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 bg-[#061623]">
        {/* DETAILS */}
        <div className="min-h-[105px] border-b border-[#ddd] p-1.5 sm:p-5 flex-1">
          <Link
            href={`/faculty/${slug}`}
            target="_blank"
            className="inline-block text-white font-bold leading-snug text-base"
          >
            {name}
          </Link>

          <h5
            className="py-1 uppercase text-white text-xs"
            dangerouslySetInnerHTML={{
              __html: desg,
            }}
          />

          <h6
            className="font-bold text-white text-xs"
            dangerouslySetInnerHTML={{
              __html: qual,
            }}
          />
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex h-16 items-center justify-center mt-auto">
          {isLoading ? (
            // LOADING
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          ) : socialItems.length > 0 ? (
            // ICONS
            <ul className="flex h-14 items-center justify-center gap-3 px-4 sm:h-16 sm:py-2">
              {socialItems.map((item, index) => {
                const isLinkedin = item.type === "linkedin";

                return (
                  <li key={`${item.type}-${index}`}>
                    <Link
                      href={isLinkedin ? item.value : `mailto:${item.value}`}
                      target={isLinkedin ? "_blank" : undefined}
                      rel={isLinkedin ? "noopener noreferrer" : undefined}
                      className={`flex items-center justify-center rounded-md p-1.5 transition-opacity hover:opacity-90 ${
                        isLinkedin ? "bg-[#0077b5]" : "bg-white/30"
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
          ) : (
            // EMPTY SPACE
            <div className="h-9" />
          )}
        </div>
      </div>
    </div>
  );
};
