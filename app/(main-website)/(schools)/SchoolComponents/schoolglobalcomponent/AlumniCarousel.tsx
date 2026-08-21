import AlumniLogoCard from "./AlumniLogoCard";
import { AlumniMedia, StrapiMedia } from "@/lib/types/common";

type Props = {
  AluLogos: AlumniMedia[] | StrapiMedia[];
};

const AlumniCarousel = ({ AluLogos }: Props) => {
  if (!AluLogos || AluLogos.length === 0) return null;

  // Duplicate logos for seamless infinite scroll
  const repeatedLogos = [...AluLogos, ...AluLogos];

  return (
    <div className="alumni-carousel">
      <div className="alumni-carousel__track">
        {repeatedLogos.map((logo, index) => (
          <div className="alumni-carousel__item my-5" key={`${logo.id}-${index}`}>
            <AlumniLogoCard
              logoUrl={logo.url}
              altText={logo.alternativeText || ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniCarousel;

// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import AlumniLogoCard from "./AlumniLogoCard";
// import { StrapiMedia } from "@/lib/types/common";

// type Props = {
//   AluLogos: StrapiMedia[];
// };

// const AlumniCarousel = ({ AluLogos }: Props) => {

//   return (
//     <Carousel
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//       plugins={[
//         Autoplay({
//           delay: 1000,
//         }),
//       ]}
//     >
//       <CarouselContent>
//         {AluLogos &&
//           AluLogos.map((logo) => {
//             return (
//               <CarouselItem
//                 key={logo.id}
//                 className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
//               >
//                 <AlumniLogoCard
//                   logoUrl={logo.url}
//                   altText={logo.alternativeText || ""}
//                 />
//               </CarouselItem>
//             );
//           })}
//       </CarouselContent>
//     </Carousel>
//   );
// };

// export default AlumniCarousel;
