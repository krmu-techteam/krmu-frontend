import Image from "next/image";
import { soadConfGalleryImages } from "../constant";

const CampusVenueGallery = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-full max-w-7xl px-5">
        {/* Gallery Header */}
        <div className="mb-8 md:mb-10">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#b08233]">
            Gallery
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#1d1d1d] md:text-4xl">
            Campus &amp; Venue
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* First large image */}
          <div className="relative h-[260px] overflow-hidden rounded-[14px] md:col-span-2 md:h-[325px]">
            <Image
              src={soadConfGalleryImages[0].src}
              alt={soadConfGalleryImages[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Second large image */}
          <div className="relative h-[260px] overflow-hidden rounded-[14px] md:col-span-2 md:h-[325px]">
            <Image
              src={soadConfGalleryImages[1].src}
              alt={soadConfGalleryImages[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Bottom images */}
          {soadConfGalleryImages.slice(2).map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-[220px] overflow-hidden rounded-[14px] md:col-span-1 md:h-[205px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusVenueGallery;
