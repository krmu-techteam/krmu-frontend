import { ArrowRight } from "lucide-react";

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
    <section className="bg-[#f8f6f2] px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:py-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#9a2b34] sm:text-[11px] sm:tracking-[0.3em]">
            For Recruiters
          </p>

          <h2 className="font-newsreader text-[36px] leading-[0.98] tracking-[-0.025em] text-[#06264b] sm:text-[44px] md:text-[48px] lg:text-[50px]">
            How to recruit at KRMU
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#3f3d3b] sm:text-base sm:leading-7">
            Partner with us. Build your team. Shape the future.
          </p>
        </div>

        {/* Recruitment Process */}
        <div className="space-y-12 sm:space-y-14 lg:space-y-16">
          {/* First 5 */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-5 lg:gap-0">
            {recruitmentSteps.slice(0, 5).map((step, index) => (
              <RecruitmentStepCard
                key={step.id}
                step={step}
                showConnector={index !== 4}
              />
            ))}
          </div>

          {/* Second 5 */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-5 lg:gap-0">
            {recruitmentSteps.slice(5, 10).map((step, index) => (
              <RecruitmentStepCard
                key={step.id}
                step={step}
                showConnector={index !== 4}
              />
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden border border-[#d5d3cf] sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {recruiterBenefits.map((benefit, index) => (
            <div
              key={benefit.eyebrow}
              className={`
                min-h-[115px] p-5 sm:p-6 lg:min-h-[125px]
                ${index === 0 ? "bg-[#092845] text-white" : "bg-[#faf9f6]"}
                ${
                  index !== recruiterBenefits.length - 1
                    ? "border-b border-[#d5d3cf] sm:border-r lg:border-b-0"
                    : ""
                }
                ${
                  index === 1 || index === 3 || index === 5
                    ? "sm:border-r-0 lg:border-r lg:border-[#d5d3cf]"
                    : ""
                }
              `}
            >
              <p
                className={`text-[9px] font-medium uppercase tracking-[0.16em] sm:text-[10px] ${
                  index === 0 ? "text-white/75" : "text-[#982c35]"
                }`}
              >
                {benefit.eyebrow}
              </p>

              {benefit.title && (
                <h3
                  className={`mt-3 font-newsreader text-[18px] leading-[1.08] sm:text-[19px] ${
                    index === 0 ? "text-white" : "text-[#162b46]"
                  }`}
                >
                  {benefit.title}
                </h3>
              )}

              {benefit.description && (
                <p className="mt-3 text-[11px] leading-[1.45] text-[#55524f] sm:text-xs">
                  {benefit.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface RecruitmentStepCardProps {
  step: RecruitmentStep;
  showConnector: boolean;
}

const RecruitmentStepCard = ({
  step,
  showConnector,
}: RecruitmentStepCardProps) => {
  return (
    <div className="relative flex items-center text-left sm:items-start sm:text-center lg:flex-col lg:items-center lg:px-3">
      {/* Number */}
      <div className="relative z-10 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#d3d2ce] bg-[#f8f6f2] sm:h-[76px] sm:w-[76px] lg:h-[86px] lg:w-[86px]">
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#06264b] sm:h-[40px] sm:w-[40px] lg:h-[42px] lg:w-[42px]">
          <span className="font-newsreader text-xs font-medium text-white sm:text-[13px]">
            {String(step.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Mobile / Tablet Connector */}
      {showConnector && (
        <div className="absolute left-[33px] top-[68px] h-[calc(100%+40px)] w-px bg-[#d2d0cc] sm:left-[38px] sm:top-[76px] lg:hidden" />
      )}

      {/* Desktop Connector */}
      {showConnector && (
        <div className="absolute left-[calc(50%+43px)] right-[-50%] top-[43px] hidden h-px bg-[#d2d0cc] lg:block" />
      )}

      {/* Content */}
      <div className="ml-5 max-w-[260px] pb-2 sm:ml-0 sm:max-w-[190px] sm:pt-4 lg:mt-3 lg:max-w-[185px] lg:pt-0">
        <h3 className="font-newsreader text-[17px] leading-[1.1] text-[#08274c] sm:text-[16px]">
          {step.title}
        </h3>

        <p className="mt-3 text-[12px] leading-[1.5] text-[#3f3d3a] sm:mt-4">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default HowToRecruit;