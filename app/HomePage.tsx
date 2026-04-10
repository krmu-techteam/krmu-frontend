import { getHomePageData } from "@/lib/api/home";
import ADecade from "./(main-website)/Home/ADecade";
import AFS from "./(main-website)/Home/AFS";
import ElevateCampus from "./(main-website)/Home/ElevateCampus";
import EventsAndNews from "./(main-website)/Home/EventsAndNews";
import GlobalPartner from "./(main-website)/Home/GlobalPartner";
import HeroSection from "./(main-website)/Home/HeroSection";
import HomeTestimonial from "./(main-website)/Home/HomeTestimonial";
import OurTopRecruiters from "./(main-website)/Home/OurTopRecruiters";
import PlacementsRecruiters from "./(main-website)/Home/PlacementsRecruiters";
import ShapingFuture from "./(main-website)/Home/ShapingFuture";
import VisitExplore from "./(main-website)/Home/VisitExplore";
import WhyKRMU from "./(main-website)/Home/WhyKRMU";
import YourJourney from "./(main-website)/Home/YourJourney";
import MobElevateCampus from "./(main-website)/Home/MobElevateCampus";
import {
  createCollageOrUniversitySchema,
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/api/common";
import Script from "next/script";

export default async function HomePage() {
  const homepageContent = await getHomePageData();

  const hero = homepageContent.find(
    (component) => component.__component === "homepage-components.hero-section",
  );
  const aDecadeData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.a-decade-section",
  );

  const yourJourneyData = homepageContent.find(
    (component) => component.__component === "homepage-components.yourjourney",
  );
  const AFSData = homepageContent.find(
    (component) => component.__component === "homepage-components.afs-section",
  );

  const ourTopRecruitersData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.our-top-recruiters",
  );

  const feeStructureScholarData = homepageContent.find(
    (component) => component.__component === "homepage-components.fee-scholar",
  );

  const whyKRMUData = homepageContent.find(
    (component) => component.__component === "homepage-components.whykrmu",
  );

  const elevateCampusData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.elevate-campus",
  );
  const homeKRMTestimonialData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.home-testimonials",
  );
  const shapingFutureData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.shaping-future",
  );
  const globalPartenerData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.global-partener",
  );

  const visitExploreData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.visit-explore",
  );

  const eventsNewsData = homepageContent.find(
    (component) =>
      component.__component === "homepage-components.home-events-and-news",
  );

  const websiteSchema = createWebsiteSchema({
    name: "K.R. Mangalam University",
    alternateName: "KRMU",
    url: "https://www.krmangalam.edu.in",
    searchPath: "https://www.krmangalam.edu.in/search?q=",
  });

  const organizationSchema = createOrganizationSchema({
    name: "K.R. Mangalam University",
    alternateName: "KRMU",
    url: "https://www.krmangalam.edu.in",
    logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
    contactPoint: {
      telephone: "+91-8192888444",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.facebook.com/krmuniv",
      "https://www.instagram.com/krmuniv",
      "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
      "https://in.linkedin.com/school/krmuniv",
    ],
  });

  const collageOrUniversitySchema = createCollageOrUniversitySchema({
    name: "K.R. Mangalam University",
    alternateName: "KRMU",
    url: "https://www.krmangalam.edu.in",
    logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
    sameAs: [
      "https://www.facebook.com/krmuniv",
      "https://www.instagram.com/krmuniv",
      "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
      "https://in.linkedin.com/school/krmuniv",
    ],
  });

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collageOrUniversitySchema }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema }}
      />

      {hero && (
        <HeroSection
          title={hero?.title}
          subtitle={hero?.subtitle}
          video={hero?.HeroSectionVideo}
        />
      )}

      <main className="w-full">
        {aDecadeData && (
          <ADecade
            leftContent={aDecadeData?.adecadeleftcol}
            rightContent={aDecadeData?.adecaderightcol}
          />
        )}
        {yourJourneyData && (
          <YourJourney
            title={yourJourneyData?.title}
            content={yourJourneyData?.description}
            buttons={yourJourneyData?.button}
          />
        )}
        {AFSData && (
          <AFS
            content1={AFSData?.afs1content}
            content2={AFSData?.afs2content}
            content3={AFSData?.afs3content}
            image1={AFSData?.afsimage1}
            image2={AFSData?.afsimage2}
            image3={AFSData?.afsimage3}
            link1={AFSData?.link1}
            link2={AFSData?.link2}
            link3={AFSData?.link3}
          />
        )}
        {ourTopRecruitersData && (
          <OurTopRecruiters
            title={ourTopRecruitersData?.title}
            counters={ourTopRecruitersData?.counter}
            logos={ourTopRecruitersData?.logos}
          />
        )}

        {feeStructureScholarData && (
          <PlacementsRecruiters
            title1={feeStructureScholarData?.text1}
            title2={feeStructureScholarData?.text2}
            feeImage={feeStructureScholarData?.FeeStructureImage}
            scholarImage={feeStructureScholarData?.ScholarshipImage}
            link1={feeStructureScholarData?.link1}
            link2={feeStructureScholarData?.link2}
          />
        )}
        {whyKRMUData && (
          <WhyKRMU
            title={whyKRMUData?.title}
            subtitle={whyKRMUData?.subtitle}
            description={whyKRMUData?.Descriptions}
          />
        )}
        <div className="hidden lg:block">
          {elevateCampusData && (
            <ElevateCampus
              elevateCampus={elevateCampusData?.elevatecampus1}
              elevateImage1={elevateCampusData?.elevatecampusimage1}
              elevateCampus2={elevateCampusData?.ElevateCampus2}
              elevateImage2={elevateCampusData?.elevatecampusimage2}
              elevateCampus3={elevateCampusData?.elevatecampus3}
              elevateImage3={elevateCampusData?.elevatecampusimage3}
            />
          )}
        </div>
        <div className="lg:hidden">
          {elevateCampusData && (
            <MobElevateCampus
              elevateCampus={elevateCampusData?.elevatecampus1}
              elevateImage1={elevateCampusData?.elevatecampusimage1}
              elevateCampus2={elevateCampusData?.ElevateCampus2}
              elevateImage2={elevateCampusData?.elevatecampusimage2}
              elevateCampus3={elevateCampusData?.elevatecampus3}
              elevateImage3={elevateCampusData?.elevatecampusimage3}
            />
          )}
        </div>

        {homeKRMTestimonialData && (
          <HomeTestimonial
            title={homeKRMTestimonialData?.title}
            desc={homeKRMTestimonialData?.description}
          />
        )}
        {shapingFutureData && (
          <ShapingFuture
            highlight={shapingFutureData?.highlightext}
            subtitle={shapingFutureData?.subtitle}
            afterHighLight={shapingFutureData?.afterhighlighttext}
            desc={shapingFutureData?.descriptions}
            link1text={shapingFutureData?.link1text}
            link1={shapingFutureData?.link1}
            link2text={shapingFutureData?.link2text}
            link2={shapingFutureData?.link2}
            shapingimage={shapingFutureData?.shapingimage}
            mobShapimage={shapingFutureData?.mobileshapingimage}
            shapingCounters={shapingFutureData?.shapingCounter}
          />
        )}
        {globalPartenerData && (
          <GlobalPartner
            title={globalPartenerData?.title}
            desc={globalPartenerData?.descriptions}
            logoSliderHeading={globalPartenerData?.logosliderheading}
            globalLogos={globalPartenerData?.globalpartnerimages}
          />
        )}
        {visitExploreData && (
          <VisitExplore
            title1={visitExploreData?.title1}
            title2={visitExploreData?.title2}
            desc={visitExploreData.description}
            visitexplorebtns={visitExploreData.visitexplorebtn}
          />
        )}
        {eventsNewsData && (
          <EventsAndNews
            title={eventsNewsData?.title}
            newsandeventbtn={eventsNewsData?.newsandeventbtn}
          />
        )}
        {/* <PioneerExcellence /> */}
      </main>
    </>
  );
}
