import Image from "next/image";

const CourseProminentRecruiter = () => {
  return (
    <section className="bg-gradient-recruiters py-12">
      <div className="w-full">
        <div className="max-w-[1296px] mx-auto w-full text-center">
            <h3 className="font-bold text-4xl">Our Prominent <span className="highlight-text">Recruiters</span></h3>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 my-10">
            {/* duplicate list for seamless loop */}
            {[
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/accenture_f525e0d27f.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/apple_9d374ca56f.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/amazon_d5fbce4cb3.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/infosys_5a0e62fdaf.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/tcs_logo_465987174d.webp",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/icici_d9d60e2828.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/deliotte_061b392cfa.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/accenture_f525e0d27f.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/apple_9d374ca56f.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/amazon_d5fbce4cb3.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/infosys_5a0e62fdaf.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/tcs_logo_465987174d.webp",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/icici_d9d60e2828.svg",
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/deliotte_061b392cfa.svg"
            ].map((rec, i) => (
              <div
                key={i}
                className="prominentrecruitShadow flex items-center justify-center min-w-[200px] bg-white"
              >
                <Image src={rec} width={170} height={35} alt="recruiter logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProminentRecruiter;
