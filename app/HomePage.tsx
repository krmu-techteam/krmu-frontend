import {
  AboutSection,
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
import { homeService } from "@/modules/home/home.provider";
import { Container } from "@/components/common/Container";

export default async function HomePage() {
  const heroSection = await homeService.getComponent(
    "homepage-components.hero-section",
  );
  const aboutSection = await homeService.getComponent(
    "homepage-components.a-decade-section",
  );
  const newsEventsSection = await homeService.getComponent(
    "homepage-components.home-events-and-news",
  );
  const testimonialsSection = await homeService.getComponent(
    "homepage-components.home-testimonials",
  );
  const testimonialsData = await homeService.getTestimonials();

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
        {heroSection && <HeroSection {...heroSection} />}
        <Container>
          {aboutSection && (
            <AboutSection
              topContent={aboutSection.adecadeleftcol}
              bottomContent={aboutSection.adecaderightcol}
            />
          )}
          <JourneySection />
          <PlacementsSection />
        </Container>
        <LifeAtKRMU />

        <TestimonialsSection
          {...testimonialsSection}
          testimonialsData={testimonialsData}
        />
        <Container>
          <ResearchSection />
          <PartnersSection />
        </Container>
        <VisitSection />
        <Container>
          {newsEventsSection ? (
            <NewsEventsSection {...(newsEventsSection as any)} />
          ) : (
            <NewsEventsSection />
          )}
        </Container>
      </main>
    </>
  );
}
