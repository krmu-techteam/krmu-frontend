import ProgramHighlightSlider from "../global-comp/ProgramHighlightSlider";
import { StrapiMedia } from "@/lib/types/common";

import { Button } from "@/lib/types/home";
import Link from "next/link";

type Props = {
  heading: string;
  slideImages: StrapiMedia[];
  btn: Button;
};

const PlacementHighlight = ({ heading, slideImages, btn }: Props) => {
  return (
    <>
      <section className="py-[30px] mt-5 px-4">
        <div className="max-w-[1664px] mx-auto w-full mb-7">
          <h2 className="text-[26px] md:text-5xl text-center font-semibold md:leading-[1.5] mb-5">
            {heading}
          </h2>
          {/* <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {slideImages.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/4">
                  <div>
                    <Image
                      src={`${STRAPI_URL}${image?.url}`}
                      width={390}
                      height={390}
                      alt={image?.alternativeText || "programme highlight"}
                      className="w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-[#000000b2] text-white rounded-none" />
            <CarouselNext className="right-0 bg-[#000000b2] text-white rounded-none" />
          </Carousel> */}
          <div className="">
            <ProgramHighlightSlider slideImages={slideImages} />
          </div>
          <div className="text-center mt-5">
            {btn && (
              <Link
                href={btn?.buttonlink}
                className={`py-[11px] px-[23px] text-sm text-white bg-[#e20910] hover:bg-[#034272] rounded-sm font-medium inline-block ${
                  btn?.buttonclass || ""
                }`}
                target="_blank" rel="noopener noreferrer"
              >
                {btn?.buttontext}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementHighlight;
