import SchoolAdmissionOpen from "../SchoolComponents/SchoolAdmissionOpen";
import SchoolCommenceJourney from "../SchoolComponents/SchoolCommenceJourney";
import SchoolDeansVision from "../SchoolComponents/SchoolDeansVision";
import SchoolEventAndExperience from "../SchoolComponents/SchoolEventAndExperience";
import SchoolExcellence from "../SchoolComponents/SchoolExcellence";
import SchoolExcitedAlready from "../SchoolComponents/SchoolExcitedAlready";
import SchoolFacilities from "../SchoolComponents/SchoolFacilities";
import SchoolFacultyAdvisory from "../SchoolComponents/SchoolFacultyAdvisory";
import SchoolHero from "../SchoolComponents/SchoolHero";
import SchoolIndustryCollaboration from "../SchoolComponents/SchoolIndustryCollaboration";
import SchoolInfoStatistics from "../SchoolComponents/SchoolInfoStatistics";
import SchoolKnowledgePartner from "../SchoolComponents/SchoolKnowledgePartner";
import SchoolLetsExplore from "../SchoolComponents/SchoolLetsExplore";
import SchoolNewsletter from "../SchoolComponents/SchoolNewsletter";
import SchoolOurAlumni from "../SchoolComponents/SchoolOurAlumni";
import SchoolProgrammeOffered from "../SchoolComponents/SchoolProgrammeOffered";
import SchoolTestimonials from "../SchoolComponents/SchoolTestimonials";
import { notFound } from "next/navigation";
import {
  getEventsAndExperiencesBySchoolCat,
  getSchoolPage,
} from "@/lib/api/schools";
import { Metadata } from "next";
import SchoolIndustyVideo from "../SchoolComponents/SchoolIndustyVideo";
import { checkCustomPage } from "@/lib/constants/page";
import CustomPage from "@/app/(main-website)/(page)/CustomPage";
import { STRAPI_URL } from "@/app/constant";
import { getSchoolSEO } from "@/lib/api/website-seo";
import { folderRouteSEO } from "@/lib/api/siteseo";
import SchoolAdvantages2 from "../SchoolComponents/SchoolDesign2/SchoolAdvantages2";
import SchoolOpenSourceMentorship from "../SchoolComponents/SchoolDesign2/SchoolOpenSourceMentorship";
import SchoolExcitedNewsletter from "../SchoolComponents/SchoolDesign2/SchoolExcitedNewsletter";
import {
  sbasLogos,
  semceLogos,
  smasLogos,
  soadLogos,
  soasLogos,
  soedLogos,
  soetLogos,
  sohmctLogos,
  solaLogos,
  solsLogos,
  somcLogos,
  sprsLogos,
} from "../SchoolComponents/schoolData";
import {
  sbasHerosLogos,
  semceHerosLogos,
  smasHerosLogos,
  soadHerosLogos,
  soasHerosLogos,
  soedHerosLogos,
  soetHerosLogos,
  sohmctHerosLogos,
  solaHerosLogos,
  solsHerosLogos,
  somcHerosLogos,
  sprsHerosLogos,
} from "../SchoolComponents/schoolHeroLogo";
import {
  commonCollegeUniversitySchema,
  createBreadcrumbSchema,
  createProgrammeItemListSchema,
  createWebPageSchema,
} from "@/lib/api/common";

import Script from "next/script";
import { allProgrammes } from "./allProgrammesList";
import { url } from "inspector";
import { SeoData } from "@/app/(landing-page)/admission/all-course-2026/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

const noIndexQSSust = [
  "qs-activities-report",
  "qs-annual-sustainability-report-2025",
  "qs-detailed-report",
  "qs-environment-sustainability-report",
  "qs-good-governance-report",
  "qs-knowledge-exchange",
  "qs-social-impact-report",
  "qs-sustainable-conferences",
  "qs-sustainability-focused",
  "qs-updated-green-campus-policy",
  "qs-sustainability-march-18",
  "qs-sustainability",
  "qs-good-health-and-well-being",
  "qs-carbon-net-zero",
  "qs-others",
];

const schoolsImageMap: Record<string, any> = {
  "school-of-engineering-and-technology": soetLogos,
  "school-of-physiotherapy-and-rehabilitation-sciences": sprsLogos,
  "school-of-management-and-commerce": somcLogos,
  "school-of-legal-studies": solsLogos,
  "school-of-medical-and-allied-sciences": smasLogos,
  "school-of-liberal-arts": solaLogos,
  "school-of-architecture-design": soadLogos,
  "school-of-basic-and-applied-sciences": sbasLogos,
  "school-of-emerging-media-and-creator-economy": semceLogos,
  "school-of-hotel-management-and-catering-technology": sohmctLogos,
  "school-of-education": soedLogos,
  "school-of-agriculutural-sciences": soasLogos,
};
const schoolsHeroLogosMap: Record<string, any> = {
  "school-of-engineering-and-technology": soetHerosLogos,
  "school-of-physiotherapy-and-rehabilitation-sciences": sprsHerosLogos,
  "school-of-management-and-commerce": somcHerosLogos,
  // "school-of-legal-studies": solsHerosLogos,
  "school-of-medical-and-allied-sciences": smasHerosLogos,
  "school-of-liberal-arts": solaHerosLogos,
  "school-of-architecture-design": soadHerosLogos,
  "school-of-basic-and-applied-sciences": sbasHerosLogos,
  // "school-of-emerging-media-and-creator-economy": semceHerosLogos,
  "school-of-hotel-management-and-catering-technology": sohmctHerosLogos,
  "school-of-education": soedHerosLogos,
  "school-of-agriculutural-sciences": soasHerosLogos,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ no await

  const seoData = await getSchoolSEO(slug);
  const customSEO = await folderRouteSEO(slug);

  const custPage = await checkCustomPage(slug);
  const isPage = custPage[0];

  if (isPage?.is_custom_page === "custom_page") {
    const seo = customSEO[0];

    const isQsSustain = noIndexQSSust.includes(slug);

    const shareImageUrl = seo?.shareImg?.url
      ? `${STRAPI_URL}${seo?.shareImg?.url}`
      : undefined;
    return {
      title: seo?.title || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      keywords: seo?.keyword || "",
      alternates: {
        canonical: seo?.canonicalUrl || "",
      },
      robots: {
        index: !isQsSustain,
        follow: !isQsSustain,
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
  } else {
    const seo = seoData[0]?.school_seo;
    const shareImageUrl = seo?.shareImage?.url
      ? `${STRAPI_URL}${seo?.shareImage?.url}`
      : undefined;
    return {
      title: seo?.metaTitle || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      keywords: seo?.metaKeyword || "",
      alternates: {
        canonical: seo?.canonical || "",
      },
      robots: {
        index: true,
        follow: true,
      },

      // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
      openGraph: {
        title: seo?.metaTitle || "K.R. Mangalam University",
        description: seo?.metaDescription || "",
        url: seo?.canonical || "",
        siteName: "K.R. Mangalam University",
        images: shareImageUrl
          ? [
              {
                url: shareImageUrl,
                width: 1200,
                height: 630,
                alt: seo?.metaTitle || "K.R. Mangalam University",
              },
            ]
          : [],
        type: "website",
      },

      // ✅ Twitter Card
      twitter: {
        card: "summary_large_image",
        title: seo?.metaTitle || "K.R. Mangalam University",
        description: seo?.metaDescription || "",
        images: shareImageUrl ? [shareImageUrl] : [],
      },
    };
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params; // ✅ await params

  const allSchools = await getSchoolPage();

  const custPage = await checkCustomPage(slug);
  const isPage = custPage[0];

  const school = allSchools.find((school) => school.urlslug === slug);
  if (isPage?.is_custom_page === "custom_page") {
    return <CustomPage slug={isPage?.slug || ""} />;
  }

  // If not found, redirect to 404 page
  if (!school) return notFound();

  const schoolKnowComp = school.schoolcomps.find(
    (component) => component.__component === "schoolcomponent.knowledge",
  );

  const schoolCat = school?.school_category?.name;

  const schoolEventsAndExperience =
    await getEventsAndExperiencesBySchoolCat(schoolCat);

  const degreeName = school?.degree?.name;
  const schoolCategoryName = school?.school_category?.name;
  // const WordSchoolslug = school?.wordschoolslug;
  const schoolsLogosData = schoolsImageMap[slug];
  const schoolsHerosLogosData = schoolsHeroLogosMap[slug];

  const getAllProgrammes =
    allProgrammes.find((prog) => prog.slug === slug)?.links ?? [];

  const programmes = [...getAllProgrammes];

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Home",
      url: "https://www.krmangalam.edu.in/",
    },
    {
      name: "School",
      url: `https://www.krmangalam.edu.in/${school.urlslug}`,
    },
  ]);

  const schoolSchema = createProgrammeItemListSchema({
    name: `Programmes Offered - ${school.schoolname}`,
    description: `List of undergraduate, postgraduate and doctoral programmes offered by ${school.schoolname} at K.R. Mangalam University.`,
    url: `https://www.krmangalam.edu.in/${school.urlslug}`,
    programmes,
  });

  // const collegeUniversitySchema = commonCollegeUniversitySchema({
  //   name: "K.R. Mangalam University",
  //   alternateName: "KRMU",
  //   url: "https://www.krmangalam.edu.in",
  //   logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
  //   award: "NAAC 'A' Grade",
  //   numberOfEmployees: {
  //     name: "Faculty",
  //     value: 700,
  //   },
  //   amenityFeature: [
  //     {
  //       name: "Campus Area",
  //       value: "35+ acres",
  //     },
  //     {
  //       name: "Total Students",
  //       value: "12000+",
  //     },
  //     {
  //       name: "Recruiting Companies",
  //       value: "800+",
  //     },
  //     {
  //       name: "Highest Package",
  //       value: "56.6 LPA",
  //     },
  //   ],
  //   sameAs: [
  //     "https://www.facebook.com/krmuniv",
  //     "https://www.instagram.com/krmuniv",
  //     "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
  //     "https://in.linkedin.com/school/krmuniv",
  //   ],
  // });

  const webPageSchema = createWebPageSchema({
    name: `${school.schoolname} | K.R. Mangalam University`,
    url: `https://www.krmangalam.edu.in/${school.urlslug}`,
    description: SeoData.description,
    aboutName: school.schoolname,
    aboutUrl: "https://www.krmangalam.edu.in/",
  });

  return (
    <>
      {schoolSchema && (
        <Script
          id="school-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schoolSchema,
          }}
        />
      )}
      {webPageSchema && (
        <Script
          id="school-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: webPageSchema,
          }}
        />
      )}

      {/* <Script
        id="college-university-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collegeUniversitySchema),
        }}
      /> */}
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      )}
      <SchoolHero
        herobanner={school?.schoolherobanner}
        title={school.schoolname}
        subheading={school.subheading}
        heroBtns={school.herobutton}
        videoFmt={school.videoformat}
        iframeContent={school.iframe}
        videoLink={school.videolink}
        fullWidth={school?.fullwidthhero}
        alumniLogos={schoolsHerosLogosData}
        admTitle={school.admissionsessiontitle}
        admBtn={school.admissionbtn}
        slug={slug}
      />
      {/* {school.admissionsessiontitle && (
        <SchoolAdmissionOpen
          title={school.admissionsessiontitle}
          admBtn={school.admissionbtn}
        />
      )} */}

      {schoolKnowComp && (
        <SchoolInfoStatistics
          heading={schoolKnowComp?.heading}
          subheading={schoolKnowComp?.subheading}
          desc={schoolKnowComp?.description}
          counters={schoolKnowComp?.counter}
          slug={slug}
        />
      )}
      {school?.alumnititle && (
        <SchoolOurAlumni
          title={school?.alumnititle}
          alumniLogos={schoolsLogosData}
        />
      )}

      <SchoolProgrammeOffered
        degName={degreeName}
        schoolCategoryName={schoolCategoryName}
        title={school?.programme_offered?.title}
        content={school?.programme_offered?.content}
        slug={slug}
      />

      {/* <SchoolExcitedAlready
        heading={school?.excitedtitle}
        desc={school?.exciteddescription}
        excbtns={school?.excitedbtns}
        excbg={school?.excitedbg?.url}
      />
      {school?.newslettertitle && (
        <SchoolNewsletter
          heading={school?.newslettertitle}
          desc={school?.newsletterdesc}
          btns={school?.newsletterbtns}
          newsletterbg={school?.newsletterbg?.url}
        />
      )} */}
      <SchoolExcitedNewsletter
        excitedHeading={school?.excitedtitle}
        excitedDesc={school?.exciteddescription}
        excbtns={school?.excitedbtns}
        newsLetterHeading={school?.newslettertitle}
        newsLetterDesc={school?.newsletterdesc}
        newsLetterBtns={school?.newsletterbtns}
      />
      {school?.advantagetitle && (
        <SchoolAdvantages2
          heading={school?.advantagetitle}
          desc={school?.advantagedesc}
          subtitle={school?.advantagesubtitle}
          advimg={school?.advantagimg}
          advcards={school?.advantageCards}
          school_advantage={school?.school_advantage?.advantage_content}
        />
      )}
      {slug === "school-of-engineering-and-technology" && (
        <SchoolOpenSourceMentorship />
      )}
      {/* {school?.induscollabtitle &&
        Array.isArray(school?.collabcards) &&
        school.collabcards.length > 0 && (
          <SchoolIndustryCollaboration
            title={school.induscollabtitle}
            collabCards={school.collabcards}
          />
        )} */}

      {school?.letsexplorecontent && (
        <SchoolLetsExplore
          content={school?.letsexplorecontent}
          list1={school?.listitem1?.listsitems}
          list2={school?.listitem2}
          list3={school?.listitem3}
          slug={slug}
        />
      )}
      {school?.knowledgetitle && (
        <SchoolKnowledgePartner
          title={school?.knowledgetitle}
          logos={school?.knowledgepartenerlogos}
        />
      )}
      {school?.coetitle1 && (
        <SchoolExcellence
          title1={school?.coetitle1}
          title2={school?.coetitle2}
          btn1={school?.coebtn1}
          btn2={school?.coebtn2}
        />
      )}
      {school?.tetimonialtitle && (
        <SchoolTestimonials
          title={school?.tetimonialtitle}
          desc={school?.testimonialdesc}
          testis={school?.testimonials}
        />
      )}
      {school?.showdeaninfo && (
        <SchoolDeansVision
          deanName={school?.deansname}
          desg={school?.deandesignation}
          deanEmail={school?.deanemail}
          title={school?.deanvisiontitle}
          subtitle={school?.deanvisionsubtitle}
          desc={school?.deancontent}
          deanImgUrl={school?.deanimg?.url}
        />
      )}
      {school?.fac_adv && (
        <SchoolFacultyAdvisory
          fac_adv={school?.fac_adv}
          schoolCat={schoolCat}
          // WordSchoolslug={WordSchoolslug}
        />
      )}
      {school?.video_comp && (
        <SchoolIndustyVideo
          heading={school?.video_comp?.heading}
          videoCards={school?.video_comp?.video_iframe_fields}
        />
      )}
      {school?.eventstitle && (
        <SchoolEventAndExperience
          title={school?.eventstitle}
          desc={school?.eventsdesc}
          btn={school?.eventsbtn}
          eventsexp={schoolEventsAndExperience}
        />
      )}
      {/* {school?.studentachievementtitle && (
        <SchoolStudentAchievements
          title={school?.studentachievementtitle}
          btn={school?.studentachievementsbtn}
          schoolCat={schoolCat}
        />
      )} */}
      {school?.facility_slide && (
        <SchoolFacilities fac_slides={school?.facility_slide} />
      )}
      {school?.commence_journey && (
        <SchoolCommenceJourney
          highlight_heading={school?.commence_journey?.highlight_heading}
          heading={school?.commence_journey?.heading}
          imgUrl={school?.commence_journey?.commence_img?.url}
          btn={school?.commence_journey?.commence_btn}
        />
      )}
    </>
  );
}
