import Divider from "../../common/Divider";

interface RecruitmentStep {
  id: number;
  title: string;
  description: string;
}

interface RecruiterBenefit {
  eyebrow: string;
  title: string;
  description: string;
}

const recruitmentSteps: RecruitmentStep[] = [
  {
    id: 1,
    title: "To receive JD from the company",
    description: "We receive the job description from the company.",
  },
  {
    id: 2,
    title: "Sharing with the students",
    description: "We share the opportunity with relevant students.",
  },
  {
    id: 3,
    title: "Interaction in the class",
    description:
      "We interact with students, introduce the role and address queries.",
  },
  {
    id: 4,
    title: "Registration",
    description: "Interested students register for the drive.",
  },
  {
    id: 5,
    title: "Pre-placement talk by company's representative",
    description:
      "The company conducts a pre-placement talk and shares role details.",
  },
  {
    id: 6,
    title: "Online/offline aptitude test",
    description:
      "Eligible students appear for the aptitude/assessment test.",
  },
  {
    id: 7,
    title: "Group discussion",
    description:
      "Shortlisted students participate in the group discussion.",
  },
  {
    id: 8,
    title: "Personal interview",
    description:
      "Students go through personal interviews with the selection panel.",
  },
  {
    id: 9,
    title: "Result announcement",
    description:
      "Final results are announced to the selected students.",
  },
  {
    id: 10,
    title: "Onboarding process assistance",
    description:
      "We support students through the joining and onboarding process.",
  },
];

const recruiterBenefits: RecruiterBenefit[] = [
  {
    eyebrow: "SUPPORT",
    title: "Dedicated recruiter support",
    description: "",
  },
  {
    eyebrow: "TIMELY RESPONSE",
    title: "",
    description: "Quick & efficient turnaround.",
  },
  {
    eyebrow: "SMOOTH SCHEDULING",
    title: "",
    description: "Coordinated process.",
  },
  {
    eyebrow: "QUALITY SHORTLISTS",
    title: "",
    description: "Relevant & verified student profiles.",
  },
  {
    eyebrow: "END-TO-END SUPPORT",
    title: "",
    description: "From planning to offer rollout.",
  },
  {
    eyebrow: "LONG-TERM PARTNERSHIP",
    title: "",
    description: "Building lasting relationships.",
  },
];

const HowToRecruit = () => {
  return (
    <section className="px-5 sm:px-8 md:px-10 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <Divider />

        <div className="py-12 sm:py-16 lg:py-20">
          {/* ========================================
              HEADER
          ======================================== */}
          <div className="pb-12 sm:pb-14 lg:pb-16">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[4px] text-[#9a2b34] sm:text-[11px]">
              For Recruiters
            </p>

            <h2 className="font-newsreader text-[36px] leading-[0.98] tracking-[-0.025em] text-[#06264b] sm:text-[44px] md:text-[48px] lg:text-[55px]">
              How to recruit at KRMU
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#3F3F3F] sm:text-base sm:leading-7">
              Partner with us. Build your team. Shape the future.
            </p>
          </div>

          {/* ========================================
              RECRUITMENT PROCESS
              
              Desktop:
              01     02
              03     04
              05     06
              07     08
              09     10

              Mobile:
              01
              02
              03
              ...
              10
          ======================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-14">
            {recruitmentSteps.map((step) => (
              <RecruitmentStepCard
                key={step.id}
                step={step}
              />
            ))}
          </div>

          {/* ========================================
              BENEFITS
          ======================================== */}
          <div className="mt-12 grid grid-cols-1 overflow-hidden border border-[#d5d3cf] sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
            {recruiterBenefits.map((benefit, index) => (
              <div
                key={benefit.eyebrow}
                className={`
                  min-h-[115px] p-5
                  sm:min-h-[125px] sm:p-6
                  ${
                    index === 0
                      ? "bg-[#092845] text-white"
                      : "bg-[#faf9f6]"
                  }
                  ${
                    index !== recruiterBenefits.length - 1
                      ? "border-b border-[#d5d3cf] sm:border-r"
                      : ""
                  }
                  ${
                    index === 1 || index === 3
                      ? "sm:border-r-0 lg:border-r lg:border-[#d5d3cf]"
                      : ""
                  }
                  ${
                    index === 5
                      ? "sm:border-r-0"
                      : ""
                  }
                  lg:border-b-0
                `}
              >
                <p
                  className={`
                    text-[9px] font-medium uppercase tracking-[0.16em]
                    sm:text-[10px]
                    ${
                      index === 0
                        ? "text-white/75"
                        : "text-[#982c35]"
                    }
                  `}
                >
                  {benefit.eyebrow}
                </p>

                {benefit.title && (
                  <h3
                    className={`
                      mt-3 font-newsreader text-[18px] leading-[1.08]
                      ${
                        index === 0
                          ? "text-white sm:text-[28px]"
                          : "text-[#7A1F2B] sm:text-sm"
                      }
                    `}
                  >
                    {benefit.title}
                  </h3>
                )}

                {benefit.description && (
                  <p className="mt-3 text-[11px] leading-[1.45] text-[#4D4D4D] sm:text-base">
                    {benefit.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========================================
   RECRUITMENT STEP CARD
======================================== */

interface RecruitmentStepCardProps {
  step: RecruitmentStep;
}

const RecruitmentStepCard = ({
  step,
}: RecruitmentStepCardProps) => {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[205px]
        items-start

        sm:min-h-[245px]

        lg:min-h-[265px]

        /* Vertical line for mobile */
        after:absolute
        after:left-[33px]
        after:top-[68px]
        after:h-[calc(100%-68px)]
        after:w-px
        after:bg-[#d2d0cc]

        /* Hide line after final mobile item */
        last:after:hidden

        /* Desktop/tablet line */
        sm:after:left-[37px]
        sm:after:top-[76px]
        sm:after:h-[calc(100%-76px)]

        /* Last two items are bottom row on desktop */
        sm:[&:nth-last-child(-n+2)]:after:hidden
      "
    >
      {/* ========================================
          NUMBER
      ======================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-[68px]
          w-[68px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#d3d2ce]
          bg-[#f8f6f2]

          sm:h-[76px]
          sm:w-[76px]
        "
      >
        <div
          className="
            flex
            h-[36px]
            w-[36px]
            items-center
            justify-center
            rounded-full
            bg-[#06264b]

            sm:h-[40px]
            sm:w-[40px]
          "
        >
          <span
            className="
              font-newsreader
              text-xs
              font-medium
              text-white

              sm:text-[15px]
            "
          >
            {String(step.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ========================================
          CONTENT
      ======================================== */}
      <div
        className="
          ml-5
          max-w-[260px]
          pt-3

          sm:ml-6
          sm:max-w-[300px]
          sm:pt-3

          lg:max-w-[330px]
        "
      >
        <h3
          className="
            font-newsreader
            text-[18px]
            font-medium
            leading-[1.1]
            text-[#08274c]

            sm:text-[22px]
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-3
            text-[14px]
            leading-[1.5]
            text-[#3f3d3a]

            sm:mt-4
            sm:text-[15px]
            sm:leading-[1.5]

            lg:text-base
          "
        >
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default HowToRecruit;