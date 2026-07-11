import { STRAPI_URL } from "@/app/constant";
import { getRegistrarOfficeData } from "@/lib/api/registrar-office";
import Image from "next/image";
import Link from "next/link";
import RegDepartment from "./RegDepartment";




import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";





export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("registrar-office");
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

const page = async () => {
  const registrarData = await getRegistrarOfficeData();

  const breadcrumb = registrarData?.breadcrumb;
  const imageUrl = breadcrumb?.backgroundimage?.url;
  const bgColor = breadcrumb?.breadcrumbbgcolor || "#000"; // fallback if needed
  const regImage = registrarData?.registrarimage?.url;
  const departmentsData = registrarData?.department;

  return (
    <>
      <section
        className="md:pt-52 md:pb-40 pt-36 pb-20 px-5"
        style={{
          backgroundColor: bgColor,
          backgroundImage: imageUrl
            ? `url(${STRAPI_URL}${imageUrl})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full text-center text-white">
          <h1 className="text-2xl md:text-4xl lg:text-[64px] font-bold">
            {breadcrumb?.breadcrumbtext}
          </h1>
        </div>
      </section>
      <section className="lg:py-12 lg:px-8 p-5">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="lg:flex items-center justify-between">
            <div className="w-full lg:w-3/4">
              <p className="mb-5">{registrarData?.registrarinfo}</p>
              <div className="flex flex-col gap-2.5 mb-5 break-all">
                <span>
                  <strong>{registrarData?.registrarname}</strong>
                </span>
                <span>
                  <strong>Designation: </strong>
                  {registrarData?.registrardesignation}
                </span>
                <span>
                  <strong>Email:</strong>{" "}
                  <Link href={`mailto:${registrarData?.registraremail}`}>
                    {registrarData?.registraremail}
                  </Link>
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/4 flex items-center justify-center">
              {regImage && (
                <Image
                  src={`${STRAPI_URL}${regImage}`}
                  width={300}
                  height={320}
                  alt={registrarData?.registrarname}
                />
              )}
            </div>
          </div>
          <div
            className="prose max-w-none pt-12 lg:pt-0 customlist"
            dangerouslySetInnerHTML={{
              __html: registrarData?.registrardescription || "",
            }}
          />
        </div>
      </section>
      <section className="pt-10">
        <div className="max-w-[1600px] mx-auto w-full pb-12 lg:py-0 px-5">
          {departmentsData && <RegDepartment depData={departmentsData} />}
        </div>
      </section>
    </>
  );
};

export default page;
