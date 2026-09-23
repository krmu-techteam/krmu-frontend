import Link from "next/link";

const QuickEnquiry = () => {
  return (
    <section className="bg-[#0D2948]">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:py-16 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-[auto_1fr_auto] lg:gap-10 xl:gap-16">
          {/* Heading */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px]">
              Quick Enquiry
            </h2>
          </div>

          {/* Contact Details */}
          <div className="flex min-w-0 flex-col items-center text-center text-white">
            {/* Contact Heading */}
            <div className="mb-2 flex w-full items-center justify-center gap-3 sm:gap-4">
              <span className="hidden h-px w-12 bg-white/30 sm:block sm:w-16 md:w-20" />

              <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-white/80 sm:text-sm md:text-base">
                Contact
              </h3>

              <span className="hidden h-px w-12 bg-white/30 sm:block sm:w-16 md:w-20" />
            </div>

            {/* Name */}
            <h4 className="text-xl font-bold leading-tight sm:text-2xl md:text-[26px]">
              Vibha Thakur
            </h4>

            {/* Designation */}
            <p className="mt-1 text-sm italic leading-5 sm:text-base md:text-lg">
              Director | Career Development Centre
            </p>

            {/* Phone & Email */}
            <div className="mt-2 flex w-full flex-col items-center gap-1 text-xs leading-5 sm:text-sm md:text-base lg:flex-row lg:justify-center lg:gap-2">
              <a
                href="tel:+919827085056"
                className="whitespace-nowrap transition-opacity hover:opacity-80"
              >
                Mob. +91 9827085056
              </a>

              <span className="hidden lg:inline">|</span>

              <a
                href="mailto:vibha.thakur@krmangalam.edu.in"
                className="max-w-full break-all transition-opacity hover:opacity-80"
              >
                Email: vibha.thakur@krmangalam.edu.in
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center md:col-span-2 lg:col-span-1 lg:justify-end">
            <Link
              href="/placements/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                max-w-xs
                items-center
                justify-center
                bg-[#FBF8F3]
                px-5
                py-3
                text-center
                text-sm
                font-medium
                leading-5
                text-[#0C2441]
                transition-colors
                hover:bg-white
                sm:px-6
                sm:py-3.5
                sm:text-base
                lg:w-auto
                lg:max-w-none
                lg:px-5
                xl:px-6
                xl:py-4
                xl:text-lg
              "
            >
              Corporate &amp; Recruiter Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
