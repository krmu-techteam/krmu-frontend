import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactWithUs = () => {
  return (
    <section className="py-8 md:py-16 bg-[url(/programmes/footer-bg.svg)] bg-cover bg-center bg-no-repeat px-4 md:px-0">
      <div className="max-w-[1440px] mx-auto w-full">
        <h3 className="text-4xl lg:text-[40px] font-semibold mb-5 text-white text-center sm:text-left px-4 lg:px-0">
          Connect With Us
        </h3>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 px-4 lg:px-0">
          <div className="w-full lg:w-3/12">
            <Link
              href="tel:9311411717"
              className="bg-[#ffffff0d] backdrop-blur-[22px] p-2.5 border border-[#ffffff40] rounded-md flex items-center break-all"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#e31e24] flex items-center justify-center rounded-full">
                  <PhoneCall className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-2.5 flex flex-wrap items-center lg:gap-2.5 text-sm font-semibold text-white">
                <span className="font-semibold">Call Us:</span>
                <span className="font-normal">9311411717</span>
              </span>
            </Link>
          </div>
          <div className="w-full lg:w-4/12">
            <Link
              href="mailto:welcome@krmangalam.edu.in"
              className="bg-[#ffffff0d] backdrop-blur-[22px] p-2.5 border border-[#ffffff40] rounded-md flex items-center break-all"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#e31e24] flex items-center justify-center rounded-full">
                  <Mail className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-2.5 flex flex-wrap items-center lg:gap-2.5 text-sm font-semibold text-white break-all">
                <span className="font-semibold">Email Us:</span>
                <span className="font-normal tracking-wide leading-relaxed">welcome@krmangalam.edu.in</span>
              </span>
            </Link>
          </div>
          <div className="w-full lg:w-5/12">
            <Link
              href="https://maps.app.goo.gl/vaYSxzfRzMd1XvFs8"
              className="bg-[#ffffff0d] backdrop-blur-[22px] p-[4px] border border-[#ffffff40] rounded-md flex items-center"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#e31e24] flex items-center justify-center rounded-full">
                  <MapPin className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-2.5 flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="font-normal tracking-wide leading-relaxed">
                  <span className="font-semibold">Address:</span> K.R. Mangalam University, Sohna - Gurgaon Road,
                  Sohna, Sohna Rural, Gurugram, Haryana 122103
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;
