import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";

const ActivitiesSection = () => {
  const activities = [
    {
      image: "/inter-relation/activities/image-1.png",
      desc: "A two-week Global Immersion Programme in collaboration with the University of East Anglia (UEA), UK, conducted in London and Norwich, offered students enriching academic, experiential, and cultural exposure. The programme highlights the University’s commitment to international collaboration and nurturing globally competent graduates.",
    },
    {
      image:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/gemini_1_9de2dc72c2.webp",
      desc: "Students Visited Madame Tussauds and the London Eye, offering immersive experiences in the heart of London",
    },
    {
      image:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Gemini_Generated_Image_sdpyagsdpyagsdpy_189da9ee35.png",
      desc: "Students explored charming Bath with its Georgian architecture and Roman baths",
    },
    {
      image: "/inter-relation/activities/image-4.png",
      desc: "Professor Dr. Sayfullah facilitated discussions on marketing and brand management, simplifying complex concepts for students",
    },
    {
      image:
        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/gemini_2_88272e6ebd.webp",
      desc: "Students of Summer School programmes, received certificates on final day",
    },
  ];

  return (
    <section className="relative py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <h2 className="text-4xl md:text-5xl lg:text-[44px] text-center text-white font-serif font-bold mb-6">
          Activities
        </h2>
        <p className="text-center mb-6 md:mb-10 xl:mb-16 font-poppins text-white/90 max-w-4xl mx-auto text-[16px] font-light">
          K.R. Mangalam University takes initiatives to organized regular
          activities for students so that they can engage themselves and develop
          new skills.
        </p>

        <div className="w-full relative px-0 xl:px-8">
          <Carousel
            options={{ align: "start", loop: true }}
            slideClassName="basis-full md:basis-1/2 pl-4 xl:pl-11"
            containerClassName="-ml-4 xl:-ml-11"
            showDots={false}
            prevArrowClassName="!rounded-[2px] !bg-[#0161B0] !border-none !w-8 !h-8 md:!w-10 !h-10 !left-0 md:!-left-4 !top-[40%] hover:!bg-[#0055aa] !opacity-100"
            nextArrowClassName="!rounded-[2px] !bg-[#0161B0] !border-none !w-8 !h-8 md:!w-10 !h-10 !right-0 md:!-right-4 !top-[40%] hover:!bg-[#0055aa] !opacity-100"
          >
            {activities.map((item, index) => (
              <div key={index} className="flex flex-col h-full bg-[#061623]">
                <div className="w-full relative h-[250px] md:h-[350px] xl:h-[400px]">
                  <Image
                    src={item.image}
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-[16px] text-gray-200 leading-relaxed font-poppins">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ActivitiesSection;
