"use client";

import React from "react";
import Image from "next/image";

const HostelWarden: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      {/* Outer Dark Container (Figma Spec: bg-[#0B1727], rounded-[23px]) */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#000000]/30 rounded-[23px] p-6 sm:p-10 lg:p-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Connect with Warden */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[34px] font-bold text-[#E7C268] mb-4 tracking-tight">
              Connect with the Warden
            </h3>
            <p className="font-poppins text-white/80 text-sm sm:text-[18px] mb-8 w-full">
              The super friendly and responsible wardens at our hostels ensure
              that decorum is maintained inside the hostel premises. Moreover,
              the wardens also plan and host recreational activities and events
              to keep the entertainment going and help your child make the most
              out of their hostel life.
            </p>

            {/* Warden Cards List */}
            <div className="space-y-5">
              {/* Chief Warden */}
              <div className="flex items-center gap-5 p-2 rounded-xl transition-all">
                <div className="w-[76px] h-[76px] sm:w-[90px] sm:h-[90px] rounded-full border-2 border-dashed border-white flex items-center justify-center p-[5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFF6C1] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/hostel/chief-warden.png"
                      alt="Chief Warden"
                      width={46}
                      height={46}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-[22px] font-bold text-[#EEEEEE] mb-1">
                    Chief Warden
                  </h4>
                  <p className="font-poppins text-xs font-light sm:text-[18px] text-white/80">
                    <span className="text-white">Email:</span>{" "}
                    chief.warden@krmangalam.edu.in
                  </p>
                  <p className="font-poppins text-xs font-light sm:text-sm text-white/80">
                    <span className="text-white">Contact No.:</span> 9599812159
                  </p>
                </div>
              </div>

              {/* Warden Boys */}
              <div className="flex items-center gap-5 p-2 rounded-xl transition-all">
                <div className="w-[76px] h-[76px] sm:w-[90px] sm:h-[90px] rounded-full border-2 border-dashed border-[#A7D6FF] flex items-center justify-center p-[5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-[#C1E6FF] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/hostel/warden-boys.png"
                      alt="Warden Boys"
                      width={46}
                      height={46}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-[22px] font-bold text-white mb-1">
                    Warden Boys
                  </h4>
                  <p className="font-poppins text-xs sm:text-[18px] font-light text-white/80">
                    <span className="text-white">Email:</span>{" "}
                    warden.boys@krmangalam.edu.in
                  </p>
                  <p className="font-poppins text-xs sm:text-[18px] font-light text-white/80">
                    <span className="text-white">Contact No.:</span> 8800697005
                  </p>
                </div>
              </div>

              {/* Warden Girls */}
              <div className="flex items-center gap-5 p-2 rounded-xl transition-all">
                <div className="w-[76px] h-[76px] sm:w-[90px] sm:h-[90px] rounded-full border-2 border-dashed border-[#F472B6] flex items-center justify-center p-[5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFDDF6] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/hostel/warden-girls.png"
                      alt="Warden Girls"
                      width={46}
                      height={46}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-[22px] font-bold text-white mb-1">
                    Warden Girls
                  </h4>
                  <p className="font-poppins text-xs sm:text-[18px] font-light text-white/80">
                    <span className="text-white">Email:</span>{" "}
                    warden.girls@krmangalam.edu.in
                  </p>
                  <p className="font-poppins text-xs sm:text-[18px] font-light text-white/80">
                    <span className="text-white">Contact No.:</span> 8800697006
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hostel Fees Card with Background Image */}
          <div className="lg:col-span-4 relative w-full h-[420px] sm:h-[480px] lg:h-[400px] rounded-[10px] overflow-hidden group">
            {/* Background Image */}
            <Image
              src="/images/hostel/uni-hostel.jpg"
              alt="KRMU Hostel Building"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Card Title */}
            <div className="absolute top-6 left-6 z-10">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white/80 tracking-tight drop-shadow-md">
                Hostel Fees
              </h3>
            </div>

            {/* Floating Bottom White Box (Figma Specs: bg-[#FFFFFFD9], rounded-[10px]) */}
            <div className="absolute bottom-5 left-5 right-5 z-10 bg-white/85  rounded-[10px] p-4">
              <div className="flex items-center justify-between font-poppins font-bold text-gray-900 text-sm sm:text-[16px]  pb-2 mb-2">
                <span>Description</span>
                <span>Amount</span>
              </div>
              <div className="space-y-2 font-poppins text-xs sm:text-[12px] text-gray-800 font-medium">
                <div className="flex items-center justify-between">
                  <span>Hostel Fee (to be collected upfront)</span>
                  <span className="font-bold text-gray-900 shrink-0 ml-2">
                    Rs. 1,72,000/-
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hostel Security Deposit (Refundable)</span>
                  <span className="font-bold text-gray-900 shrink-0 ml-2">
                    Rs. 20,000/-
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelWarden;
