import Link from "next/link";

const BrandFooter = () => {
  return (
    <section className="py-14 bg-white">
      <div className="px-6 max-w-[1200px] mx-auto w-full">
        <div className="text-center max-w-[1000px] m-auto">
          <h2 className="text-black mb-4 text-2xl md:text-3xl font-bold leading-[1.2]">
            Apply Today to Ascertain Your Tomorrow!
            <br />
            With a 92% Placement Record, KRMU is a Name to Rely Upon!
          </h2>
          <p className="text-black text-lg mb-8">
            Industry-Aligned Courses | Top Recruiters | Global Exposure
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-10">
            <Link
              href="#apply-form"
              className="text-white bg-[linear-gradient(135deg,#e31e24_0%,#c41920_100%)] shadow-[0_4px_14px_0_rgba(227,30,36,0.35)] text-lg min-h-14 inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-xl
  transition-all duration-150 ease-out py-4 px-6 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_0_rgba(227,30,36,0.45)] hover:bg-[linear-gradient(135deg,#ff4d52_0%,#e31e24_100%)]"
            >
              Enrol Now. Limited Seats Available!
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="tel:+919311603078"
              className="text-white bg-[#0060aa]  text-lg min-h-14 inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-xl
              transistion-all duration-150 ease-out py-4 px-6 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-call-icon lucide-phone-call"
              >
                <path d="M13 2a9 9 0 0 1 9 9" />
                <path d="M13 6a5 5 0 0 1 5 5" />
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              +91 9311603078
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#f5a623"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
              </svg>
              <span>UGC Recognised</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#f5a623"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span>NAAC A Accredited</span>
            </div>
            {/* <div className="flex items-center gap-2 text-sm text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#f5a623"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
              </svg>
              <span>BCI Approved</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandFooter;
