import Image from "next/image";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import { bscFinanceBrochureHref } from "../content";

const FooterSection = () => {
  return (
    <footer>
      <section
        className="pt-10 sm:pt-14 lg:pt-20 pb-0 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F3F5F7 0%, #FFFFFF 100%)",
        }}
      >
        {/* All text content */}
        <div className="relative z-10 max-w-[92vw] sm:max-w-[560px] lg:max-w-[600px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-4 sm:gap-5">

          {/* KRMU Logo */}
          <div className="relative" style={{ width: "88px", height: "88px" }}>
            <Image
              src="/landingpage/bsc-finance-2026/footer-logo.png"
              alt="K.R. Mangalam University"
              fill
              sizes="88px"
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h2
            className="m-0"
            style={{
              fontFamily: "'Libre Caslon Condensed', serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(28px, 8vw, 62px)",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#111111" }}>Begin Here. </span>
            <span style={{ color: "#DF3232" }}>Go Far</span>
          </h2>

          {/* Programme name */}
          <p
            className="m-0"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: "clamp(16px, 4vw, 32px)",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "#111111",
            }}
          >
            BSc (Hons) Finance
          </p>

          {/* Sub-info lines */}
          <div className="flex flex-col gap-1">
            <p
              className="m-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 3.5vw, 16px)",
                lineHeight: "24px",
                textAlign: "center",
                color: "#344054",
              }}
            >
              Applications open for Academic Session 2026–27
            </p>
            <p
              className="m-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(13px, 3.5vw, 16px)",
                lineHeight: "24px",
                textAlign: "center",
                color: "#344054",
              }}
            >
              100 seats · Three tracks · 12 months guaranteed paid experience
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full mt-1">
            <CommonLeadPopup
              buttonText="Download Brochure"
              buttonClassName="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg border border-[#D1D1D1] bg-white text-[#344054] hover:bg-gray-50 font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 w-full sm:w-auto justify-center"
              redirectUrl={bscFinanceBrochureHref}
              form_name="BSc Finance 2026 - Brochure Download"
            />

            <NpfPopup
              formId="047a23de933bd996c4c01578fad16790"
              btnClass="npfWidget-047a23de933bd996c4c01578fad16790 inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 w-full sm:w-auto justify-center"
              btnText="Apply now"
            />
          </div>

          {/* Contact info */}
          <div
            className="flex flex-col gap-1.5 pb-10 sm:pb-14"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(12px, 3.5vw, 16px)",
              lineHeight: "24px",
              textAlign: "center",
              color: "#111111",
            }}
          >
            <p className="m-0">K.R. Mangalam University</p>
            <p className="m-0">Sohna Road, Gurugram, Haryana</p>
            <a
              href="https://www.krmangalam.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-75 transition-opacity"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                color: "#111111",
              }}
            >
              www.krmangalam.edu.in
            </a>
            <p className="m-0 break-words">
            Call: <a href="tel:+919311411717">+91 9311411717</a>
            </p>
           
          </div>

        </div>
        <div className="text-sm text-center py-4"> © K.R. Mangalam University. All rights reserved. Programme structure subject to regulatory approval.</div>


    

      </section>
    </footer>
  );
};

export default FooterSection;
