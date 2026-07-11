import {
  LifeAtKRMU,
  NewsEventsSection,
  PartnersSection,
  ResearchSection,
  TestimonialsSection,
  VisitSection,
} from "@/modules/home";

import Script from "next/script";
import { Container } from "@/components/common/Container";
import {
  getHomeService,
  HOME_COMPONENT_KEYS,
  IHomeService,
  homeSchemaService,
} from "@/features/home";
import {
  HeroSection,
  AboutSection,
  JourneySection,
  PlacementsSection,
} from "@/presentation/home";

export default async function HomePage() {
  const homeService: IHomeService = getHomeService();

  const [
    heroSection,
    aboutSection,
    newsEventsSection,
    testimonialsSection,
    testimonialsData,
  ] = await Promise.all([
    homeService.getComponent(HOME_COMPONENT_KEYS.HERO),
    homeService.getComponent(HOME_COMPONENT_KEYS.ABOUT),
    homeService.getComponent(HOME_COMPONENT_KEYS.NEWS_EVENTS),
    homeService.getComponent(HOME_COMPONENT_KEYS.TESTIMONIALS),
    homeService.getTestimonials(),
  ]);

  const { websiteSchema, organizationSchema, collageOrUniversitySchema } =
    homeSchemaService.getHomePageSchemas();

  // const websiteSchema = createWebsiteSchema({
  //   name: "K.R. Mangalam University",
  //   alternateName: "KRMU",
  //   url: "https://www.krmangalam.edu.in",
  //   searchPath: "https://www.krmangalam.edu.in/search?q=",
  // });

  // const organizationSchema = createOrganizationSchema({
  //   name: "K.R. Mangalam University",
  //   alternateName: "KRMU",
  //   url: "https://www.krmangalam.edu.in",
  //   logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
  //   contactPoint: {
  //     telephone: "+91-8192888444",
  //     contactType: "customer service",
  //     areaServed: "IN",
  //     availableLanguage: "en",
  //   },
  //   sameAs: [
  //     "https://www.facebook.com/krmuniv",
  //     "https://www.instagram.com/krmuniv",
  //     "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
  //     "https://in.linkedin.com/school/krmuniv",
  //   ],
  // });

  // const collageOrUniversitySchema = createCollageOrUniversitySchema({
  //   name: "K.R. Mangalam University",
  //   alternateName: "KRMU",
  //   url: "https://www.krmangalam.edu.in",
  //   logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
  //   sameAs: [
  //     "https://www.facebook.com/krmuniv",
  //     "https://www.instagram.com/krmuniv",
  //     "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
  //     "https://in.linkedin.com/school/krmuniv",
  //   ],
  // });

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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <NewsEventsSection {...(newsEventsSection as any)} />
          ) : (
            <NewsEventsSection />
          )}
        </Container>
      </main>
    </>
  );
}
