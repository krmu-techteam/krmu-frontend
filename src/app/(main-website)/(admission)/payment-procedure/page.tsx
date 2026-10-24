import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { Metadata } from "next";
import { HelpDeskSection, HeroSection, OnlineFeeSection, PaymentProcedureFaqSection } from "@/presentation/admission/payment-procedure/sections";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("payment-procedure");
  const seo = seoData?.[0];

  const title =
    seo?.title || "Payment Procedure - K.R. Mangalam University";
  const description =
    seo?.metaDescription ||
    "K.R. Mangalam University offers secure and convenient payment options for registration, tuition, hostel, transport, and other fees.";
  const canonical =
    seo?.canonicalUrl || "https://www.krmangalam.edu.in/payment-procedure";
  const shareImageUrl = seo?.shareImg?.url
    ? `${STRAPI_URL}${seo?.shareImg?.url}`
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords:
      seo?.keyword ||
      "Payment Procedure, Fee Payment, K.R. Mangalam University, Online Fee",
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "K.R. Mangalam University",
      locale: "en_IN",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImageUrl],
    },
  };
}

const PaymentProcedurePage = () => {
  return (
    <>
      <HeroSection />
      <OnlineFeeSection />
      <PaymentProcedureFaqSection />
      <HelpDeskSection />
    </>
  );
};

export default PaymentProcedurePage;
