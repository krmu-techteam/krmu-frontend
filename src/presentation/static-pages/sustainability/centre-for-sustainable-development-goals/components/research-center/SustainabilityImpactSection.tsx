"use client";

import React from "react";

const SustainabilityImpactSection: React.FC = () => {
  const openSdgReportTab = () => {
    const element = document.getElementById("sustain-panel-14");
    if (element) {
      const button = element.querySelector<HTMLButtonElement>("button");
      if (button) {
        button.click();
      }
      setTimeout(() => {
        const headerOffset = 140;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 150);
    }
  };

  return (
    <div className="w-full text-white font-poppins space-y-10 sm:space-y-12 pt-4">
      {/* 1. Sustainability Research Impact Measurement */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight mb-4 leading-tight">
          Sustainability Research Impact Measurement
        </h2>

        <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
          <h3 className="font-bold text-white text-[16px] font-sans">
            Sustainability Research Impact
          </h3>

          <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
            K.R. Mangalam University adopts an outcome-driven approach to
            sustainability research, focusing on translating academic knowledge
            into practical solutions that support environmental protection,
            social inclusion, and sustainable economic development. The
            University promotes interdisciplinary research aligned with the
            Sustainable Development Goals through increasing scholarly
            publications, funded projects, innovation initiatives, and
            collaborative research partnerships at national and international
            levels.
          </p>

          <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
            Research outcomes are actively applied through pilot sustainability
            interventions, technology demonstrations, consultancy engagements,
            and policy advisory contributions. These initiatives contribute to
            institutional sustainability transformation as well as community
            development outcomes. By integrating research insights into campus
            practices such as renewable energy adoption, water conservation,
            waste circularity, and biodiversity enhancement, the University
            strengthens evidence-based sustainability governance and promotes
            climate-responsive development pathways.
          </p>

          <div className="text-[#00BAC2] italic font-medium text-sm sm:text-[16px] pt-2">
            For detailed research performance indicators and impact metrics,
            please refer to the{" "}
            <button
              type="button"
              onClick={openSdgReportTab}
              className="underline font-semibold hover:text-[#E7C268] cursor-pointer transition-colors"
            >
              SDG Annual Report section
            </button>
            .
          </div>
        </div>
      </section>

      {/* 2. Institutional Sustainability Impact & Integration */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight mb-4 leading-tight">
          Institutional Sustainability Impact &amp; Integration
        </h2>

        <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
          <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
            K.R. Mangalam University integrates sustainability principles into
            campus operations, infrastructure development, and stakeholder
            engagement initiatives to achieve measurable improvements in
            environmental performance and resource efficiency. The University
            has progressively enhanced renewable energy adoption,
            energy-efficient infrastructure, water conservation practices, and
            sustainable waste management systems as part of its commitment to
            responsible campus management.
          </p>

          <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
            Initiatives such as rainwater harvesting, wastewater reuse, green
            landscape development, and biodiversity enhancement contribute to
            strengthening ecological resilience and promoting sustainable
            behavioural practices among students and staff. By aligning
            sustainability research with institutional policies and operational
            planning, the University supports continuous performance improvement
            and advances its transition towards a low-carbon,
            resource-efficient, and environmentally responsible campus
            ecosystem.
          </p>

          <div className="text-[#00BAC2] italic font-medium text-sm sm:text-[16px] pt-2">
            For detailed research performance indicators and impact metrics,
            please refer to the{" "}
            <button
              type="button"
              onClick={openSdgReportTab}
              className="underline font-semibold hover:text-[#E7C268] cursor-pointer transition-colors"
            >
              SDG Annual Report section
            </button>
            .
          </div>
        </div>
      </section>

      {/* 3. Sustainability Governance */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight mb-4 leading-tight">
          <a
            href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Good_Governance_QS_e0ebe74a5c_6996e396c2.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white transition-all"
          >
            Sustainability Governance
          </a>
        </h2>

        <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent">
          <p className="text-white text-sm sm:text-[15px] font-normal leading-relaxed text-justify">
            K.R. Mangalam University has established a structured sustainability
            governance framework to guide planning, monitoring, and
            implementation of sustainability initiatives across academic and
            administrative functions. Sustainability priorities are overseen by
            an institutional committee under senior leadership, ensuring
            coordination among departments, research centres, operational units,
            and student engagement platforms. Regular performance reviews are
            conducted to monitor progress against sustainability indicators
            related to energy efficiency, water management, waste reduction,
            biodiversity conservation, and social sustainability initiatives.
            This governance approach promotes transparency, stakeholder
            participation, and continuous institutional improvement aligned with
            national and global sustainability priorities.
          </p>
        </div>
      </section>

      {/* 4. Governance & Implementation Mechanism */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight mb-4 leading-tight">
          Governance &amp; Implementation Mechanism
        </h2>

        <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
          <p className="text-white text-sm sm:text-[15px] font-normal leading-relaxed text-justify">
            The University operationalises sustainability policies through
            coordinated action plans supported by defined roles, monitoring
            systems, and performance evaluation mechanisms. Sustainability
            initiatives are implemented across functional domains including
            energy management, water conservation, green infrastructure
            development, and community engagement programmes.
          </p>

          <p className="text-white text-sm sm:text-[15px] font-normal leading-relaxed text-justify">
            Institutional monitoring tools such as sustainability dashboards,
            internal reviews, and annual reporting processes enable tracking of
            key performance indicators and benchmarking with recognised
            sustainability frameworks. Through this integrated implementation
            mechanism, the University reinforces accountability, strengthens
            strategic sustainability commitment, and fosters a culture of
            environmental responsibility and inclusive development across the
            campus ecosystem.
          </p>

          <div className="text-[#00BAC2] italic font-medium text-sm sm:text-[16px] pt-2">
            Detailed sustainability policies, governance frameworks, and
            performance reports are available in the{" "}
            <button
              type="button"
              onClick={openSdgReportTab}
              className="underline font-semibold hover:text-[#E7C268] cursor-pointer transition-colors"
            >
              SDG Annual Report section
            </button>
            .
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityImpactSection;
