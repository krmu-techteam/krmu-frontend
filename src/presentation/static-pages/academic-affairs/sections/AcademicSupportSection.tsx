import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

const AcademicSupportSection = () => {
  return (
    <section className="pb-12 md:pb-20 bg-transparent">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        {/* Transparent Gradient Border Wrapper */}
        <div className="w-full relative rounded-[10px]">
          <div
            className="absolute inset-0 rounded-[10px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, #0161B0 0%, #E7C268 100%)",
              padding: "3px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          {/* Inner Content Area */}
          <div className="w-full h-full bg-transparent flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-12 lg:gap-8 relative z-10">
            {/* Left Content */}
            <div className="md:w-1/2 w-full flex flex-col justify-center">
              <h3 className="heading-primary !text-[36px] !font-medium mb-4 !text-left">
                We’re Here to Assist
              </h3>
              <p className="text-[15px] md:text-[16px] text-gray-300 font-poppins max-w-sm">
                For more information or assistance, reach out to the Academic
                Affairs office
              </p>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full flex flex-col justify-center items-start lg:items-center">
              <ul className="flex flex-col gap-6 text-[15px] md:text-[16px] text-gray-300 font-poppins">
                <li className="flex items-center gap-4">
                  <Mail
                    size={24}
                    className="text-white shrink-0"
                    strokeWidth={1.5}
                  />
                  <Link
                    href="mailto:dean.acad@krmangalam.edu.in"
                    className="hover:text-white transition-colors break-all md:break-normal"
                  >
                    dean.acad@krmangalam.edu.in
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <Mail
                    size={24}
                    className="text-white shrink-0"
                    strokeWidth={1.5}
                  />
                  <Link
                    href="mailto:acad.affairs@krmangalam.edu.in"
                    className="hover:text-white transition-colors break-all md:break-normal"
                  >
                    acad.affairs@krmangalam.edu.in
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <Mail
                    size={24}
                    className="text-white shrink-0"
                    strokeWidth={1.5}
                  />
                  <Link
                    href="mailto:associatedean.acad@krmangalam.edu.in"
                    className="hover:text-white transition-colors break-all md:break-normal"
                  >
                    associatedean.acad@krmangalam.edu.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSupportSection;
