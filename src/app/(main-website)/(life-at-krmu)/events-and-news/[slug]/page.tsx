import NewsEventsImageContent from "../comp/NewsEventsImageContent";
import { OtherEventsSection, OtherEventItem } from "../comp/OtherEventsSection";
import {
  getSingleNewsAndEvents,
  getSingleNewsAndEventsWP,
} from "@/lib/api/single-news-events";
import { getNewsEventsWP } from "@/lib/api/news-events";
import { getWordImageById } from "@/lib/api/common";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { NoIndexEventsSlugs } from "../NoIndexEventsSlugs";

type Props = {
  params: Promise<{ slug: string }>;
};

type NewsEventItem = {
  id?: number;
  slug: string;
  date?: string;
  featured_media?: number;
  title?: {
    rendered?: string;
  };
  content?: {
    rendered?: string;
  };
  acf?: {
    event_images?: number[];
  };
  yoast_head_json?: {
    title?: string;
    description?: string;
    robots?: {
      index?: string;
      follow?: string;
    };
  };
};

async function fetchEventBySlug(slug: string) {
  if (!slug) return null;
  const decodedSlug = decodeURIComponent(slug);

  // 1. Try WordPress API first
  try {
    const wpData: NewsEventItem[] = await getSingleNewsAndEventsWP(decodedSlug);
    if (Array.isArray(wpData) && wpData.length > 0) {
      const foundWP = wpData.find(
        (item) => item.slug === slug || item.slug === decodedSlug,
      );
      if (foundWP) {
        return {
          title: foundWP.title?.rendered || "",
          content: foundWP.content?.rendered || "",
          imageIds: foundWP.acf?.event_images || [],
          yoast: foundWP.yoast_head_json,
          slug: foundWP.slug,
        };
      }
    }
  } catch (err) {
    console.error("Error fetching WP single news event:", err);
  }

  // 2. Fallback to Strapi API if WP didn't return a match
  try {
    const strapiData = await getSingleNewsAndEvents(decodedSlug);
    if (Array.isArray(strapiData) && strapiData.length > 0) {
      const foundStrapi = strapiData.find(
        (item) => item.slug === slug || item.slug === decodedSlug,
      );
      if (foundStrapi) {
        let contentHtml = "";
        if (typeof foundStrapi.content === "string") {
          contentHtml = foundStrapi.content;
        } else if (Array.isArray(foundStrapi.content)) {
          contentHtml = (foundStrapi.content as any[])
            .map((b: any) =>
              Array.isArray(b.children)
                ? b.children.map((c: any) => c.text || "").join("")
                : "",
            )
            .join("<br/>");
        }
        return {
          title: foundStrapi.title || "",
          content: contentHtml,
          imageUrls: foundStrapi.newsmedia?.map((m: any) => m.url) || [],
          yoast: undefined,
          slug: foundStrapi.slug,
        };
      }
    }
  } catch (err) {
    console.error("Error fetching Strapi single news event:", err);
  }

  return null;
}

async function fetchOtherEvents(currentSlug: string): Promise<OtherEventItem[]> {
  try {
    const wpRes = await getNewsEventsWP(1, 10);
    const items = wpRes?.data || [];
    const decodedSlug = decodeURIComponent(currentSlug);

    const filtered = items.filter(
      (item: NewsEventItem) => item.slug !== currentSlug && item.slug !== decodedSlug,
    );

    const itemsWithImages: OtherEventItem[] = await Promise.all(
      filtered.map(async (item: NewsEventItem) => {
        let imageUrl = "";
        if (item.featured_media) {
          imageUrl = (await getWordImageById(item.featured_media)) || "";
        }
        return {
          id: item.id || item.slug,
          title: item.title?.rendered || "",
          slug: item.slug,
          date: item.date || "",
          imageUrl,
        };
      }),
    );

    return itemsWithImages;
  } catch (error) {
    console.error("Error fetching other events:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const singleNewsEvents = await fetchEventBySlug(slug);

  const siteTitle = singleNewsEvents?.title;
  const siteMetaTitle = singleNewsEvents?.yoast?.title || siteTitle;
  const siteMetaDescription =
    singleNewsEvents?.yoast?.description || siteTitle || "";
  const mainUrl = process.env.NEXT_PUBLIC_MAIN_URL || "https://www.krmangalam.edu.in";
  const siteCanonicalUrl = `${mainUrl}/events-and-news/${slug}`;

  const isForceNoIndex = NoIndexEventsSlugs.includes(slug);

  return {
    title: siteMetaTitle || "K.R. Mangalam University",
    description: siteMetaDescription,
    alternates: {
      canonical: siteCanonicalUrl,
    },
    openGraph: {
      title: siteMetaTitle || "K.R. Mangalam University",
      description: siteMetaDescription,
      type: "website",
    },
    robots: {
      index: isForceNoIndex
        ? false
        : singleNewsEvents?.yoast?.robots?.follow === "nofollow"
          ? false
          : true,
      follow: isForceNoIndex
        ? false
        : singleNewsEvents?.yoast?.robots?.follow === "nofollow"
          ? false
          : true,
    },
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const [singleNewsEvents, otherEvents] = await Promise.all([
    fetchEventBySlug(slug),
    fetchOtherEvents(slug),
  ]);

  if (!singleNewsEvents) {
    return notFound();
  }

  return (
    <>
      <NewsEventsImageContent
        title={singleNewsEvents.title}
        content={singleNewsEvents.content}
        bgSlideImageIds={singleNewsEvents.imageIds}
        bgSlideImageUrls={singleNewsEvents.imageUrls}
      />
      <OtherEventsSection events={otherEvents} />
    </>
  );
};

export default page;

