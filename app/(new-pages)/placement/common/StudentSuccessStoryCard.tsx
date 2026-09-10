import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface StudentSuccessStory {
  id: number;
  image: string;
  imageAlt?: string;
  category: string; 
  quote: string;
  name: string;
  batch: string;
  placementLink: string;
}

interface StudentSuccessStoryCardProps extends StudentSuccessStory {}

const StudentSuccessStoryCard = ({
  image,
  imageAlt = "",
  category,
  quote,
  name,
  batch,
  placementLink,
}: StudentSuccessStoryCardProps) => {
  return (
    <article className="flex flex-col md:flex-row gap-6 lg:gap-10">
      {/* Image */}
      <div className="w-full md:w-[45%] shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          width={499}
          height={481}
          className="w-full h-auto aspect-[499/481] object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[55%] font-poppins flex flex-col">
        <h5 className="text-[#7A1F2B] text-[10px] sm:text-xs tracking-[0.2em] mb-3 uppercase">
          {category}
        </h5>

        <p className="text-xl sm:text-2xl xl:text-3xl font-medium font-newsreader leading-[1.2]">
          “{quote}”
        </p>

        <hr className="my-5 sm:my-6 border-[#ccc]" />

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5">
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base">{name}</span>

            <span className="text-[9px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] mt-1">
              {batch}
            </span>
          </div>

          <Link
            href={placementLink}
            className="text-[#001836] underline inline-flex items-center gap-1 text-xs sm:text-sm w-fit whitespace-nowrap transition-transform duration-300 hover:translate-x-1"
          >
            View All Placements
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default StudentSuccessStoryCard;
