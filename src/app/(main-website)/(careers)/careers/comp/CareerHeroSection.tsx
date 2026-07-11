import Image from "next/image";

const CareerHeroSection = () => {
  return (
    <section className="bg-[url(/careers/careerb-banner.webp)] bg-cover bg-center bg-no-repeat px-4 pb-10 md:pb-0">
      <div className="max-w-[1664px] mx-auto w-full pt-[120px] md:pt-[25%] md:pb-[5%]">
        <div className="md:w-3/5 text-white">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-5">
            We work together within a team environment of mutual respect,
            honesty and integrity
          </h3>
          <p className="mb-5">
            K.R. Mangalam University is committed to creating a future for the
            country’s young leaders, building upon research and innovation-based
            global academic institution striving to focus on bridging the
            knowledge gap between students and industry.
          </p>
        </div>
        <div className="md:w-2/5"></div>
      </div>
      <div className="max-w-[1664px] mx-auto w-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-semibold mb-5">Why work with us</h2>
          <p>
            We are always on the lookout for well-accomplished, empathetic and
            knowledgeable academicians equipped with tools to help an upcoming
            generation of scholars become successful both in personal and
            professional endeavors.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/careers/19.png"
            width={768}
            height={543}
            alt=""
            className="hidden md:block"
          />
          <div className="mt-10 flex flex-col gap-5 md:hidden">
            <div
              className="p-[15px] text-white rounded-[17px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%)",
                backdropFilter: "blur(13.410955429077148px)",
              }}
            >
              <p>Diverse and Supportive work environment</p>
            </div>
            <div
              className="p-[15px] text-white rounded-[17px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%)",
                backdropFilter: "blur(13.410955429077148px)",
              }}
            >
              <p>Modern Infrastructure and well-equipped classrooms</p>
            </div>
            <div
              className="p-[15px] text-white rounded-[17px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%)",
                backdropFilter: "blur(13.410955429077148px)",
              }}
            >
              <p>
                Academic freedom for the development of both academicians and
                scholar
              </p>
            </div>
            <div
              className="p-[15px] text-white rounded-[17px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%)",
                backdropFilter: "blur(13.410955429077148px)",
              }}
            >
              <p>World-class research opportunities</p>
            </div>
            <div
              className="p-[15px] text-white rounded-[17px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%)",
                backdropFilter: "blur(13.410955429077148px)",
              }}
            >
              <p>Transportation facility in any part of Gurugram/Delhi NCR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
