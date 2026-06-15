import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactWithUSection = () => {
  return (
    <section className="relative z-10 py-8 md:py-10 lg:py-16 xl:py-20 px-6 md:px-8 lg:px-11 xl:px-16 overflow-hidden">
      {/* Background overlay for texture */}
      <div
        className="absolute inset-0 bg-[url('/programmes/footer-bg.svg')] bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
      />
      
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-5 lg:mb-10 text-center lg:text-left font-serif">
          Connect With Us
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Call Us */}
          <div className="lg:col-span-3">
            <Link
              href="tel:9311411717"
              className="group h-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#0466c2]/50 p-4 md:p-4 rounded-sm flex flex-row items-center gap-5 transition-all duration-300 shadow-lg hover:shadow-[#0466c2]/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 shrink-0 bg-linear-to-br from-[#0466c2] to-[#0872d6] flex items-center justify-center rounded-xl shadow-[0_0_15px_rgba(4,102,194,0.3)] group-hover:scale-110 transition-transform duration-300">
                <PhoneCall className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider mb-0.5 font-poppins">Call Us</span>
                <span className="text-white font-semibold text-lg md:text-xl font-poppins group-hover:text-[#0466c2] transition-colors tracking-wide">
                  9311411717
                </span>
              </div>
            </Link>
          </div>

          {/* Email Us */}
          <div className="lg:col-span-4">
            <Link
              href="mailto:welcome@krmangalam.edu.in"
              className="group h-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#0466c2]/50 p-4 md:p-4 rounded-sm flex flex-row items-center gap-5 transition-all duration-300 shadow-lg hover:shadow-[#0466c2]/10 hover:-translate-y-1 overflow-hidden"
            >
              <div className="w-12 h-12 shrink-0 bg-linear-to-br from-[#0466c2] to-[#0872d6] flex items-center justify-center rounded-xl shadow-[0_0_15px_rgba(4,102,194,0.3)] group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider mb-0.5 font-poppins">Email Us</span>
                <span className="text-white font-semibold text-[15px] md:text-lg font-poppins group-hover:text-[#0466c2] transition-colors truncate">
                  welcome@krmangalam.edu.in
                </span>
              </div>
            </Link>
          </div>

          {/* Address */}
          <div className="lg:col-span-5">
            <Link
              href="https://maps.app.goo.gl/vaYSxzfRzMd1XvFs8"
              target="_blank" rel="noopener noreferrer"
              className="group h-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#0466c2]/50 p-4 md:p-4 rounded-sm flex flex-row items-center gap-5 transition-all duration-300 shadow-lg hover:shadow-[#0466c2]/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-[#0466c2] to-[#0872d6] flex items-center justify-center rounded-xl shadow-[0_0_15px_rgba(4,102,194,0.3)] group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider mb-0.5 font-poppins">Address</span>
                <span className="text-white/90 text-sm md:text-[15px] leading-snug font-poppins group-hover:text-white transition-colors">
                  K.R. Mangalam University, Sohna - Gurgaon Road, Sohna, Sohna Rural, Gurugram, Haryana 122103
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactWithUSection;
