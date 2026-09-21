import Image from "next/image";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

const LookingToSecure = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#001732_66.27%,#B08233_80%)] sm:bg-[linear-gradient(90deg,#001732_43.27%,#B08233_100%)] pt-8 lg:pt-10 overflow-hidden relative">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8">
        {/* Background Decorative Image */}
        <Image
          src="/demo/university.png"
          width={680}
          height={474}
          alt=""
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* Right Badge */}
        <Image
          src="/demo/no-1-university.png"
          width={32}
          height={425}
          alt=""
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2"
        />

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 pt-0 pb-10 lg:flex flex-col justify-between">
          <div>
            <span className="inline-block rounded-full bg-[#7a8490] px-3 py-1.5 text-xs sm:text-sm font-semibold text-black">
              Admissions 2026-27
            </span>

            <h4 className="mt-4 mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-semibold text-white leading-tight">
              Looking to secure your future with quality education?
            </h4>

            <span className="inline-block rounded-full bg-[#2fb7d7] px-4 py-2 text-xs sm:text-xs font-semibold text-black">
              Step into future of learning, growth and endless opportunities
            </span>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-2">
              {/* <button className="">
              Apply Today
            </button>

            <button className="">
              Download Brochure
            </button> */}
              <NpfPopup
                formId={`31c1452015d32698095f833b3e7eb9c5`}
                btnClass={`w-full sm:w-fit rounded-md bg-[#DE0000] px-6 py-3 text-sm font-bold uppercase text-white transition hover:bg-red-700 npfWidget-31c1452015d32698095f833b3e7eb9c5`}
                btnText="Apply Now"
                showIcon={false}
              />
              <CommonLeadPopup
                buttonText="Download Prospectus"
                buttonClassName="rounded-md bg-white px-6 py-3 text-sm font-bold uppercase text-[#012959] transition hover:bg-gray-100 w-full sm:w-fit"
                redirectUrl="https://www.krmangalam.edu.in/pdfs/programme-brochure/btech-cse-new.pdf"
                form_name="Download Prospectus"
              />
            </div>
          </div>
          <div className="mt-8">
            <Image
              src="/demo/admission-open.png"
              width={648}
              height={90}
              alt="Admission Open"
              className="mx-auto lg:mx-0 h-auto w-full max-w-[648px]"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center z-10">
          <Image
            src="/demo/admis-girl.png"
            width={420}
            height={522}
            alt="Admission"
            className="h-auto w-[240px] sm:w-[320px] md:w-[380px] lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LookingToSecure;
