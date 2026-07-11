import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhdTestimonialCards = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2">
          <div>
            <div
              className="p-5 rounded-[20px] bg-white border-t-8 phdtestcard"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Image
                src="/wp-content/landingpage/phd-2026/star.svg"
                width={180}
                height={32}
                alt=""
              />
              <p className="my-5 italic">
                “K.R. Mangalam University provided me with a strong research
                foundation and mentorship in the emerging field of econophysics.
                The dedication, innovative approach, and academic support of the
                faculty played a pivotal role in my successful PhD journey and
                subsequent growth in publications and career advancement. I
                sincerely credit KRMU for shaping my academic path and enabling
                me to reach the highest levels of professional achievement.”
              </p>
              <div className="flex gap-5 items-center">
                <div className="border-2 border-[#ff1515] rounded-full">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/landingpage/phd/testimonial/sushil.png"
                      width={80}
                      height={80}
                      alt=""
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-semibold">
                  <h4>Dr. Sushil Kumar </h4>
                  {/* <h5>B.A. (Hons/Hons with Research) Economics 4.8</h5> */}
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2">
          <div>
            <div
              className="p-5 rounded-[20px] bg-white border-t-8 phdtestcard"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Image
                src="/wp-content/landingpage/phd-2026/star.svg"
                width={180}
                height={32}
                alt=""
              />
              <p className="my-5 italic">
                “My academic journey began at K.R. Mangalam University, where
                the strong foundation, supportive faculty, and enriching
                research environment shaped my Ph.D. experience. Even years
                after graduating, I continue to value the guidance and
                opportunities I received at KRMU, which paved the way for my
                current professional role at NIFT Panchkula. I am deeply
                grateful to K.R. Mangalam University for its lasting impact on
                my career and personal growth.”
              </p>
              <div className="flex gap-5 items-center">
                <div className="border-2 border-[#ff1515] rounded-full">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/landingpage/phd/testimonial/shikha.png"
                      width={80}
                      height={80}
                      alt=""
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-semibold">
                  <h4>Dr. Shikha Sharma</h4>
                  {/* <h5>B.A. (Hons/Hons with Research) Economics 4.8</h5> */}
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2">
          <div>
            <div
              className="p-5 rounded-[20px] bg-white border-t-8 phdtestcard"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Image
                src="/wp-content/landingpage/phd-2026/star.svg"
                width={180}
                height={32}
                alt=""
              />
              <p className="my-5 italic">
                “My journey at K.R. Mangalam University has been transformative
                and empowering. The strong academic foundation, research
                support, and encouragement I received at KRMU equipped me to
                grow as a dedicated researcher and successfully transition into
                post-doctoral work. I am grateful for the mentorship and vibrant
                scholarly environment at KRMU, which played a key role in
                shaping my academic path and enabling me to pursue new frontiers
                in research with confidence and purpose.”
              </p>
              <div className="flex gap-5 items-center">
                <div className="border-2 border-[#ff1515] rounded-full">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/landingpage/phd/testimonial/unnatii.png"
                      width={80}
                      height={80}
                      alt=""
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-semibold">
                  <h4>Dr. Unnati</h4>
                  {/* <h5>B.A. (Hons/Hons with Research) Economics 4.8</h5> */}
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bottom-0 top-[111%] left-0 md:left-[40%]  rounded-full bg-[#D9D9D9] hover:bg-[#FF5757] text-white phdwhatbtn" />
      <CarouselNext className="bottom-0 top-[111%] right-0 md:right-[40%] rounded-full bg-[#D9D9D9] hover:bg-[#FF5757] text-white phdwhatbtn" />
    </Carousel>
  );
};

export default PhdTestimonialCards;
