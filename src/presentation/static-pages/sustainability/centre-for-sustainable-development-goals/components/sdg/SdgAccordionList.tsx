"use client";

import React from "react";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/common/Button";
import ResearchCenterSection from "../../sections/ResearchCenterSection";
import {
  sustainTriggers,
  accordionVariants,
  wasteManagementData,
  waterConservationData,
  greenCampusData,
  ecoFriendlyTransportData,
  barrierFreeData,
  socialResponsibilityData,
  codeOfConductData,
  bestPracticesData,
  institutionalDistinctivenessData,
  goodGovernanceData,
  socialImpactData,
  environmentSustainabilityData,
  campusHealthData,
  knowledgeExchangeData,
} from "./data";

interface SdgAccordionListProps {
  openAccordion: string | null;
  onToggleAccordion: (id: string) => void;
}

const SdgAccordionList: React.FC<SdgAccordionListProps> = ({
  openAccordion,
  onToggleAccordion,
}) => {
  // Energy Conservation Measures split data helper
  const energyConservationData = {
    topReports: [
      {
        label: "9001-2025",
        url: "https://krmangalam.edu.in/pdfs/9001-2025-1.pdf",
      },
      {
        label: "Energy Audit - KRMU - 23-05-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-krmu-23-05-2025.pdf",
      },
      {
        label: "Environmental Audit - KRMU - 23-05-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environmental-audit-krmu-23-05-2025.pdf",
      },
      {
        label: "Green Audit - KRMU - 23-05-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/green-audit-krmu-23-05-2025.pdf",
      },
      {
        label: "ISO 50001-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/iso-50001-2025.pdf",
      },
      {
        label: "ISO14001-2025",
        url: "https://krmangalam.edu.in/pdfs/sustainable/iso14001-2025.pdf",
      },
      {
        label: "ISO Certificates",
        url: "https://krmangalam.edu.in/pdfs/sustainable/iso-certificates.pdf",
      },
    ],
    energyAuditReports: [
      {
        label: "Energy Audit Report 2019",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2019.pdf",
      },
      {
        label: "Energy Audit Report 2020",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2020.pdf",
      },
      {
        label: "Energy Audit Report 2021",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2021.pdf",
      },
      {
        label: "Energy Audit Report 2022",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2022.pdf",
      },
      {
        label: "Energy Audit Report 2023",
        url: "https://krmangalam.edu.in/pdfs/sustainable/energy-audit-report-2023.pdf",
      },
    ],
    environmentalAuditReports: [
      {
        label: "Environmental Audit Report 2019",
        url: "https://krmangalam.edu.in/pdfs/sustainable/enviromenta-audit-report-2019.pdf",
      },
      {
        label: "Environmental Audit Report 2020",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environment-audit-report-2020.pdf",
      },
      {
        label: "Environmental Audit Report 2021",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environment-audit-report-2021.pdf",
      },
      {
        label: "Environmental Audit Report 2022",
        url: "https://krmangalam.edu.in/pdfs/sustainable/enviroment-audit-report-2022.pdf",
      },
      {
        label: "Environmental Audit Report 2023",
        url: "https://krmangalam.edu.in/pdfs/sustainable/environment-audit-report-2023.pdf",
      },
    ],
    bottomReports: [
      {
        label: "Solar Energy",
        url: "https://krmangalam.edu.in/pdfs/sustainable/solar-write-up.pdf",
      },
      {
        label: "LED Conservation",
        url: "https://krmangalam.edu.in/pdfs/sustainable/led-conservation.pdf",
      },
      {
        label: "D. Sensor",
        url: "https://krmangalam.edu.in/pdfs/sustainable/d-sensor.pdf",
      },
    ],
  };

  return (
    <div className="space-y-4">
      {sustainTriggers.map((trigger) => {
        const isOpen = openAccordion === trigger.id;
        return (
          <div
            key={trigger.id}
            id={trigger.id}
            className="w-full rounded-[4px] overflow-hidden scroll-mt-36"
          >
            {/* Accordion Header Bar */}
            <button
              onClick={() => onToggleAccordion(trigger.id)}
              className={`w-full h-[72px] px-6 flex items-center justify-between text-left font-normal text-lg sm:text-[22px] text-white cursor-pointer rounded-[4px] border transition-all duration-300 ${
                isOpen
                  ? "border-[#666666] bg-[#21212199]"
                  : "border-[#444444] bg-[#21212199] hover:bg-[#212121]/90 hover:border-[#777777]"
              }`}
            >
              <span className="tracking-wide">{trigger.label}</span>
              <div className="p-1.5 rounded-full bg-white/10 text-white shrink-0 ml-4">
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {/* Accordion Content Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={accordionVariants}
                  className="overflow-hidden"
                >
                  <div className="py-6 sm:py-8 bg-transparent">
                    {trigger.id === "sustain-panel-1" ? (
                      /* Research Center on Sustainability Section */
                      <ResearchCenterSection />
                    ) : trigger.id === "sustain-panel-14" ? (
                      /* SDG Annual Report Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {trigger.reports?.map((report, idx) => (
                            <Button
                              key={idx}
                              href={report.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{report.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-3" ? (
                      /* Energy Conservation Measures Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-6">
                        <div>
                          <h2 className="text-2xl sm:text-3xl md:text-[27px] font-normal text-white mb-4">
                            Energy Conservation Measures
                          </h2>
                        </div>

                        {/* Descriptive Paragraphs */}
                        <div className="space-y-4 text-gray-300 text-sm sm:text-base font-light leading-relaxed text-justify">
                          <p>
                            K.R. Mangalam University is deeply committed to
                            sustainability, integrating comprehensive facilities
                            for alternative energy sources and energy
                            conservation. Guided by a forward-looking Solar
                            Energy Policy and a Biogas Plan, the institution has
                            adopted an advanced Energy Management System to
                            monitor and optimize energy use, assess costs, and
                            ensure reliable supply. These measures reflect the
                            university’s proactive approach to building a
                            resource-efficient campus.
                          </p>
                          <p>
                            To further its green initiatives, the university
                            actively implements modern energy conservation
                            technologies and strategies aimed at minimizing
                            consumption. By reducing dependency on conventional
                            energy sources and embracing renewable solutions,
                            the campus not only ensures operational efficiency
                            but also upholds its responsibility toward climate
                            action and long-term ecological balance.
                          </p>
                          <p>
                            The institution’s dedication to environmental
                            stewardship is also evident in its efforts beyond
                            energy management. Having achieved a zero-pollution
                            status through strict adherence to sustainability
                            benchmarks, K.R. Mangalam University has submitted
                            the necessary data and credentials for external
                            scrutiny. Its rainwater harvesting system
                            effectively recharges the soil and replenishes the
                            underground water table, creating a self-sufficient
                            ecosystem that supports both the campus and the
                            surrounding community.
                          </p>
                        </div>

                        {/* Top ISO & Audit Buttons */}
                        <div className="flex flex-wrap gap-3">
                          {energyConservationData.topReports.map(
                            (report, idx) => (
                              <Button
                                key={idx}
                                href={report.url}
                                target="_blank"
                                variant="outline"
                                icon={Download}
                                iconPosition="left"
                                className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                              >
                                <span>{report.label}</span>
                              </Button>
                            ),
                          )}
                        </div>

                        {/* 2-Column Audit Flex Group (Equal 370px Width Buttons, Single Line Text) */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                          {/* Column A (Left): Energy Audit Reports 2019 - 2023 */}
                          <div className="flex flex-col gap-3">
                            {energyConservationData.energyAuditReports.map(
                              (report, idx) => (
                                <Button
                                  key={idx}
                                  href={report.url}
                                  target="_blank"
                                  variant="outline"
                                  icon={Download}
                                  iconPosition="left"
                                  className="!w-full max-w-[370px] sm:!w-[370px] whitespace-nowrap justify-between border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-5 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                                >
                                  <span>{report.label}</span>
                                </Button>
                              ),
                            )}
                          </div>

                          {/* Column B (Right): Environmental Audit Reports 2019 - 2023 */}
                          <div className="flex flex-col gap-3">
                            {energyConservationData.environmentalAuditReports.map(
                              (report, idx) => (
                                <Button
                                  key={idx}
                                  href={report.url}
                                  target="_blank"
                                  variant="outline"
                                  icon={Download}
                                  iconPosition="left"
                                  className="!w-full max-w-[370px] sm:!w-[370px] whitespace-nowrap justify-between border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-5 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                                >
                                  <span>{report.label}</span>
                                </Button>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Solar Energy Button */}
                        <div className="pt-2">
                          <Button
                            href="https://krmangalam.edu.in/pdfs/sustainable/solar-write-up.pdf"
                            target="_blank"
                            variant="outline"
                            icon={Download}
                            iconPosition="left"
                            className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                          >
                            <span>Solar Energy</span>
                          </Button>
                        </div>

                        {/* Power Efficient Section Title & Button */}
                        <div className="pt-2 space-y-3">
                          <h3 className="text-2xl sm:text-3xl md:text-[27px] font-normal text-white mb-4">
                            Power efficient
                          </h3>
                          <div>
                            <Button
                              href="https://krmangalam.edu.in/pdfs/sustainable/led-conservation.pdf"
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>LED Conservation</span>
                            </Button>
                          </div>
                        </div>

                        {/* Sensor Section Title & Button */}
                        <div className="pt-2 space-y-3">
                          <h3 className="text-2xl sm:text-3xl md:text-[27px] font-normal text-white mb-4">
                            Sensor
                          </h3>
                          <div>
                            <Button
                              href="https://krmangalam.edu.in/pdfs/sustainable/d-sensor.pdf"
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>D. Sensor</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-4" ? (
                      /* Waste Management Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        {wasteManagementData.sections.map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                              {section.title}
                            </h2>
                            <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                              <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* Waste Management Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                          {wasteManagementData.images.map((imgItem, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center"
                            >
                              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-1.5 transition-all duration-300 hover:border-white/30">
                                <div className="relative h-full w-full overflow-hidden rounded-[6px]">
                                  <img
                                    src={imgItem.src}
                                    alt={imgItem.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                              {imgItem.caption && (
                                <h5 className="mt-2 text-center text-sm font-medium text-white/90">
                                  {imgItem.caption}
                                </h5>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-5" ? (
                      /* Water Conservation Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        {waterConservationData.sections.map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                              {section.title}
                            </h2>
                            <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                              <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* Water Conservation Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                          {waterConservationData.images.map((imgItem, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center"
                            >
                              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-1.5 transition-all duration-300 hover:border-white/30">
                                <div className="relative h-full w-full overflow-hidden rounded-[6px]">
                                  <img
                                    src={imgItem.src}
                                    alt={imgItem.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                              {imgItem.caption && (
                                <h5 className="mt-2 text-center text-sm font-medium text-white/90">
                                  {imgItem.caption}
                                </h5>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-6" ? (
                      /* Green Campus Initiatives Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        {/* Main Title & Overview */}
                        <div className="space-y-4">
                          <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                            {greenCampusData.mainTitle}
                          </h2>
                          <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                            {greenCampusData.overviewParagraphs.map(
                              (paragraph, idx) => (
                                <p
                                  key={idx}
                                  className={
                                    paragraph.includes("Following initiatives")
                                      ? "text-[#00BAC2] italic font-medium text-sm sm:text-[16px] pt-2"
                                      : "text-white text-sm sm:text-[16px] font-normal leading-[24px]"
                                  }
                                >
                                  {paragraph}
                                </p>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Initiatives Sections */}
                        {greenCampusData.sections.map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                              {section.title}
                            </h2>
                            <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                              <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                                {section.description}
                              </p>
                              {section.listItems && (
                                <ul className="list-disc list-outside text-white text-sm sm:text-[16px] font-normal leading-[24px] pt-1 space-y-2.5 pl-5">
                                  {section.listItems.map((item, itemIdx) => (
                                    <li key={itemIdx}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Green Campus Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                          {greenCampusData.images.map((imgItem, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center"
                            >
                              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-1.5 transition-all duration-300 hover:border-white/30">
                                <div className="relative h-full w-full overflow-hidden rounded-[6px]">
                                  <img
                                    src={imgItem.src}
                                    alt={imgItem.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                              {imgItem.caption && (
                                <h5 className="mt-2 text-center text-sm font-medium text-white/90">
                                  {imgItem.caption}
                                </h5>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Policy PDF Link Button */}
                        {greenCampusData.policyButton && (
                          <div className="pt-3">
                            <Button
                              href={greenCampusData.policyButton.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{greenCampusData.policyButton.label}</span>
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : trigger.id === "sustain-panel-13" ? (
                      /* Eco Friendly Transport Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        {/* Policy Meta Header */}
                        <div className="space-y-1 text-sm sm:text-base text-white/90">
                          <p className="font-bold text-white text-base sm:text-lg font-sans">
                            {ecoFriendlyTransportData.header.handbook}
                          </p>
                          <p className="text-white text-sm sm:text-[16px]">
                            {ecoFriendlyTransportData.header.section}
                          </p>
                          <p className="text-white text-sm sm:text-[16px]">
                            {ecoFriendlyTransportData.header.policyTitle}
                          </p>
                          <p className="text-white/80 text-sm pt-1">
                            {ecoFriendlyTransportData.header.effectiveFrom} |{" "}
                            <strong className="text-white">
                              {ecoFriendlyTransportData.header.reviewCycle}
                            </strong>
                          </p>
                        </div>

                        {/* Policy Sections */}
                        {ecoFriendlyTransportData.sections.map(
                          (section, idx) => (
                            <div key={idx} className="space-y-4">
                              <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                                {section.title}
                              </h2>
                              <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                                {section.description && (
                                  <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                                    {section.description}
                                  </p>
                                )}
                                {section.listItems && (
                                  <ul className="list-disc list-outside text-white text-sm sm:text-[16px] font-normal leading-[24px] space-y-2.5 pl-5">
                                    {section.listItems.map((item, itemIdx) => (
                                      <li key={itemIdx}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                                {section.subsections && (
                                  <div className="space-y-4 pt-1">
                                    {section.subsections.map((sub, subIdx) => (
                                      <div key={subIdx} className="space-y-2">
                                        <h3 className="font-bold text-white text-[16px] font-sans">
                                          {sub.subTitle}
                                        </h3>
                                        <ul className="list-disc list-outside text-white text-sm sm:text-[16px] font-normal leading-[24px] space-y-2.5 pl-5">
                                          {sub.listItems.map(
                                            (item, itemIdx) => (
                                              <li key={itemIdx}>{item}</li>
                                            ),
                                          )}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ),
                        )}

                        {/* Document Control Summary */}
                        <div className="space-y-4">
                          <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                            {ecoFriendlyTransportData.documentControl.title}
                          </h2>
                          <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-3">
                            <p className="text-sm text-white/90">
                              <span className="font-bold text-white">
                                Version:
                              </span>{" "}
                              {ecoFriendlyTransportData.documentControl.version}{" "}
                              |{" "}
                              <span className="font-bold text-white">
                                Date:
                              </span>{" "}
                              {ecoFriendlyTransportData.documentControl.date}
                            </p>
                            <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                              {
                                ecoFriendlyTransportData.documentControl
                                  .description
                              }
                            </p>
                          </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                          {ecoFriendlyTransportData.images.map(
                            (imgItem, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col items-center"
                              >
                                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-1.5 transition-all duration-300 hover:border-white/30">
                                  <div className="relative h-full w-full overflow-hidden rounded-[6px]">
                                    <img
                                      src={imgItem.src}
                                      alt={imgItem.alt}
                                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-7" ? (
                      /* Barrier Free Environment Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        {/* Main Title & Overview */}
                        <div className="space-y-4">
                          <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                            {barrierFreeData.mainTitle}
                          </h2>
                          <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                            <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                              {barrierFreeData.mainDescription}
                            </p>
                          </div>
                        </div>

                        {/* Accessibility Sections */}
                        {barrierFreeData.sections.map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                              {section.title}
                            </h2>
                            <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                              {section.description && (
                                <p className="text-white text-sm sm:text-[16px] font-normal leading-[24px]">
                                  {section.description}
                                </p>
                              )}
                              {section.items && (
                                <ul className="list-disc list-outside text-white text-sm sm:text-[16px] font-normal leading-[24px] space-y-2.5 pl-5">
                                  {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <strong className="text-white font-bold">
                                        {item.label}:{" "}
                                      </strong>
                                      <span>{item.text}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Barrier Free Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                          {barrierFreeData.images.map((imgItem, idx) => (
                            <div
                              key={idx}
                              className="flex flex-col items-center"
                            >
                              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-white/10 bg-white/5 p-1.5 transition-all duration-300 hover:border-white/30">
                                <div className="relative h-full w-full overflow-hidden rounded-[6px]">
                                  <img
                                    src={imgItem.src}
                                    alt={imgItem.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              </div>
                              {imgItem.caption && (
                                <h5 className="mt-2 text-center text-sm font-medium text-white/90">
                                  {imgItem.caption}
                                </h5>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-8" ? (
                      /* Social Responsibility and Harmony Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        <div className="space-y-4">
                          <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                            {socialResponsibilityData.mainTitle}
                          </h2>
                          <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                            {socialResponsibilityData.paragraphs.map(
                              (paragraph, idx) => (
                                <p
                                  key={idx}
                                  className="text-white text-sm sm:text-[16px] font-normal leading-[24px]"
                                >
                                  {paragraph}
                                </p>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Report PDF Link Button */}
                        {socialResponsibilityData.reportButton && (
                          <div className="pt-3">
                            <Button
                              href={socialResponsibilityData.reportButton.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>
                                {socialResponsibilityData.reportButton.label}
                              </span>
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : trigger.id === "sustain-panel-9" ? (
                      /* Code of Conduct Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-[27px] font-normal text-white mb-2">
                          {codeOfConductData.mainTitle}
                        </h2>
                        <div className="space-y-4 pt-2">
                          <div className="flex flex-wrap gap-4">
                            {codeOfConductData.reports
                              .slice(0, 2)
                              .map((report, idx) => (
                                <Button
                                  key={idx}
                                  href={report.url}
                                  target="_blank"
                                  variant="outline"
                                  icon={Download}
                                  iconPosition="left"
                                  className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                                >
                                  <span>{report.label}</span>
                                </Button>
                              ))}
                          </div>
                          <div className="flex flex-wrap gap-4">
                            {codeOfConductData.reports
                              .slice(2, 4)
                              .map((report, idx) => (
                                <Button
                                  key={idx + 2}
                                  href={report.url}
                                  target="_blank"
                                  variant="outline"
                                  icon={Download}
                                  iconPosition="left"
                                  className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                                >
                                  <span>{report.label}</span>
                                </Button>
                              ))}
                          </div>
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-10" ? (
                      /* Best Practices Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {bestPracticesData.reports.map((report, idx) => (
                            <Button
                              key={idx}
                              href={report.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{report.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-11" ? (
                      /* Institutional Distinctiveness Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {institutionalDistinctivenessData.reports.map(
                            (report, idx) => (
                              <Button
                                key={idx}
                                href={report.url}
                                target="_blank"
                                variant="outline"
                                icon={Download}
                                iconPosition="left"
                                className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                              >
                                <span>{report.label}</span>
                              </Button>
                            ),
                          )}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-15a" ? (
                      /* Good Governance Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {goodGovernanceData.reports.map((report, idx) => (
                            <Button
                              key={idx}
                              href={report.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{report.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-16a" ? (
                      /* Social Impact Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {socialImpactData.reports.map((report, idx) => (
                            <Button
                              key={idx}
                              href={report.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{report.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-17a" ? (
                      /* Environment Sustainability Report Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {environmentSustainabilityData.reports.map(
                            (report, idx) => (
                              <Button
                                key={idx}
                                href={report.url}
                                target="_blank"
                                variant="outline"
                                icon={Download}
                                iconPosition="left"
                                className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                              >
                                <span>{report.label}</span>
                              </Button>
                            ),
                          )}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-18a" ? (
                      /* Campus Health Wellness and Well Being Ecosystem Detailed Layout */
                      <div className="pt-2 pb-2 text-left">
                        <div className="flex flex-wrap gap-4 pt-2">
                          {campusHealthData.reports.map((report, idx) => (
                            <Button
                              key={idx}
                              href={report.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{report.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : trigger.id === "sustain-panel-19a" ? (
                      /* Knowledge Exchange Detailed Layout */
                      <div className="pt-2 pb-2 text-left space-y-8">
                        <div className="space-y-4">
                          <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight">
                            {knowledgeExchangeData.mainTitle}
                          </h2>
                          <div className="w-full border border-[#0D7377] rounded-[12px] p-6 sm:p-8 bg-transparent space-y-4">
                            {knowledgeExchangeData.paragraphs.map(
                              (paragraph, idx) => (
                                <p
                                  key={idx}
                                  className="text-white text-sm sm:text-[16px] font-normal leading-[24px]"
                                >
                                  {paragraph}
                                </p>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Sub section title */}
                        {knowledgeExchangeData.sectionTitle && (
                          <h2 className="text-2xl sm:text-3xl lg:text-[29px] font-serif font-bold text-white tracking-tight leading-tight pt-2">
                            {knowledgeExchangeData.sectionTitle}
                          </h2>
                        )}

                        {/* PDF Reports List */}
                        <div className="flex flex-wrap gap-4 pt-2">
                          {knowledgeExchangeData.reports.map((report, idx) => (
                            <Button
                              key={idx}
                              href={report.url}
                              target="_blank"
                              variant="outline"
                              icon={Download}
                              iconPosition="left"
                              className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                            >
                              <span>{report.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Sustainability Categories Reports & Information Area */
                      <div className="pt-2 pb-2 text-left">
                        {/* Report PDF Buttons List */}
                        {trigger.reports && trigger.reports.length > 0 && (
                          <div className="flex flex-wrap gap-4">
                            {trigger.reports.map((report, idx) => (
                              <Button
                                key={idx}
                                href={report.url}
                                target="_blank"
                                variant="outline"
                                icon={Download}
                                iconPosition="left"
                                className="!w-auto !inline-flex border !capitalize bg-white/5 hover:border-white/70 text-white hover:text-black font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 min-h-[45px] transition-all duration-300 shadow-md group"
                              >
                                <span>{report.label}</span>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default SdgAccordionList;
