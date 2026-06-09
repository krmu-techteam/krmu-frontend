import { AlumniLogoCard } from "./";
import { AlumniLogoCarouselProps } from "@/modules/school";
import { Carousel } from "@/components/common/Carousel";

const AlumniCarousel = ({ AluLogos }: AlumniLogoCarouselProps) => {
  if (!AluLogos || AluLogos.length === 0) return null;
  
  // If there are 6 or fewer images, they fit on desktop/laptop screens.
  // We disable looping and auto-scrolling.
  const shouldLoopAndScroll = AluLogos.length > 6;

  let displayLogos = [...AluLogos];
  if (shouldLoopAndScroll) {
    // Ensure enough slides for a smooth infinite loop
    while (displayLogos.length < 18) {
      displayLogos = [...displayLogos, ...AluLogos];
    }
  }

  return (
    <div className="w-full">
      <Carousel
        options={{ 
          loop: shouldLoopAndScroll, 
          dragFree: true,
          containScroll: "trimSnaps"
        }}
        autoScroll={shouldLoopAndScroll}
        autoScrollSpeed={1.5}
        showArrows={false}
        showDots={false}
        slideClassName="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4 md:pl-6"
        containerClassName={`-ml-4 md:-ml-6 ${!shouldLoopAndScroll ? 'xl:justify-center' : ''}`}
      >
        {displayLogos.map((logo, index) => (
          <div
            className="my-5 h-full"
            key={`${logo.id}-${index}`}
          >
            <AlumniLogoCard
              logoUrl={logo.url}
              altText={logo.alternativeText || ""}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AlumniCarousel;
