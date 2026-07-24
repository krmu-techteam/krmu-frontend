import Image from "next/image";

const LookingToSecure = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#001732_43.27%,#B08233_100%)] pt-10 relative">
      <div className="max-w-7xl mx-auto w-full flex items-center relative">
        <Image src="/demo/university.png" width={680} height={474} alt="" className="absolute top-1/2 left-1/2 -translate-1/2" />
        <Image src="/demo/no-1-university.png" width={32} height={425} alt="" className="absolute top-1/2 right-0 -translate-y-1/2" />
        <div className="w-1/2">
          <span className="text-black font-semibold bg-[#D9D9D9] px-2 py-1.5 inline-block rounded-full">
            Admissions 2026-27
          </span>
          <h4 className="text-4xl font-semibold text-white mt-3 mb-5">
            Looking to secure your future with quality education?
          </h4>
          <span className="text-black font-semibold bg-[#2fb7d7] px-4 py-1.5 inline-block rounded-full">
            Step into future of learning, growth and endless opportunities
          </span>
          <div className="space-x-5 leading-8 font-semibold text-sm mt-7 pb-10">
            <button className="bg-[#DE0000] text-white rounded-[5px] px-5 py-1 uppercase">
              Apply Today
            </button>
            <button className="bg-white text-[#012959] rounded-[5px] px-5 py-1 uppercase">
              Download Brochure
            </button>
          </div>
          <Image
            src="/demo/admission-open.svg"
            width={648}
            height={90}
            alt="Admission Open"
          />
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/demo/admis-girl.png"
            width={420}
            height={522}
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default LookingToSecure;
