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
  LifeAtKRMUSection,
  NewsEventsSection,
  PartnersSection,
  ResearchSection,
  TestimonialsSection,
  VisitSection,
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

  const {
    websiteSchema,
    educationalOrganizationSchema,
    collegeOrUniversitySchema,
  } = homeSchemaService.getHomePageSchemas();

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
        dangerouslySetInnerHTML={{ __html: collegeOrUniversitySchema }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: educationalOrganizationSchema }}
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
        <LifeAtKRMUSection />

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
