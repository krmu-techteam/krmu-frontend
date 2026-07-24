import Image from "next/image";
import Link from "next/link";

const Scholarship2026 = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto w-full bg-[#001732] rounded-[18px] p-10 flex relative">
        <Image src='/demo/scholarship.png' width={805} height={436} alt="" className="absolute bottom-0 right-0" />
        <div className="w-2/5">
          <h4 className="text-[42px] font-bold text-white">Scholarship 2026</h4>
          <p className="text-lg text-[#A2B5CA] mt-3 mb-8">
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
        <div className="w-3/5">
        
        </div>
      </div>
    </section>
  );
};

export default Scholarship2026;
