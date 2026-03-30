import { bscFinanceBrochureFileName } from "../content";
import { TrackCard, TracksSectionData } from "../contentype";

interface TracksSectionProps {
  data: TracksSectionData;
}

// --- Icon components ---

const BriefcaseIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#DF3232"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" />
    <path d="M2 12h20" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#DF3232"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const ActuarialIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#DF3232"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
  </svg>
);

const iconMap: Record<TrackCard["icon"], React.ReactNode> = {
  briefcase: <BriefcaseIcon />,
  chart: <ChartIcon />,
  actuarial: <ActuarialIcon />,
};

// Shared label style — "Aligned with", "Best for", "Career Roles"
const labelClass =
  "m-0 font-semibold text-[14px] leading-5 tracking-normal text-[#101828]";

// Shared subtext style — values under labels
const subtextClass =
  "m-0 font-normal text-[16px] leading-6 tracking-normal text-[#475467]";

// --- Main component ---

const TracksSection = ({ data }: TracksSectionProps) => {
  return (
    <section
      id="tracks"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(360deg, #FFFFFF 0%, #F3F5F7 100%)" }}
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.13) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-10 sm:gap-12">

        {/* Badge */}
        <span
          className="inline-flex items-center justify-center px-4 h-8 rounded-full uppercase"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            color: "#175CD3",
            background: "#EFF8FF",
            border: "1px solid #B2DDFF",
          }}
        >
          {data.badge}
        </span>

        {/* Heading */}
        <h2
          className="m-0 text-center font-semibold italic text-[34px] sm:text-[44px] lg:text-[62px] leading-[130%] tracking-[-0.02em]"
          style={{ fontFamily: "'Libre Caslon Condensed', serif" }}
        >
          <span className="text-[#1A1A1A]">{data.headingDark} </span>
          <span className="text-[#DF3232]">{data.headingRed}</span>
        </h2>

        {/* Track cards — 3-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {data.tracks.map((track) => (
            <div
              key={track.title}
              className="flex flex-col gap-5 bg-white rounded-xl p-6"
              style={{ border: "1px solid #E4E7EC" }}
            >
              {/* Icon container — 60×60, border-radius 12, gradient bg */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",
                  border: "1px solid #E4E7EC",
                }}
              >
                {iconMap[track.icon]}
              </div>

              {/* Track title */}
              <h3
                className="m-0 font-semibold text-[24px] leading-8 tracking-normal text-[#0061A6]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {track.title}
              </h3>

              {/* Aligned with */}
              <div className="flex flex-col gap-1">
                <p className={labelClass}>Aligned with</p>
                <p className={subtextClass}>{track.alignedWith}</p>
              </div>

              {/* Best for */}
              <div className="flex flex-col gap-1">
                <p className={labelClass}>Best for</p>
                <p className={subtextClass}>{track.bestFor}</p>
              </div>

              {/* Career roles */}
              <div className="flex flex-col gap-2">
                <p className={labelClass}>Career Roles</p>
                <div className="flex flex-wrap gap-2">
                  {track.careerRoles.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center rounded-full text-[12px] font-medium leading-4 text-[#1570EF] bg-[#EFF8FF]"
                      style={{
                        height: "24px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        border: "1px solid #B9E6FE",
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <a
            href={data.brochureHref}
            download={bscFinanceBrochureFileName}
            className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg border border-[#D1D1D1] bg-white text-[#344054] hover:bg-gray-50 font-semibold text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
          >
            {data.brochureLabel}
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
            href={data.applyHref}
            className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg bg-[#0060A7] text-white hover:bg-[#004f8c] font-semibold text-[14px] leading-5 tracking-normal transition-all duration-200 no-underline"
          >
            {data.applyLabel}
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

      </div>
    </section>
  );
};

export default TracksSection;
