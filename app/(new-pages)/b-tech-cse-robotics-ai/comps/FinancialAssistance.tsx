import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

const banks = [
  "/demo/kuhoo.png",
  "/demo/icici.png",
  "/demo/axis.png",
  "/demo/propelled.png",
  "/demo/grayquest.png",
  "/demo/idfc.png",
];

const FinancialAssistance = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-[#001732]">
          <h4 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight mb-5">
            Financial Assistance
          </h4>

          <p className="text-base md:text-lg leading-7">
            K.R. Mangalam University has collaborated with leading banks to
            offer convenient Education Loan options, making it easier for
            students to finance their academic aspirations.
          </p>

          <ul className="mt-6 space-y-4 text-sm md:text-base">
            {[
              "Quick & Instant Disbursal",
              "Includes tuition fees, books cost, hostel fees, and airfare",
              "Pan India loan availability",
              "Concessional rate of interest",
              "Speedy disposal of loan applications",
              "Up to 100% loan with a lower interest rate and zero processing fees",
              "Repayment tenure ranging from 5–15 years",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ChevronRightIcon
                  size={20}
                  className="mt-1 flex-shrink-0 text-[#001732]"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Logos */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {banks.map((logo) => (
              <div
                key={logo}
                className="bg-white rounded-[10px] border border-[#E6E6E6] p-6 md:p-8 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  width={180}
                  height={50}
                  alt=""
                  className="w-28 sm:w-32 md:w-36 lg:w-[180px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAssistance;