import NewsEventsHero from "../comp/NewsEventsHero";
import NewsEventsImageContent from "../comp/NewsEventsImageContent";
import {
  getSingleNewsAndEvents,
  getSingleNewsAndEventsWP,
} from "@/lib/api/single-news-events";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

type NewsEventItem = {
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    event_images: number[];
  };
  yoast_head_json: {
    title: string;
    description?: string;
    robots?: {
      index?: boolean;
      follow?: boolean;
    };
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const seoData = await folderRouteSEO("gallery-image");

  const { slug } = await params; // ✅ await params

  const singleNewsAndEventsData: NewsEventItem[] =
    await getSingleNewsAndEventsWP(slug);

  // const singleNewsAndEventsData = await getSingleNewsAndEvents(slug);

  const singleNewsEvents = singleNewsAndEventsData.find(
    (items) => items.slug === slug,
  );
  const siteTitle = singleNewsEvents?.title?.rendered;
  const siteMetaTitle = singleNewsEvents?.yoast_head_json?.title;
  const siteMetaDescription = singleNewsEvents?.yoast_head_json?.description;
  const siteCanonicalUrl = `${process.env.NEXT_PUBLIC_MAIN_URL}/events-and-news/${slug}`;

  return {
    title: siteMetaTitle || siteTitle || "K.R. Mangalam University",
    description: siteMetaDescription || siteTitle || "",
    alternates: {
      canonical: siteCanonicalUrl || "",
    },
    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: siteMetaTitle || siteTitle || "K.R. Mangalam University",
      description: siteMetaDescription || siteTitle || "",
      type: "website",
    },
    robots: {
      index: singleNewsEvents?.yoast_head_json?.robots?.index ?? true,
      follow: singleNewsEvents?.yoast_head_json?.robots?.follow ?? true,
    },

    // ✅ Twitter Card
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params; // ✅ await params

  const singleNewsAndEventsData: NewsEventItem[] =
    await getSingleNewsAndEventsWP(slug);

  // const singleNewsAndEventsData = await getSingleNewsAndEvents(slug);

  const singleNewsEvents = singleNewsAndEventsData.find(
    (items) => items.slug === slug,
  );

  // // Return 404 if either is missing
  // if (!singleNewsEvents) {
  //   return notFound();
  // }

  return (
    <>
      {singleNewsEvents && (
        <NewsEventsHero title={singleNewsEvents?.title?.rendered} />
      )}
      {singleNewsEvents && (
        <NewsEventsImageContent
          content={singleNewsEvents?.content?.rendered}
          bgSlideImageIds={singleNewsEvents?.acf?.event_images}
        />
      )}
    </>
  );
};

export default page;
