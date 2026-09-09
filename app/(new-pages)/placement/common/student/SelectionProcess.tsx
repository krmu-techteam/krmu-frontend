const selectionStages = [
  {
    number: "01",
    title: "Pre-placement Talk",
    description:
      "Company overview, role expectations and the process ahead.",
  },
  {
    number: "02",
    title: "Written Test",
    description:
      "Aptitude, technical and domain-specific screening rounds.",
  },
  {
    number: "03",
    title: "Group Discussion",
    description:
      "Communication and reasoning assessed in a group setting.",
  },
  {
    number: "04",
    title: "Interview",
    description:
      "Technical and HR rounds — what to prepare and expect.",
  },
];

const supportItems = [
  {
    label: "ON THE DAY",
    text: "What to bring, dress code.",
  },
  {
    label: "TIMING RULES",
    text: "The ten-minute lateness rule.",
  },
  {
    label: "DRESS CODE",
    text: "Formal business attire expected.",
  },
];

const SelectionProcess = () => {
  return (
    <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.25em] text-[#7A1F2B] sm:text-xs sm:tracking-[0.3em] md:text-sm">
              The Selection Process
            </span>

            <h2
              className="
                mt-3
                max-w-[1050px]
                font-newsreader
                text-[30px]
                font-medium
                leading-[1.12]
                text-[#001836]
                sm:text-4xl
                md:text-5xl
                lg:text-[48px]
                xl:text-[52px]
              "
            >
              What each stage involves and how to prepare.
            </h2>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="relative">
            {/* Desktop horizontal line */}
            <div
              className="
                absolute
                left-[12.5%]
                right-[12.5%]
                top-[45px]
                hidden
                h-px
                bg-[#d8d5d0]
                md:block
                lg:top-[51px]
              "
            />

            {/* Mobile vertical line */}
            <div
              className="
                absolute
                bottom-[70px]
                left-[38px]
                top-[38px]
                w-px
                bg-[#d8d5d0]
                sm:left-[45px]
                md:hidden
              "
            />

            <div
              className="
                grid
                grid-cols-1
                gap-8
                md:grid-cols-4
                md:gap-0
              "
            >
              {selectionStages.map((stage) => (
                <div
                  key={stage.number}
                  className="
                    relative
                    flex
                    items-start
                    gap-5
                    md:flex-col
                    md:items-center
                    md:gap-0
                    md:px-4
                    md:text-center
                  "
                >
                  {/* Number Circle */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[76px]
                      w-[76px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d8d5d0]
                      bg-[#fdfaf5]
                      sm:h-[90px]
                      sm:w-[90px]
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#001836]
                        font-newsreader
                        text-base
                        font-medium
                        text-white
                        sm:h-[52px]
                        sm:w-[52px]
                        sm:text-lg
                      "
                    >
                      {stage.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="
                      relative
                      z-10
                      pt-2
                      md:mt-5
                      md:bg-[#fdfaf5]
                      md:px-3
                      md:pt-0
                    "
                  >
                    <h3
                      className="
                        font-newsreader
                        text-xl
                        font-medium
                        leading-tight
                        text-[#111]
                        sm:text-2xl
                        md:text-[25px]
                      "
                    >
                      {stage.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[280px]
                        font-poppins
                        text-xs
                        leading-[1.5]
                        text-[#222]
                        sm:text-sm
                        md:mx-auto
                      "
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SUPPORT ================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            overflow-hidden
            border
            border-[#d8d5d0]
            sm:mt-14
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Support Heading */}
          <div
            className="
              bg-[#0d2948]
              px-5
              py-6
              text-white
              sm:col-span-2
              sm:px-6
              lg:col-span-1
              lg:min-h-[150px]
            "
          >
            <span
              className="
                font-poppins
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white/80
                sm:text-[10px]
              "
            >
              Support
            </span>

            <h3
              className="
                mt-2
                max-w-[220px]
                font-newsreader
                text-2xl
                font-medium
                leading-[1.05]
                sm:text-[26px]
              "
            >
              Dedicated placement support
            </h3>
          </div>

          {/* Support Items */}
          {supportItems.map((item, index) => (
            <div
              key={item.label}
              className="
                min-h-[110px]
                border-t
                border-[#d8d5d0]
                px-5
                py-5
                sm:min-h-[130px]
                sm:px-6
                sm:py-6
                sm:nth-[3]:border-l
                lg:min-h-[150px]
                lg:border-l
                lg:border-t-0
              "
            >
              <span
                className="
                  font-poppins
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#7A1F2B]
                  sm:text-[10px]
                "
              >
                {item.label}
              </span>

              <p
                className="
                  mt-1.5
                  max-w-[220px]
                  font-poppins
                  text-xs
                  leading-5
                  text-[#444]
                  sm:text-sm
                  md:text-base
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;