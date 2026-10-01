import Image from "next/image";
import { soadConfGalleryImages } from "../constant";

const CampusVenueGallery = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Gallery Header */}
        <div className="mb-7 sm:mb-8 md:mb-10">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#b08233] sm:mb-3 sm:text-[11px]">
            Gallery
          </span>

          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-4xl">
            Campus &amp; Venue
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4">
          {/* First Large Image */}
          <div className="relative h-[220px] overflow-hidden rounded-[12px] sm:h-[280px] md:col-span-2 md:h-[325px] md:rounded-[14px]">
            <Image
              src={soadConfGalleryImages[0].src}
              alt={soadConfGalleryImages[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Second Large Image */}
          <div className="relative h-[220px] overflow-hidden rounded-[12px] sm:h-[280px] md:col-span-2 md:h-[325px] md:rounded-[14px]">
            <Image
              src={soadConfGalleryImages[1].src}
              alt={soadConfGalleryImages[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bottom Images */}
          {soadConfGalleryImages.slice(2).map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-[180px] overflow-hidden rounded-[12px] sm:h-[200px] md:col-span-1 md:h-[205px] md:rounded-[14px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusVenueGallery;