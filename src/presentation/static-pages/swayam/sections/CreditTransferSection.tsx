import React from "react";
import Image from "next/image";

interface PolicyRow {
  duration: string;
  credit: string;
}

const policyData: PolicyRow[] = [
  { duration: "4 Weeks", credit: "1 Credit" },
  { duration: "6 Weeks", credit: "2 Credits" },
  { duration: "8 Weeks", credit: "3 Credits" },
  { duration: "12 Weeks", credit: "4 Credits" },
];

export const CreditTransferSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F1F1F1] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-[1260px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left/Center Column: Title, Table & Note */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[620px]">
              {/* Title directly above the Table */}
              <h2 className="text-slate-900 text-3xl sm:text-4xl xl:text-[42px] font-bold text-center mb-6 w-full tracking-tight">
                Credit Transfer Policy
              </h2>

              {/* Table Container */}
              <div className="w-full overflow-hidden">
                {/* Header with White Vertical Divider Line */}
                <div className="grid grid-cols-2 bg-white text-center font-semibold text-[#000000] text-[16px]">
                  <div className="py-4 px-6 border-r border-gray-200">
                    Course Duration
                  </div>
                  <div className="py-4 px-6">University Credit</div>
                </div>

                {/* Table Rows Mapped Dynamically from policyData Array */}
                {policyData.map((row, index) => {
                  const isLast = index === policyData.length - 1;
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-2 text-center text-[#000000] font-semibold text-[16px]"
                    >
                      <div
                        className={`bg-[#CDAB5A] py-3.5 px-4 border-r border-white/40 ${
                          !isLast ? "border-b" : ""
                        }`}
                      >
                        {row.duration}
                      </div>
                      <div
                        className={`bg-[#CD975A] py-3.5 px-4 ${
                          !isLast ? "border-b border-white/40" : ""
                        }`}
                      >
                        {row.credit}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note Text below Table */}
              <p className="text-slate-900 text-sm sm:text-base mt-6 text-left leading-relaxed">
                <span className="font-bold">Note:</span> Credit transfer shall
                be governed by the University Academic Council approval and
                applicable UGC Regulations.
              </p>
            </div>
          </div>

          {/* Right Column: Lightbulb Graphic balb.png */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="relative w-[332px] max-w-full h-[483px] shrink-0">
              <Image
                src="/swayam/balb.png"
                alt="Credit Transfer Lightbulb Graphic"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditTransferSection;
