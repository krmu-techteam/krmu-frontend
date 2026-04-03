import Image from "next/image";

const headingFont = "'Libre Caslon Condensed', serif";

const CampusFacultyImages = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Full-width campus image */}
      <div className="relative w-full">
        <Image
          src="/landingpage/bsc-finance-2026/451.png"
          alt="KRMU campus"
          width={0}
          height={0}
          sizes="100vw"
          className="block max-w-full"
          style={{ width: "100%", height: "auto" }}
          priority={false}
        />
      </div>

      {/*
        In-flow min-height wrapper keeps band tall enough for all copy (no clipping).
        Photo fills the box with object-cover; gap below campus image avoids touching text.
      */}
      <section className="w-full">
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[560px]">
          <Image
            src="/landingpage/bsc-finance-2026/faculty-section-bg.png"
            alt=""
            fill
            className="object-cover object-[center_top]"
            sizes="100vw"
            quality={75}
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.52] sm:bg-black/55 md:bg-black/58"
            aria-hidden
          />
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-5 px-4 py-10 text-center sm:gap-6 sm:px-6 sm:py-12 md:gap-7 md:px-8 md:py-14 lg:gap-8 lg:py-16">
            <h2
              className="m-0 w-full max-w-[min(100%,36rem)] shrink-0 font-semibold italic leading-[140%] tracking-[-0.02em] text-[26px] sm:max-w-[min(100%,40rem)] sm:text-[32px] md:max-w-[min(100%,46rem)] md:text-[42px] lg:max-w-[920px] lg:text-[52px] xl:text-[62px]"
              style={{ fontFamily: headingFont }}
            >
              <span className="block text-[#DF3232]">
                Built by people who&apos;ve done it,
              </span>
              <span className="mt-1 block text-white sm:mt-1.5 md:mt-2">
                not just taught it.
              </span>
            </h2>

            <p
              className="m-0 w-full max-w-[min(100%,34rem)] shrink-0 font-semibold tracking-normal text-white text-[13px] leading-snug sm:max-w-[min(100%,38rem)] sm:text-[15px] sm:leading-relaxed md:max-w-[min(100%,44rem)] md:text-[17px] md:leading-7 lg:max-w-[min(100%,52rem)] lg:text-[19px] lg:leading-8 xl:text-[21px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Investment bankers with CFA credentials · Qualified actuaries (FIA,
              FIAI) · Quant professionals from global firms · Big 4 advisory
              practitioners · Published academicians with deep research expertise
            </p>

            <p
              className="m-0 w-full max-w-[min(100%,22rem)] shrink-0 font-normal tracking-normal text-white text-[12px] leading-5 sm:max-w-[min(100%,26rem)] sm:text-[13px] sm:leading-[22px] md:max-w-[640px] md:text-[14px] md:leading-6 lg:text-[16px] lg:leading-6"
              style={{
                fontFamily: "Inter, sans-serif",
                paddingBottom: "max(0.25rem, env(safe-area-inset-bottom, 0px))",
              }}
            >
              The network you build in four years will serve you for forty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusFacultyImages;
