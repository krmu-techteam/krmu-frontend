const OverviewImpacting = () => {
  return (
    <div className="bg-[url(/gradient-3.webp)] bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20">
      <div className="max-w-[1690px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-24 items-center lg:items-start overflow-hidden">
        <div className="w-full lg:w-1/3 text-white text-center lg:text-left">
          <h4 className="text-lg md:text-2xl font-medium text-white/80 uppercase tracking-wide mb-3">
            Making a Difference Together
          </h4>
          <h3 className="text-3xl md:text-6xl xl:text-7xl font-bold leading-tight mb-8">
            Impacting Lives
          </h3>
          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
              It allows young students to participate in various government-led
              community service activities & programmes. The objective of KRMU-NSS
              is to develop responsible personalities through community services.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              The programmes aim to promote social welfare in students so that they
              serve society equally. NSS volunteers work closely with villagers and
              learn to live satisfactorily with limited resources.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col xl:flex-row gap-10 impactinglivescard">
            <div
              className="w-full xl:w-1/3 text-white p-4 md:p-8 rounded-sm flex flex-col h-full"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
              }}
            >
              <h5 className="text-[26px] font-semibold leading-[1.12] mb-6">
                Community Engagement and Understanding
              </h5>
              <ul className="list-disc pl-0 md:pl-5 space-y-3">
                <li>
                  Enabling students to understand the roots of the community
                </li>
                <li>Identifying their responsibilities towards the community</li>
                <li>
                  Understanding the requirements and pain-points of the community
                  and offering robust solutions
                </li>
              </ul>
            </div>
            <div
              className="w-full xl:w-1/3 text-white p-4 md:p-8 rounded-sm flex flex-col h-full"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
              }}
            >
              <h5 className="text-[26px] font-semibold leading-[1.12] mb-6">
                Personal Growth and Responsibility
              </h5>
              <ul className="list-disc pl-0 md:pl-5 space-y-3">
                <li>Developing social and civil responsibility</li>
                <li>
                  Acquiring skills to live in groups harmoniously by sharing
                  duties
                </li>
                <li>
                  Attaining leadership qualities, democratic attitude, and skills
                  to encourage community participation
                </li>
              </ul>
            </div>
            <div
              className="w-full xl:w-1/3 text-white p-4 md:p-8 rounded-sm flex flex-col h-full"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.12) 100%)`,
              }}
            >
              <h5 className="text-[26px] font-semibold leading-[1.12] mb-6">
                Crisis Management and Preparedness
              </h5>
              <ul className="list-disc pl-0 md:pl-5 space-y-3">
                <li>
                  Developing abilities to manage emergencies and national
                  disasters
                </li>
                <li>Practicing national integration and social accord</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OverviewImpacting;
