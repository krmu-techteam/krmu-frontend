import Image from "next/image";
import Link from "next/link";

const Scholarship2026 = () => {
  return (
    <section className="py-5 md:py-20 px-5">
      <div className="max-w-7xl mx-auto w-full bg-[#001732] rounded-[18px] px-5 pt-5 pb-0 lg:pt-10 lg:px-10 lg:pb-10 flex flex-col lg:flex-row relative">
        <Image src='/demo/scholarship.png' width={805} height={436} alt="" className="absolute bottom-0 right-0 max-w-[650px]  xl:max-w-[805px] hidden lg:block" />
        <div className="w-full lg:w-2/5 pb-10">
          <h4 className="text-3xl sm:text-[42px] font-bold text-white">Scholarship 2026</h4>
          <p className="sm:text-lg text-[#A2B5CA] mt-3 mb-8">
            We offer up to 100% scholarships for academic toppers, sports
            achievers, and students across multiple categories, ensuring that
            ambition, hard work, and potential always find their way forward.
          </p>
          <Link
            href="#"
            className="text-black font-bold bg-white px-5 py-2 rounded-[10px]"
          >
            Explore
          </Link>
        </div>
        <div className="w-full lg:w-3/5">
         <Image src='/demo/scholarship.png' width={805} height={436} alt="" className="lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Scholarship2026;
