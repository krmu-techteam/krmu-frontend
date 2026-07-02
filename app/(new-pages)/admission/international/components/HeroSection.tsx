import NoPaperFormsWidget from "@/app/(landing-page)/admission/CommonComponent2026/NoPaperFormsWidget";
import Image from "next/image";

type Props = {
  formId: string;
};
const HeroSection = ({ formId }: Props) => {
  return (
    <section className="bg-[#edece4] relative px-5 2xl:px-0 py-10 xl:py-0 2xl:pt-10">
      <div
        className="bg-white absolute right-0 top-0 max-w-[420px] 2xl:max-w-[600px] w-full h-[800px] 2xl:h-[900px] 2xl:pr-10 form-white-container hidden xl:flex items-center justify-center"
        id="apply-section"
      >
        <div className="relative z-30 w-full">
          <div className="text-center">
            <h3 className="text-center font-poppins font-bold text-xl">
              <span className="text-[#001732] px-5 inline-block text-[22px]">
                Apply for International <br /> Admission Here
              </span>{" "}
              {/* <br /> at K.R. Mangalam University Today */}
            </h3>
          </div>
          <NoPaperFormsWidget widgetId={formId} height="600px" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1427px] mx-auto">
        <div className="w-full md:w-1/2 xl:w-9/12 flex items-start left-container">
          <div className="w-full xl:w-[55%] 2xl:w-3/5 col-1">
            <div className="relative xl:-top-16">
              <h1 className="font-host text-5xl md:text-6xl xl:text-8xl font-extrabold mb-1 leading-none main-heading text-[#001732]">
                International Admissions
              </h1>
              <h4 className="text-2xl lg:text-3xl text-[#E11F23] font-bold font-host main-heading-2">
                Open For The Session 2026–27
              </h4>
              <h5 className="text-[#001732] italic text-4xl lg:text-5xl mb-5 leading-tight font-fraunces mt-5">
                Study in India. <br className="hidden md:block" /> Lead the
                World.
              </h5>
              <p className="font-inter text-xl 2xl:text-[22px]">
                Join one of India's fastest-growing{" "}
                <strong>NAAC ‘A’ accredited</strong> universities and experience
                internationally recognised <br className="hidden xl:block" />{" "}
                education in the heart of Gurugram, India's leading{" "}
                <br className="hidden xl:block" /> corporate and innovation hub.
              </p>
            </div>
            <div className="xl:hidden mt-5">
              <span className="text-4xl xl:text-6xl text-[#001732] font-bold font-fraunces heading-1">
                Up to
              </span>
              <p className="text-6xl xl:text-8xl leading-none text-[#E11F23] font-bold font-fraunces heading-2">
                60<span className="font-light">%</span>
              </p>
              <span className="text-3xl xl:text-[40px] text-[#001732] font-bold font-fraunces heading-3">
                Scholarship
              </span>
            </div>
          </div>
          <div className="hidden xl:flex items-start w-[45%] 2xl:w-2/5 col-2">
            <div className="-mt-30 2xl:-mt-[60px] text-center middle-container">
              <span className="text-6xl text-[#001732] font-bold font-fraunces heading-1">
                Up to
              </span>
              <p className="text-[111px] leading-none text-[#E11F23] font-bold font-fraunces heading-2">
                60<span className="font-light">%</span>
              </p>
              <span className="text-[40px] text-[#001732] font-bold font-fraunces heading-3">
                Scholarship
              </span>
              {/* <p
                className="
   bg-[linear-gradient(90deg,_#CAC492_0%,_#CB7059_43%,_#CB000D_100%)]
    bg-clip-text
    text-transparent
    [-webkit-background-clip:text]
    [-webkit-text-fill-color:transparent]
    font-bold
    text-7xl
    2xl:text-[90px]
    leading-none
    font-big-shoulder
    heading-4
    opacity-[0.1]
  "
              >
                Scholarship
              </p> */}
              <div className="block">
                <Image
                  src="/international-admission/Scholarship.png"
                  width={384}
                  height={65}
                  alt=""
                  className="w-[320px] 2xl:w-[458px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[750px] md:h-[900px] lg:h-[800px] xl:h-[800px] md:w-1/2  xl:w-3/12  bg-white xl:bg-transparent relative outer-right-container flex items-center justify-center rounded-2xl sm:pt-10 md:pt-0">
          <div className="relative z-30 w-full pt-5 sm:pt-0 sm:p-4 md:p-5 xl:hidden">
            <div className="text-center">
              <h3 className="text-center font-poppins font-bold text-sm sm:text-base md:text-lg xl:text-2xl">
                <span className="text-black px-5 inline-block text-[22px]">
                  Apply for International Admission Here
                </span>{" "}
                {/* <br /> at K.R. Mangalam University Today */}
              </h3>
            </div>
            <NoPaperFormsWidget widgetId={formId} height="650px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
