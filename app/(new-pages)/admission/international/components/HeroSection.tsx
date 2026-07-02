import NoPaperFormsWidget from "@/app/(landing-page)/admission/CommonComponent2026/NoPaperFormsWidget";
import Image from "next/image";

type Props = {
  formId: string;
};
const HeroSection = ({ formId }: Props) => {
  return (
    <section className="bg-[#edece4] px-5 2xl:px-0 py-10 xl:py-0 relative">
      <div className="flex flex-col md:flex-row gap-10 max-w-[1427px] mx-auto">
        <div className="w-full md:w-1/2 xl:w-[70%] flex items-start left-container pt-[35px]">
          <div className="w-full xl:w-[55%] 2xl:w-3/5 col-1">
            <div>
              <h1 className="font-host text-5xl md:text-6xl xl:text-8xl font-extrabold mb-1 leading-none main-heading text-[#001732] mt-5">
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
                internationally recognised education in the heart of Gurugram,
                India's leading corporate and
                innovation hub.
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
          <div className="hidden xl:flex justify-center items-start w-[45%] 2xl:w-2/5 col-2">
            <div className=" text-center">
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
        <div className="w-full md:w-1/2  xl:w-[30%] bg-white outer-right-container flex items-center justify-center sm:pt-10 md:pt-0 xl:pt-5 2xl:pt-0">
          <div className="z-30 w-full pt-5 sm:pt-0 sm:p-4 md:p-5 bg-white right-container">
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
