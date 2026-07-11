import type { Metadata } from "next";

export type BlogOgImage = {
  width: number;
  height: number;
  url: string;
  type: string;
};

export type BlogRobot = {
  index: string;
  follow: string;
};

export type YoastHeadJson = {
  title: string;
  description: string;
  robots: BlogRobot;
  canonical?: string;
  og_image: BlogOgImage[];
};

const removeTrailingSlash = (url?: string): string | undefined => {
  if (!url) return undefined;
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export function yoastToMetadata(yoast: YoastHeadJson, slug: string): Metadata {
  // const canonical = removeTrailingSlash(yoast?.canonical);

  const canonical = `https://www.krmangalam.edu.in/blog/${slug}`;

  return {
    title: yoast?.title,
    description: yoast?.description,

    alternates: canonical
      ? {
          canonical,
        }
      : undefined,

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: yoast?.title,
      description: yoast?.description,
      url: canonical,
      images: yoast?.og_image?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      })),
    },
  };
}
