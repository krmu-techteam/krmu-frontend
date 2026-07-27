import { Calendar, IndianRupee } from "lucide-react";
import Image from "next/image";

const ConnectingEligibility = () => {
  return (
    <section className="bg-[#E8EEF4] py-12 lg:py-20 px-4 md:px-6">
      <div className="max-w-[1126px] mx-auto flex flex-col xl:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full xl:w-2/5">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Duration */}
            <div className="bg-white rounded-[10px] p-5 lg:p-7 flex items-center gap-4">
              <Calendar className="shrink-0" />

              <div className="text-sm">
                <h6 className="font-bold">Duration</h6>
                <span>4 Years</span>
              </div>
            </div>

            {/* Fee */}
            <div className="bg-white rounded-[10px] p-5 lg:p-7 flex items-center gap-4">
              <IndianRupee className="shrink-0" />

              <div className="text-sm">
                <h6 className="font-bold">Programme Fee / Year</h6>
                <span>Rs. 2,70,000</span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-center xl:text-left leading-6">
            <strong>Eligibility:</strong> 50% marks in 10+2 examination with
            Physics & Maths. 3-Year Lateral Entry option also available for
            eligible students.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full xl:w-3/5">
          <div className="flex flex-wrap justify-center xl:justify-between gap-3">
            <div className="bg-white rounded-[10px] border border-[#A1B9C4] h-24 w-[120px] flex items-center justify-center">
              <Image
                src="/demo/gm.png"
                width={66}
                height={69}
                alt="GM"
                className="object-contain"
              />
            </div>

            <div className="bg-white rounded-[10px] border border-[#A1B9C4] h-24 w-[120px] flex items-center justify-center">
              <Image
                src="/demo/toshiba.png"
                width={100}
                height={19}
                alt="Toshiba"
                className="object-contain"
              />
            </div>

            <div className="bg-white rounded-[10px] border border-[#A1B9C4] h-24 w-[120px] flex items-center justify-center">
              <Image
                src="/demo/mahindra.png"
                width={79}
                height={47}
                alt="Mahindra"
                className="object-contain"
              />
            </div>

            <div className="bg-white rounded-[10px] border border-[#A1B9C4] h-24 w-[120px] flex items-center justify-center">
              <Image
                src="/demo/wipro.png"
                width={84}
                height={31}
                alt="Wipro"
                className="object-contain"
              />
            </div>

            <div className="bg-white rounded-[10px] border border-[#A1B9C4] h-24 w-[120px] flex items-center justify-center">
              <Image
                src="/demo/systique.png"
                width={54}
                height={68}
                alt="Systique"
                className="object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex-1 h-px bg-[#d1d6dc]" />

            <h2 className="text-xs sm:text-sm font-semibold text-[#0b2343] whitespace-nowrap text-center">
              Connecting Talent to Dream Careers
            </h2>

            <div className="flex-1 h-px bg-[#d1d6dc]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectingEligibility;