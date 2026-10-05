import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Container } from "@/components/common/Container";
import {
    getHomeService,
    HOME_COMPONENT_KEYS,
    IHomeService,
} from "@/features/home";
import {
    HeroSection,
    AboutSection,
    HomeSchemaScripts,
} from "@/presentation/home";

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
import { NewsEventsSkeleton } from "@/presentation/home/components/news-and-event";

const NewsEventsSection = dynamic(
    () =>
        import("@/presentation/home/sections/NewsEventsSection").then(
            (m) => m.NewsEventsSection
        ),
    {
        loading: () => <NewsEventsSkeleton />,
    }
);

async function AsyncTestimonialsSection({
    testimonialsSection,
}: {
    testimonialsSection: any;
}) {
    const homeService = getHomeService();
    const testimonialsData = await homeService.getTestimonials();
    return (
        <TestimonialsSection
            {...testimonialsSection}
            testimonialsData={testimonialsData}
        />
    );
}

async function AsyncNewsEventsSection({
    newsEventsSection,
}: {
    newsEventsSection: any;
}) {
    const homeService = getHomeService();
    const newsEventsData = await homeService.getNewsEvents(1, 20);
    return newsEventsSection ? (
        <NewsEventsSection
            {...(newsEventsSection as any)}
            eventsData={newsEventsData}
        />
    ) : (
        <NewsEventsSection eventsData={newsEventsData} />
    );
}

export default async function HomePage() {
    const homeService: IHomeService = getHomeService();

    const [heroSection, aboutSection, newsEventsSection, testimonialsSection] =
        await Promise.all([
            homeService.getComponent(HOME_COMPONENT_KEYS.HERO),
            homeService.getComponent(HOME_COMPONENT_KEYS.ABOUT),
            homeService.getComponent(HOME_COMPONENT_KEYS.NEWS_EVENTS),
            homeService.getComponent(HOME_COMPONENT_KEYS.TESTIMONIALS),
        ]);

    return (
        <>
            <link
                rel="preload"
                as="image"
                href="/modules/home/hero/hero-poster.webp"
                fetchPriority="high"
            />
            <HomeSchemaScripts />
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
                    <AsyncTestimonialsSection
                        testimonialsSection={testimonialsSection}
                    />
                </Suspense>

                <Container>
                    <Suspense fallback={<div className="min-h-[400px]" />}>
                        <ResearchSection />
                    </Suspense>
                </Container>

                <Suspense fallback={<div className="min-h-[400px]" />}>
                    <PartnersSection />
                </Suspense>

                <Suspense fallback={<div className="min-h-[400px]" />}>
                    <VisitSection />
                </Suspense>

                <Container>
                    <Suspense fallback={<NewsEventsSkeleton />}>
                        <AsyncNewsEventsSection
                            newsEventsSection={newsEventsSection}
                        />
                    </Suspense>
                </Container>
            </main>
        </>
    );
}
