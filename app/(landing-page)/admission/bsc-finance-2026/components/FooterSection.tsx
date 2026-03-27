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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landingpage/bsc-finance-2026/footer-logo.png"
            alt="KR Mangalam University"
            className="w-[68px] sm:w-[80px] lg:w-[88px] h-auto object-contain"
          />

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
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg border border-[#D1D1D1] bg-white text-[#344054] hover:bg-gray-50 font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline w-full sm:w-auto justify-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Download Brochure
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              href="#apply-section"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[13px] sm:text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline w-full sm:w-auto justify-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Apply now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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

          {/* QR Code */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landingpage/bsc-finance-2026/footer-qr.png"
            alt="Scan to apply"
            className="w-[130px] sm:w-[160px] lg:w-[180px] h-auto object-contain mt-1"
          />

          {/* Contact info */}
          <div
            className="flex flex-col gap-1.5 pb-10 sm:pb-14 lg:pb-[180px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(12px, 3.5vw, 16px)",
              lineHeight: "24px",
              textAlign: "center",
              color: "#111111",
            }}
          >
            <p className="m-0">KR Mangalam University</p>
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
              Landline: 0124-2867800 · Mobile: 08800697010-15 · Helpline: 8192888444
            </p>
            <p className="m-0 break-words">
              admissions@krmangalam.edu.in · admissions.krmangalam.edu.in
            </p>
          </div>

        </div>

        {/* Campus building image */}
        <div className="relative" style={{ marginTop: "-160px" }}>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landingpage/bsc-finance-2026/footer-campus.png"
            alt="KR Mangalam University Campus"
            className="w-full h-auto block"
            style={{ display: "block" }}
          />

          {/* White-to-transparent fade overlay */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: "60%",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Copyright — bottom of campus image */}
          <div
            className="absolute bottom-0 left-0 right-0 py-2 px-4 text-center"
          >
            <p
              className="m-0 text-white"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(10px, 2.5vw, 12px)",
                lineHeight: "18px",
              }}
            >
              © KR Mangalam University. All rights reserved. Programme structure subject to regulatory approval.
            </p>
          </div>

        </div>

      </section>
    </footer>
  );
};

export default FooterSection;
