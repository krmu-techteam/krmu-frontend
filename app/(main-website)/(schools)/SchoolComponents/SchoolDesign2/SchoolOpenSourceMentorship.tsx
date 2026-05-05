import Image from "next/image";

const whatYouGet = [
  "Guided project & organisation selection",
  "Proposal writing with expert reviews",
  "Hands-on contributions\n(Git, PRs, real repositories)",
  "6-month structured preparation with continuous support from the Technical Training Team",
  "Corporate-like work environment with daily progress tracking, real development workflows, and mentorship by past selected contributors.",
];

const SchoolOpenSourceMentorship = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#051630] text-white">
      {/* Outer card */}
      <div
        className="max-w-[90rem] mx-auto w-full rounded-3xl p-1"
        style={{
          background: "linear-gradient(to bottom, #002f8e, #f97316)",
        }}
      >
        <div className="bg-[#051630] rounded-3xl overflow-hidden">
          <div className="p-5 sm:p-8 lg:p-12">
            {/* ── Top Row: Achievement card (left) + Title & Description (right) ── */}
            <div
              className="flex flex-col md:flex-row gap-6 lg:gap-10 pb-8 items-center  relative"
              style={{
                borderBottom: "5px solid transparent",
                backgroundImage:
                  "linear-gradient(#051630, #051630), linear-gradient(to right, transparent, #3b6794 50%, transparent)",
                backgroundOrigin: "padding-box, border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              {/* Achievement card */}
              <div
                className="flex-shrink-0  overflow-hidden flex flex-col xs:flex-row md:flex-col lg:flex-row
                           w-full md:w-[400px] lg:w-[480px]
                           h-[520px] md:h-auto lg:h-[300px]"
                style={{
                  // background: "linear-gradient(135deg,#0b2347 0%,#002f8e 100%)",
                  backgroundColor: "#002f8e",
                  // border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {/* Photo */}
                <div className="relative w-full h-[260px] xs:w-[180px] xs:h-auto md:w-full md:h-[200px] lg:w-[190px] lg:h-auto flex-shrink-0">
                  <Image
                    src="/schools/OP.JPG"
                    alt="Jayant Parashar"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Text info */}
                <div className="flex flex-col justify-between px-5 py-5 flex-1 min-w-0">
                  <div>
                    <p className="text-white font-semibold lg:text-3xl text-xl leading-tight">
                      Jayant Parashar
                    </p>
                    <p className="text-white lg:text-xl mt-1 pb-3 border-b border-[#4da6ff]">
                      (B.Tech. CSE, 6th Sem)
                    </p>
                    <p className="text-white text-4xl font-extrabold mt-3 leading-none pb-3 border-b border-[#4da6ff] ">
                      ₹3L
                    </p>
                    <p className="text-white lg:text-[17px] text-sm mt-2">
                      Google Stipend · GSoC 2026
                    </p>
                  </div>

                  {/* GSoC badge */}
                  <div className="relative mt-3 w-full h-full">
                    <Image
                      src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1773422694704_886721c56d.png"
                      alt="GSoC Logo"
                      fill
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Title + Description */}
              <div className="flex flex-col justify-center min-w-0 h-full ">
                <h2 className="text-3xl sm:text-4xl xl:text-4xl leading-tight mb-4">
                  Open Source{" "}
                  <span className="text-[#4da6ff] font-semibold">
                    Mentorship Programme
                  </span>
                </h2>
                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  The School of Engineering and Technology (SOET) runs a focused
                  Open Source Mentorship Programme, driven by the Technical
                  Training Team, to prepare students for global, stipend-based
                  opportunities like{" "}
                  <span className="text-[#00c3ff] font-semibold">
                    Google Summer of Code
                  </span>
                  ,{" "}
                  <span className="text-[#00c3ff] font-semibold">
                    LFX Mentorship
                  </span>
                  ,{" "}
                  <span className="text-[#00c3ff] font-semibold">
                    Summer of Bitcoin
                  </span>
                  ,{" "}
                  <span className="text-[#00c3ff] font-semibold">
                    Hacktoberfest
                  </span>
                  ,{" "}
                  <span className="text-[#00c3ff] font-semibold">
                    MLH Fellowship
                  </span>
                  , and{" "}
                  <span className="text-[#00c3ff] font-semibold">
                    Outreachy
                  </span>
                  .
                </p>
              </div>
            </div>
            {/* <hr className="color-white" /> */}

            {/* ── What You Get ── */}
            <div>
              <h3 className="text-center text-[#4da6ff] text-2xl sm:text-2xl font-semibold m-6">
                What You Get:
              </h3>

              {/* Row 1 — 1 col mobile / 3 cols sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {whatYouGet.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-xl px-3 py-3 text-center  text-white/85 text-base sm:text-lg leading-relaxed"
                    style={{ border: "2px solid #4da6ff" }}
                  >
                    {item.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Row 2 — 1 col mobile / 2 cols sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whatYouGet.slice(3).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-xl px-3 py-3 text-center  text-white/85 text-base sm:text-lg leading-relaxed"
                    style={{ border: "2px solid #4da6ff" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolOpenSourceMentorship;
