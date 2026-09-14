import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const QuickEnquiry = () => {
  return (
    <section className="bg-[#0D2948] font-poppins">
      <div className="max-w-7xl mx-auto px-5 xl:px-0 py-10 md:py-[100px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-[42px] font-semibold">
            Quick Enquiry
          </h2>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-white">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone size={19} strokeWidth={1.5} className="shrink-0" />

              <span className="text-base">01148884888, 8800697010</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail size={19} strokeWidth={1.5} className="shrink-0" />

              <span className="text-base">welcome@krmangalam.edu.in</span>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#"
            className="text-[#0C2441] bg-[#FBF8F3] text-lg inline-flex items-center justify-center px-6 py-3.5 font-medium font-sans font-medium"
          >
            Corporate & Recruiter Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
