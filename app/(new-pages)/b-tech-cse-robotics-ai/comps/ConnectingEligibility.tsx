import { Calendar, IndianRupee } from "lucide-react";
import Image from "next/image";

const ConnectingEligibility = () => {
  return (
    <section className="bg-[#E8EEF4] py-20">
      <div className="max-w-[1126px] mx-auto w-full flex items-start gap-7">
        <div className="w-2/5">
          <div className="flex space-x-3.5">
            <div className="px-5 py-8  bg-white rounded-[10px] w-2/5 flex justify-center items-start gap-5">
              <div>
                <Calendar />
              </div>
              <div className="text-sm">
                <h6 className="font-bold">Duration</h6>
                <span>4 Years</span>
              </div>
            </div>
            <div className="px-5 py-8 bg-white rounded-[10px] w-3/5 flex gap-5">
              <div>
                <IndianRupee />
              </div>
              <div className="text-sm">
                <h6 className="font-bold">Programme Fee / Year</h6>
                <span>Rs. 2,70,000</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            <strong>Eligibility</strong>: 50% marks in 10+2 examination with
            Physics & Maths 3-Year Lateral Entry option also available for
            eligible students
          </p>
        </div>
        <div className="w-3/5">
         <div className="flex gap-2.5 items-stretch justify-between">
                <div className="bg-white rounded-[10px] py-5 px-6 flex items-center justify-center border border-[#A1B9C4]">
                    <Image src="/demo/gm.png" width={66} height={69} alt="" className="" />
                </div>
                <div className="bg-white rounded-[10px] p-5 flex items-center justify-center border border-[#A1B9C4]">
                    <Image src="/demo/toshiba.png" width={100} height={19} alt="" className="" />
                </div>
                <div className="bg-white rounded-[10px] p-5 flex items-center justify-center border border-[#A1B9C4]">
                    <Image src="/demo/mahindra.png" width={79} height={47} alt="" className="" />
                </div>
                <div className="bg-white rounded-[10px] p-5 flex items-center justify-center border border-[#A1B9C4]">
                    <Image src="/demo/wipro.png" width={84} height={31} alt="" className="" />
                </div>
                <div className="bg-white rounded-[10px] p-5 flex items-center justify-center border border-[#A1B9C4]">
                    <Image src="/demo/systique.png" width={54} height={68} alt="" className="" />
                </div>
            </div>
          <div className="flex items-center gap-4 mt-3.5">
           
            <div className="w-full h-px bg-[#d1d6dc]"></div>

            <h2 className="text-sm font-semibold text-[#0b2343] whitespace-nowrap">
              Connecting Talent to Dream Careers
            </h2>

            <div className="w-full h-px bg-[#d1d6dc]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectingEligibility;
