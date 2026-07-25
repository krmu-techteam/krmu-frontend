import Image from "next/image";

const LookingToSecure = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#001732_43.27%,#B08233_100%)] pt-10 overflow-hidden relative">
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8">

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
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 py-8 lg:py-0">
          <span className="inline-block rounded-full bg-[#D9D9D9] px-3 py-1.5 text-xs sm:text-sm font-semibold text-black">
            Admissions 2026-27
          </span>

          <h4 className="mt-4 mb-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Looking to secure your future with quality education?
          </h4>

          <span className="inline-block rounded-full bg-[#2fb7d7] px-4 py-2 text-xs sm:text-sm font-semibold text-black">
            Step into future of learning, growth and endless opportunities
          </span>

          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <button className="rounded-md bg-[#DE0000] px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-red-700">
              Apply Today
            </button>

            <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase text-[#012959] transition hover:bg-gray-100">
              Download Brochure
            </button>
          </div>

          <div className="mt-8">
            <Image
              src="/demo/admission-open.svg"
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
            className="h-auto w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LookingToSecure;