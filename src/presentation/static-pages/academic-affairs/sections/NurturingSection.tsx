import { ChevronRightCircle } from "lucide-react";
import Image from "next/image";

const NurturingSuccessSection = () => {
  return (
    <section className="relative pb-12 md:pb-12 bg-transparent">
      <div className="max-w-[1530px] mx-auto w-full relative mt-12 md:mt-20 px-6 md:px-8 xl:px-16">
        {/* The Card Background and Overflow Hidden Layer */}
        <div
          className="w-full min-h-[365px] rounded-[8px] relative overflow-hidden flex items-center"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, rgba(84, 0, 0, 0.5) 100%)",
          }}
        >
          {/* Rainbow Image inside card to be clipped by border-radius */}
          <div className="absolute right-[-10%] md:right-0 lg:right-[4%] bottom-[-15%] md:bottom-[-20%] w-[300px] md:w-[400px] lg:w-[450px] aspect-square pointer-events-none opacity-90 z-0">
            <Image
              src="/images/academic-affairs/academic-policies/rainbow.png"
              alt=""
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Left Text Content */}
          <div className="w-full lg:w-2/3 p-8 md:p-12 xl:p-16 text-white z-10 font-poppins relative">
            <h3 className="heading-primary !text-[40px] mb-6 !text-left">
              Nurturing Success Beyond the Classroom
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-300 mb-8 leading-[1.7] max-w-2xl">
              We provide a plethora of resources and support systems to aid our
              students’ academic and personal growth, including:
            </p>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <ChevronRightCircle
                  size={24}
                  className="text-white shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-gray-300 text-[15px] md:text-[16px]">
                  Academic planning and career counselling services.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <ChevronRightCircle
                  size={24}
                  className="text-white shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-gray-300 text-[15px] md:text-[16px]">
                  Tutoring, mentoring, and psychological counselling services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Girl Image overlapping at the top right, outside the overflow-hidden layer */}
        <div className="absolute right-0 lg:right-[9.2%] bottom-0 w-[220px] md:w-[320px] lg:w-[380px] h-[130%] pointer-events-none z-20">
          <Image
            src="/images/academic-affairs/academic-policies/girl.png"
            alt="Student"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default NurturingSuccessSection;
