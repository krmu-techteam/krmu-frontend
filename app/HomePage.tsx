import {
  AboutSection,
  AboutSectionComponentProps,
  getHomePageContent,
  HeroSection,
  JourneySection,
  LifeAtKRMU,
  NewsEventsSection,
  PartnersSection,
  PlacementsSection,
  ResearchSection,
  TestimonialsSection,
  VisitSection,
} from "@/modules/home";
import {
  createCollageOrUniversitySchema,
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/api/common";

import Script from "next/script";

export default async function HomePage() {
  const homepageContent = await getHomePageContent();

  const about_section = homepageContent.find(
    (component) => component.__component === "homepage-components.a-decade-section",
  ) as AboutSectionComponentProps | undefined;

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
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteSchema }}
      />
      <Script
        id="collage-university-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: collageOrUniversitySchema }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema }}
      />
      <main>
        <HeroSection />
        {about_section && (
          <AboutSection
            topContent={about_section.adecadeleftcol}
            bottomContent={about_section.adecaderightcol}
          />
        )}
        <JourneySection />
         <PlacementsSection />
         <LifeAtKRMU />
         <TestimonialsSection />
         <ResearchSection />
         <PartnersSection />
         <VisitSection />
         <NewsEventsSection />
        
      </main>
    </>
  );
}
