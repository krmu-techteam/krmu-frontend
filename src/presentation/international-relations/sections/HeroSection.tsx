import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-cover bg-no-repeat font-poppins bg-center relative">
      <div className="w-full pt-[124px]">
        <Image
          src={"/images/international-relations/hero.jpg"}
          alt="hero image"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="max-w-[1530px] px-6 md:px-8 xl:px-16 mx-auto w-full py-8 md:py-12 lg:py-20">
        <h1 className="text-3xl text-center xl:text-left md:text-5xl xl:text-[55px] font-serif font-bold text-white mb-6">
          International Relations
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 items-start">
          {/* Video Section */}
          <div className="w-full lg:w-[55%] interRelYTIframe  overflow-hidden">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/uEQ6iDhLv_Q?si=DY_X1ggkXiYdjjYr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[300px] md:h-[370px] !object-contain"
            ></iframe>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[45%] text-gray-200 text-[16px] leading-relaxed space-y-6">
            <p className="text-justify">
              The International Relations (IR) at K.R. Mangalam University
              serves as the pivotal hub for fostering collaborative initiatives
              between K.R. Mangalam University and its counterparts worldwide.
              Our mandate encompasses the establishment of robust partnerships,
              facilitation of dynamic student and faculty exchanges, fostering
              global engagement, promoting cross-cultural initiatives,
              ultimately enriching the educational experience and enhancing the
              global reputation.
            </p>
            <p className="text-justify">
              With utmost dedication to ensuring a seamless transition for
              international students and visiting faculty members, the IR team
              extends comprehensive administrative support. Our commitment to
              excellence is reflected in our role as a one-stop service center,
              providing invaluable assistance in visa affairs, insurance,
              housing and academic matters.
            </p>
          </div>
        </div>

        {/* Mission Quote Block */}
        <div className="mt-10 xl:mt-12 relative pl-6 lg:pl-8 py-2 min-h-[200px] flex items-center">
          {/* Custom Gradient Border */}
          <div className="absolute left-0 top-0 md:top-1/2 md:-translate-y-1/2 h-full md:h-[170px] w-[6px] rounded-[10px] bg-gradient-to-b from-[#14285D] to-[#5B0000]"></div>
          <p className="text-gray-100 text-[16px] md:text-lg xl:text-[26px] leading-[23px] md:leading-[26px] xl:leading-[36px] font-light text-left md:text-justify">
            Our mission is the unwavering dedication of the IR team to deliver
            unparalleled services to support both educators and students. We
            strive to create an inclusive and supportive environment, promoting
            global collaboration and fostering a rich tapestry of academic and
            cultural exchanges.
          </p>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default HeroSection;
