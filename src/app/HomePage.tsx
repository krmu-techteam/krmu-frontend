import dynamic from "next/dynamic";
import { Suspense } from "react";
import Script from "next/script";
import { Container } from "@/components/common/Container";
import {
    getHomeService,
    HOME_COMPONENT_KEYS,
    IHomeService,
    homeSchemaService,
} from "@/features/home";
import { HeroSection, AboutSection } from "@/presentation/home";

const JourneySection = dynamic(() =>
    import("@/presentation/home/sections/JourneySection").then(
        (m) => m.JourneySection
    )
);

const PlacementsSection = dynamic(() =>
    import("@/presentation/home/sections/PlacementSection").then(
        (m) => m.PlacementsSection
    )
);
const LifeAtKRMUSection = dynamic(() =>
    import("@/presentation/home/sections/LifeAtKRMUSection").then(
        (m) => m.LifeAtKRMUSection
    )
);
const TestimonialsSection = dynamic(() =>
    import("@/presentation/home/sections/TestimonialsSection").then(
        (m) => m.TestimonialsSection
    )
);
const ResearchSection = dynamic(() =>
    import("@/presentation/home/sections/ResearchSection").then(
        (m) => m.ResearchSection
    )
);
const PartnersSection = dynamic(() =>
    import("@/presentation/home/sections/PartnersSection").then(
        (m) => m.PartnersSection
    )
);
const VisitSection = dynamic(() =>
    import("@/presentation/home/sections/VisitSection").then(
        (m) => m.VisitSection
    )
);
const NewsEventsSection = dynamic(() =>
    import("@/presentation/home/sections/NewsEventsSection").then(
        (m) => m.NewsEventsSection
    )
);

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
                dangerouslySetInnerHTML={{
                    __html: educationalOrganizationSchema,
                }}
            />
            <main className="w-full max-w-full overflow-x-hidden">
                {heroSection && <HeroSection {...heroSection} />}
                <Container>
                    {aboutSection && (
                        <AboutSection
                            topContent={aboutSection.adecadeleftcol}
                            bottomContent={aboutSection.adecaderightcol}
                        />
                    )}
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        <JourneySection />
                    </Suspense>
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        <PlacementsSection />
                    </Suspense>
                </Container>
                <Suspense fallback={<div className="min-h-[400px]" />}>
                    <LifeAtKRMUSection />
                </Suspense>

                <Suspense fallback={<div className="min-h-[400px]" />}>
                    <TestimonialsSection
                        {...testimonialsSection}
                        testimonialsData={testimonialsData}
                    />
                </Suspense>

                <Container>
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        <ResearchSection />
                    </Suspense>
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        <PartnersSection />
                    </Suspense>
                </Container>

                <Suspense fallback={<div className="min-h-[400px]" />}>
                    <VisitSection />
                </Suspense>

                <Container>
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        {newsEventsSection ? (
                             
                            <NewsEventsSection
                                {...(newsEventsSection as any)}
                            />
                        ) : (
                            <NewsEventsSection />
                        )}
                    </Suspense>
                </Container>
            </main>
        </>
    );
}
