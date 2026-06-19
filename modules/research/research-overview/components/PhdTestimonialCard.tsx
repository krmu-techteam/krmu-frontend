import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  quote: string;
};

interface PhdTestimonialCardProps {
  testimonials: Testimonial[];
}

const PhdTestimonialCard = ({ testimonials }: PhdTestimonialCardProps) => {
  return (
    <Carousel
      options={{ align: "start", loop: true }}
      autoplay={false}
      showDots={false}
      showArrows={true}
      slideClassName="basis-full md:basis-1/2 px-3"
      prevArrowClassName="!bottom-0 !top-[111%] !left-0 md:!left-[40%] !translate-y-0 !bg-[#D9D9D9] hover:!bg-[#FF5757] !text-white rounded-full !w-10 !h-10 flex items-center justify-center"
      nextArrowClassName="!bottom-0 !top-[111%] !right-0 md:!right-[40%] !translate-y-0 !bg-[#D9D9D9] hover:!bg-[#FF5757] !text-white rounded-full !w-10 !h-10 flex items-center justify-center"
      className="w-full pb-16"
    >
      {testimonials &&
        testimonials.map((item) => (
          <div key={item.id} className="h-full">
            <div
              className="p-5 rounded-[20px] bg-white border-t-8 phdtestcard h-full flex flex-col justify-between"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <div>
                <Image
                  src="/wp-content/landingpage/phd-2026/star.svg"
                  width={180}
                  height={32}
                  alt="stars"
                />
                <p className="my-5 italic text-[15px] leading-relaxed text-gray-800">
                  “{item.quote}”
                </p>
              </div>
              <div className="flex gap-5 items-center mt-auto pt-4">
                <div className="border-2 border-[#ff1515] rounded-full shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    {item.image && (
                      <Image
                        src={item.image}
                        width={80}
                        height={80}
                        alt={item.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col font-semibold">
                  <h4 className="text-gray-900">{item.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default PhdTestimonialCard;
