import Image from "next/image";
import { WorldClassSection } from "../constant";

type Props = {
  data: WorldClassSection;
};

const WorldClass = ({ data }: Props) => {
  return (
    <section className="py-10 md:py-14 lg:py-16">
      <div className="mx-auto  px-4 text-center sm:px-6 lg:px-8">
        <h4 className="mb-4 font-poppins text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-[62px]">
          {data.heading}
        </h4>

        <p className="mx-auto max-w-6xl text-sm leading-7 text-gray-700 sm:text-base lg:text-lg xl:pb-16">
          K.R. Mangalam University offers a modern and student-centric campus
          designed to support effective learning and holistic development for
          its students. The university provides smart classrooms, a
          well-equipped central library with digital resources, computer and
          analytics labs, and seminar halls to enhance academic engagement.
          Additionally, the availability of dedicated spaces for innovation,
          entrepreneurship, and skill development creates an environment that
          encourages practical learning, collaboration, and professional growth.
        </p>
      </div>

      <div className="mt-8 xl:mt-0 overflow-hidden md:mt-10">
        <div className="gallery-scroll">
          {[...data.slides, ...data.slides].map((slide, index) => (
            <div
              key={index}
              className="
                relative
                w-full
              "
            >
              <Image
                src={slide.image}
                alt={slide.alt || ""}
                width={837}
                height={443}
                className="object-contain"
                // sizes="(max-width:640px) 85vw,
                //        (max-width:768px) 60vw,
                //        (max-width:1024px) 45vw,
                //        (max-width:1280px) 33vw,
                //        30vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldClass;
