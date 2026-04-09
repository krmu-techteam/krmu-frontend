import Image from "next/image";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import { NavLink } from "../contentype";

interface BscFinanceNavbarProps {
  navLinks: NavLink[];
  brochureHref: string;
  brochureDownloadName: string;
  applyHref: string;
}

const BscFinanceNavbar = ({
  navLinks,
  brochureHref,
  brochureDownloadName,
  applyHref,
}: BscFinanceNavbarProps) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-6 lg:py-8 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center md:justify-between gap-4 sm:gap-6">

        {/* Logo */}
        <div className="relative shrink-0 hidden md:block" style={{ height: "clamp(28px, 4vw, 40px)", aspectRatio: "268/40" }}>
          <Image
            src="/landingpage/bsc-finance-2026/krmu-logo-naac.png"
            alt="K.R. Mangalam University - NAAC A+ Accredited"
            fill
            priority
            sizes="268px"
            className="object-contain"
          />
        </div>
        <div className="relative shrink-0 md:hidden" style={{ height: "clamp(42px, 4vw, 40px)", aspectRatio: "268/40" }}>
          <Image
            src="/landingpage/bsc-finance-2026/krmu-logo-naac.png"
            alt="K.R. Mangalam University - NAAC A+ Accredited"
            fill
            priority
            sizes="268px"
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
          <CommonLeadPopup
            buttonText="Download Brochure"
            buttonClassName="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/55 text-white/90 hover:text-white hover:border-white/85 text-sm font-semibold transition-all duration-200"
            redirectUrl={brochureHref}
            form_name="BSc Finance 2026 - Brochure Download"
          />

          <NpfPopup
            formId="047a23de933bd996c4c01578fad16790"
            btnClass="npfWidget-047a23de933bd996c4c01578fad16790 inline-flex items-center max-lg:hidden gap-2 px-4 py-2 rounded-lg bg-white text-[#0c1830] hover:bg-white/90 text-sm font-semibold transition-all duration-200 hidden lg:block"
            btnText="Apply now"
          />
        </div>

      </div>
    </header>
  );
};

export default BscFinanceNavbar;
