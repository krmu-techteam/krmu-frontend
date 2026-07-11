const WhyStudy = () => {
  return (
    <section className="py-[50px] px-4 googleSansFamily">
      <div className="max-w-[1296px] mx-auto w-full">
        <div className="mb-12 text-center">
          <h3 className="text-2xl md:text-4xl font-semibold mb-5">
            Why Study{" "}
            <span className="text-[#e31e24]">B.Tech. in Delhi NCR?</span>
          </h3>
          <p className="mb-4">
            Learn & Launch your Engineering Career with the Best B.Tech.
            Colleges in Haryana at India's fastest-growing Tech and Corporate
            Ecosystem.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="ncr-benefit-card h-full">
            <div className="ncr-icon icon-blue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M0 128C0 92.7 28.7 64 64 64H256c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V192zm0 160c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352zm224-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V224zm0 160c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V384zM512 256V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path>
              </svg>
            </div>
            <h4 className="benefit-title">
              Learn in the Heart of Industrial Innovation
            </h4>
            <p className="benefit-text">
              Gurgaon, a major Delhi NCR technology and corporate hub, offers
              B.Tech. students strong industry exposure, modern infrastructure,
              excellent connectivity, and access to startups, global companies,
              and diverse career opportunities.
            </p>
          </div>

          <div className="ncr-benefit-card h-full">
            <div className="ncr-icon icon-red">
              <svg
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H384V448H128V352H64v96c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H128zM32 160h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zM192 192c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32z"></path>
              </svg>
            </div>
            <h4 className="benefit-title">
              Your Gateway to High-Paying Engineering Roles
            </h4>
            <p className="benefit-text">
              Delhi NCR hosts thousands of technology firms, MNCs, and startups.
              B.Tech. students in Gurgaon gain strong placement exposure,
              internships, industry projects, and recruitment access from
              leading companies for high-growth engineering careers.
            </p>
          </div>

          <div className="ncr-benefit-card h-full">
            <div className="ncr-icon icon-gold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M128 32C92.7 32 64 60.7 64 96V352h512V96c0-35.3-28.7-64-64-64H128zM192 160h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32zM640 384c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h576c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </div>
            <h4 className="benefit-title">
              Hands-on Engineering Experience via Live Projects
            </h4>
            <p className="benefit-text">
              Engineering education in Gurgaon emphasises industry collaboration
              through live projects, hackathons, internships, workshops, and
              expert sessions, thereby helping students build practical skills,
              industry exposure, and strong professional networks before
              graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
