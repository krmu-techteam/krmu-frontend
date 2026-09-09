import ContactUsHero from "./comp/ContactUsHero";
import ContactUsRegionalOffice from "./comp/ContactUsRegionalOffice";
import ContactVisitOurLocation from "./comp/ContactVisitOurLocation";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { createBreadcrumbSchema } from "@/lib/api/common";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("contact-us");
  const seo = seoData[0];

  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
    : undefined;

  // ✅ Fallback if SEO is missing
  if (!seo) {
    return {
      title: "K.R. Mangalam University",
      description: "",
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: seo?.title || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.keyword || "",
    alternates: {
      canonical: seo?.canonicalUrl || "",
    },
    robots: {
      index: true,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      url: seo?.canonicalUrl || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
            {
              url: shareImageUrl,
              width: 1200,
              height: 630,
              alt: seo?.title || "K.R. Mangalam University",
            },
          ]
        : [],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}

const breadcrumbSchema = createBreadcrumbSchema([
  {
    name: "Home",
    url: "https://www.krmangalam.edu.in/",
  },
  {
    name: "Contact Us Page",
    url: "https://www.krmangalam.edu.in/contact-us",
  },
]);

export function createUniversitySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "University",
    "@id": "https://www.krmangalam.edu.in/#organization",
    name: "K.R. Mangalam University",
    url: "https://www.krmangalam.edu.in/",
    image: "https://www.krmangalam.edu.in/logo.png", // Replace with your logo or campus image
    logo: "https://www.krmangalam.edu.in/logo.png",
    telephone: "+91-1148884888",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sohna Road",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122103",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.27185078836405,
      longitude: 77.06937844372142,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/krmangalamuniversity",
      "https://www.instagram.com/krmangalamuniversity",
      "https://www.linkedin.com/school/kr-mangalam-university/",
      "https://www.youtube.com/@KRMangalamUniversity",
      "https://x.com/KRMUniversity",
    ],
  };
}
export function createContactUsLocalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.krmangalam.edu.in/contact-us",
    name: "K.R. Mangalam University",
    url: "https://www.krmangalam.edu.in/contact-us",
    image:
      "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75https://www.krmangalam.edu.in/logo.png", // Replace with actual logo URL
    telephone: "+91-1148884888",
    email: "welcome@krmangalam.edu.in",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Sohna Road",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122103",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.272101510567026,
      longitude: 77.06936811905503,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:30",
      },
    ],
  };
}
const page = () => {
  return (
    <>
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createContactUsLocalSchema()),
        }}
      />

      <ContactUsHero />
      <ContactUsRegionalOffice />
      <ContactVisitOurLocation />
    </>
  );
};

export default page;
