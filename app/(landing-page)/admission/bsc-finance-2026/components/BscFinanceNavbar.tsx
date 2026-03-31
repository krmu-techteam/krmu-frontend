import Image from "next/image";
import { NavLink } from "../contentype";

interface BscFinanceNavbarProps {
  navLinks: NavLink[];
  brochureHref: string;
  applyHref: string;
}

const BscFinanceNavbar = ({
  navLinks,
  brochureHref,
  applyHref,
}: BscFinanceNavbarProps) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-6 lg:py-8 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4 sm:gap-6">

        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/landingpage/bsc-finance-2026/krmu-logo-naac.png"
            alt="K.R. Mangalam University - NAAC A+ Accredited"
            width={268}
            height={40}
            priority
            style={{ width: "auto", height: "clamp(28px, 4vw, 40px)" }}
            className="object-contain"
          />
        </div>

        {/* Nav links — hidden below lg */}
        <nav aria-label="Primary navigation">
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="font-[Inter] text-[14px] font-medium not-italic leading-5 tracking-normal text-white/90 hover:text-white transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={brochureHref}
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/55 text-white/90 hover:text-white hover:border-white/85 text-sm font-semibold transition-all duration-200 no-underline"
          >
            Download Brochure
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12l4 4 4-4" />
            </svg>
          </a>

          <a
            href={applyHref}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#0c1830] hover:bg-white/90 text-sm font-semibold transition-all duration-200 no-underline"
          >
            Apply now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </header>
  );
};

export default BscFinanceNavbar;
