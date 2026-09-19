import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const QuickEnquiry = () => {
  return (
    <section className="bg-[#0D2948] font-poppins">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:py-20 xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* Heading */}
          <div className="shrink-0">
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[38px] lg:text-[42px]">
              Quick Enquiry
            </h2>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 text-white sm:gap-5">
            {/* Phone */}
            <a
              href="tel:01148884888"
              className="flex items-center gap-3 transition-opacity hover:opacity-80 sm:gap-4"
            >
              <Phone
                size={19}
                strokeWidth={1.5}
                className="shrink-0 sm:h-5 sm:w-5"
              />

              <span className="text-sm sm:text-base">
                01148884888, 8800697010
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:welcome@krmangalam.edu.in"
              className="flex items-center gap-3 transition-opacity hover:opacity-80 sm:gap-4"
            >
              <Mail
                size={19}
                strokeWidth={1.5}
                className="shrink-0 sm:h-5 sm:w-5"
              />

              <span className="break-all text-sm sm:text-base">
                welcome@krmangalam.edu.in
              </span>
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/placement/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              bg-[#FBF8F3]
              px-5
              py-3.5
              text-center
              text-sm
              font-medium
              leading-5
              text-[#0C2441]
              transition-colors
              hover:bg-white

              sm:w-fit
              sm:px-6
              sm:py-4
              sm:text-base

              lg:shrink-0
              lg:text-lg
            "
          >
            Corporate &amp; Recruiter Connect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;