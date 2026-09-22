import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO(
    "counselling-mental-wellbeing-centre-we-dost"
  );
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
    title: seo?.title || "K.R. Mangalam University Website",
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
const page = () => {
  return (
    <>
      <section className="pt-[140px] lg:pt-[15%] pb-[10%] bg-[url(/infra.webp)] bg-cover bg-no-repeat bg-center common-overlay">
        <div className="max-w-[1664px] mx-auto w-full">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] relative z-10 text-white font-semibold text-center px-4">
            Counselling & Mental Wellbeing Centre (We Dost)
          </h1>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10 flex flex-col lg:flex-row px-4 gap-5 lg:gap-10">
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-5">
              Counselling and Mental Wellbeing Centre (We Dost)
            </h3>
            <p className="mb-5">
              <strong>
                The Counselling and Mental Wellbeing Centre (We Dost)
              </strong>{" "}
              at <strong>K.R. Mangalam University,</strong> established in year
              2023. The centre is dedicated to fostering emotional resilience,
              personal growth, and mental wellbeing within the university
              community. The centre provides a safe, confidential, and
              supportive environment where students and staff can address
              emotional, social, academic, and behavioural challenges.
            </p>
            <p>
              Centre promote holistic wellbeing by offering quality mental
              health care, developing coping strategies, enhancing self-esteem,
              and helping individuals overcome stress, anxiety, and other life
              challenges. The centre also aims to assist students in making
              informed educational and career choices, understanding their
              strengths and aspirations, and building meaningful connections
              with peers and faculty.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-5">Our Services</h3>
            <p>
              The centre offers a range of services to student and staff
              including{" "}
              <strong>
                individual and group counselling, crisis intervention,
                workshops, and training sessions
              </strong>
              . Most services are provided in person, while tele-counselling is
              available for those who require remote support.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10  px-4">
          <h3 className="text-2xl font-semibold mb-5">Our Objectives</h3>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Provide accessible and high-quality mental health care to
                  students and staff.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Support individuals in addressing personal, educational,
                  social, and psychological concerns.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Foster coping skills and emotional resilience.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Enhance self-esteem among weaker, slow learners, and
                  physically challenged individuals.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Help manage examination-related stress, anxiety, and phobias.
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Guide students in planning their educational and vocational
                  pathways.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Encourage self-awareness regarding interests, abilities, and
                  opportunities.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Encourage self-awareness regarding interests, abilities, and
                  opportunities.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Strengthen mutual understanding between students and teachers.
                </li>
                <li className="flex items-center gap-5">
                  <span className="bg-[#051630] p-1.5 rounded-full">
                    <Check color="#fff" size={22} strokeWidth={3} />
                  </span>
                  Extend guidance and counselling services to the community
                  beyond campus at nominal charges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10 px-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-5">About the Centre</h3>
            <ul className="list-disc pl-5 my-5">
              <li>Chairman (to be upload)</li>
              <li>Coordinator (to be upload)</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-5">About the Centre</h3>
            <ul className="list-disc pl-5 my-5">
              <li>Mr. Amit Kumar</li>
              <li>Dr. Mansi Yadav</li>
              <li>Dr. Mansi Yadav</li>
              <li>Dr. Hena Dembla</li>
              <li>Dr. Shalini Singh</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3"></div>
        </div>
      </section>

      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10 px-4 flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="w-full lg:w-1/3">
            <h4 className="text-4xl font-semibold mb-5">Committee</h4>

            <div>
              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/we-dost-constitution-1.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl mb-5"
              >
                We Dost Constitution-1
              </Link>
              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/we-dost-constitution-2.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl"
              >
                We Dost Constitution-2
              </Link>

              <h4 className="text-4xl font-semibold my-5">Resources</h4>

              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/duty-roster-october-2024.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl mb-5"
              >
                SOP-WE DOST
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="text-4xl font-semibold mb-5">Awareness Material</h4>

            <div>
              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/leaflet-english-hindi-wellbeing-centre-size-a4.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl mb-5"
              >
                Duty Roster October 2024
              </Link>

              <h4 className="text-4xl font-semibold my-5">SOP- Guidelines</h4>

              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/duty-roster-october-2024.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl mb-5"
              >
                SOP-WE DOST
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className="text-4xl font-semibold mb-5">Annual Report</h4>

            <div>
              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/annua-report-2023-24-counselling-and-mental-wellbeing-centre-k.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl mb-5"
              >
                Annual Report 2023-24 Counselling and Mental Wellbeing Centre K
              </Link>

              <Link
                href="https://krmangalam.edu.in/pdfs/we-dost/annual-report-2024-25.pdf"
                target="_blank" rel="noopener noreferrer"
                className="p-5 block font-semibold text-white bg-[#ff0000] text-center text-xl mb-5"
              >
                Annual Report 2024-25
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full px-4">
          <h4 className="text-4xl font-semibold mb-5">Photo Gallery</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Image src="/counsel/item-1.png" width={526} height={395} alt="" />
            <Image src="/counsel/item-2.png" width={526} height={395} alt="" />
            <Image src="/counsel/item-3.png" width={526} height={395} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10 px-4 break-all sm:break-normal">
          <h4 className="text-4xl font-semibold mb-5">Contact Us</h4>
          <div className="flex flex-wrap gap-5 lg:gap-10">
            <Link
              href="mailto:counselling.cell@krmangalam.edu.in"
              className="flex items-center gap-5 text-xl font-medium"
            >
              <span className="bg-[#051630] p-1.5 rounded-full">
                {/* <Check color="#fff" size={22} strokeWidth={3} /> */}
                <Image
                  src="/white-envelope.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </span>
              counselling.cell@krmangalam.edu.in
            </Link>
            <Link
              href="tel:9289152667"
              className="flex items-center gap-5 text-xl font-medium"
            >
              <span className="bg-[#051630] p-1.5 rounded-full">
                {/* <Check color="#fff" size={22} strokeWidth={3} /> */}
                <Image
                  src="/white-phone-call.svg"
                  width={30}
                  height={30}
                  alt=""
                />
              </span>
              9289152667
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10 px-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Image src="/counsel/image-1.png" width={768} height={520} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <Image src="/counsel/image-2.png" width={768} height={520} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full flex justify-center py-10 px-4">
          <Image src="/counsel/image-3.png" width={768} height={994} alt="" />
        </div>
      </section>
      <section>
        <div className="max-w-[1664px] mx-auto w-full py-10 px-4">
          <h4 className="text-4xl font-semibold mb-5">Address</h4>
          <div className="flex items-center gap-5 text-xl font-medium mb-5">
            <span className="bg-[#051630] p-1.5 rounded-full">
              {/* <Check color="#fff" size={22} strokeWidth={3} /> */}
              <Image src="/white-location.svg" width={30} height={30} alt="" />
            </span>
            K.R. Mangalam University
          </div>
          <p>
            <strong>Sohna Road, Gurugram, Haryana 122103</strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
