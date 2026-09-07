import { Mail, Phone } from "lucide-react";

const QuickEnquiry = () => {
  return (
    <section className="px-2">
      <div className="bg-[#192f49] px-6 py-10 md:px-12 lg:px-[78px] lg:py-[86px]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Title */}
          <h2 className="text-4xl font-semibold leading-none text-white md:text-[36px]">
            Quick Enquiry
          </h2>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-[14px] text-[#e2e4e7]">
            <a
              href="tel:01188084888"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <Phone size={19} strokeWidth={1.7} />
              <span>01188084888, 8800697010</span>
            </a>

            <a
              href="mailto:welcome@krmangalam.edu.in"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <Mail size={20} strokeWidth={1.7} />
              <span>welcome@krmangalam.edu.in</span>
            </a>
          </div>

          {/* Button */}
          <button className="rounded-full bg-[#17619a] px-7 py-3 text-[15px] font-medium tracking-[0.03em] text-white transition hover:bg-[#1d70ae]">
            Corporate &amp; Recruiter Connect
          </button>
        </div>
      </div>

      {/* Bottom dark line */}
      <div className="h-[6px] bg-[#10243a]" />
    </section>
  );
};

export default QuickEnquiry;