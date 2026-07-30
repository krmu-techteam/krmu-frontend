"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sdgClusters, ClusterData } from "./sdgDomainsData";

const SdgResearchDomains: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<ClusterData | null>(
    null,
  );

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCluster) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCluster]);

  return (
    <div className="w-full text-white pt-8 sm:pt-10">
      {/* Top Gradient Divider Line */}
      <div className="w-full h-[1px] bg-[linear-gradient(90deg,#1A1A1A_0%,#FFFFFF_48.08%,#1A1A1A_100%)] opacity-80 mb-10" />

      {/* 1. Header Title & Intro Description */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-[22px] font-bold text-white mb-3 font-sans tracking-tight">
          SDG-Aligned Research Domains
        </h2>
        <p className="text-white/90 font-poppins text-[16px] leading-[24px] text-justify font-light">
          The Centre follows an integrated thematic research framework aligned
          with the University’s Institutional Sustainability Governance Model,
          structured across the five strategic clusters of People, Prosperity,
          Planet, Peace, and Partnership. These domains aim to generate
          knowledge, innovation, and actionable solutions contributing to
          sustainable development outcomes.
        </p>
      </div>

      {/* 2. 5 Strategic Cluster Cards Grid (3-column layout on desktop as per image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {sdgClusters.map((cluster) => {
          return (
            <div
              key={cluster.id}
              style={{
                background: "linear-gradient(90deg, #0D7377 0%, #002D44 100%)",
              }}
              className="rounded-[10px] p-4 md:p-6 flex flex-col items-center justify-between min-h-[120px]"
            >
              <h3 className="text-white font-bold text-[15px] sm:text-[16px] text-center tracking-wide font-sans leading-snug uppercase mb-4">
                {cluster.title}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCluster(cluster);
                }}
                className="px-6 py-1.5 rounded-full border border-[#86ADAF] hover:border-white text-white hover:bg-white/10 text-xs sm:text-[14px] font-medium transition-all duration-200 cursor-pointer"
              >
                View Detail
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. Modal Dialog for Cluster Detail */}
      <AnimatePresence>
        {selectedCluster && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70"
              onClick={() => setSelectedCluster(null)}
            />

            {/* Light Modal Window (exact specs: bg #FFFFFF, snapshot card #F7F3E8, header #0D7377) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[1200px] bg-white text-black rounded-[10px] p-6 sm:p-8 z-50 max-h-[90vh] overflow-y-auto custom-scrollbar my-auto"
            >
              {/* Top-Right Close Icon Button */}
              <button
                onClick={() => setSelectedCluster(null)}
                className="absolute top-6 right-6 text-black/70 hover:text-black p-1 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Main Heading & Description */}
              <div className="pr-8 mb-6">
                <h2 className="text-2xl sm:text-[32px] font-bold text-[#1A1A1A] font-sans leading-tight mb-2">
                  {selectedCluster.heading}
                </h2>
                <p className="text-[#333333] text-sm sm:text-[16px] font-normal leading-[24px]">
                  {selectedCluster.description}
                </p>
              </div>

              {/* Performance Snapshot Box (#F7F3E8 Light Beige Background - Full Bleed) */}
              <div className="-mx-6 sm:-mx-10 px-6 sm:px-10 py-6 bg-[#F7F3E8] mb-6 w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)]">
                <h3 className="text-[#1A1A1A] font-bold text-base sm:text-[18px] mb-3 font-sans">
                  {selectedCluster.snapshotTitle}
                </h3>
                <div className="w-full space-y-2 text-[#222222] text-[16px] font-normal">
                  {selectedCluster.snapshot.map((item, idx) => (
                    <p key={idx} className="leading-snug">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Performance Indicator Table Section */}
              {(selectedCluster.tableTitle ||
                (selectedCluster.tableRows &&
                  selectedCluster.tableRows.length > 0)) && (
                <div className="mb-3">
                  {selectedCluster.tableTitle && (
                    <h3 className="text-[#1A1A1A] font-bold text-lg font-sans">
                      {selectedCluster.tableTitle}
                    </h3>
                  )}
                  {selectedCluster.tableRows &&
                    selectedCluster.tableRows.length > 0 && (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm text-[#333333]">
                          <thead>
                            <tr className="bg-[#0D7377] text-white font-bold uppercase text-[12px]">
                              {selectedCluster.tableHeaders.map(
                                (header, idx) => (
                                  <th key={idx} className="py-3 px-4">
                                    {header}
                                  </th>
                                ),
                              )}
                            </tr>
                          </thead>
                          <tbody className="divide-y text-[14px] divide-gray-200 bg-[#f8f8f8]">
                            {selectedCluster.tableRows.map((row, rIdx) => {
                              const isNum = (val?: string) =>
                                val ? /^\d+$/.test(val.trim()) : false;
                              return (
                                <tr
                                  key={rIdx}
                                  className="hover:bg-[#f8f8f8] transition-colors"
                                >
                                  <td className="py-3.5 px-4 font-normal text-[#1A1A1A] max-w-[320px]">
                                    {row.indicator}
                                  </td>
                                  <td
                                    className={`py-3.5 px-4 text-left ${
                                      isNum(row.fy22_23)
                                        ? "text-[#009541] font-bold"
                                        : "text-[#333333]"
                                    }`}
                                  >
                                    {row.fy22_23 || ""}
                                  </td>
                                  <td
                                    className={`py-3.5 px-4 text-left ${
                                      isNum(row.fy23_24)
                                        ? "text-[#009541] font-bold"
                                        : "text-[#333333]"
                                    }`}
                                  >
                                    {row.fy23_24 || ""}
                                  </td>
                                  <td
                                    className={`py-3.5 px-4 text-left ${
                                      isNum(row.fy24_25)
                                        ? "text-[#009541] font-bold"
                                        : "text-[#333333]"
                                    }`}
                                  >
                                    {row.fy24_25 || ""}
                                  </td>
                                  <td className="py-3.5 px-4 font-normal text-[#333333]">
                                    {row.trend}
                                  </td>
                                  <td
                                    className={`py-3.5 px-4 text-left ${
                                      isNum(row.target25_26)
                                        ? "text-[#009541] font-bold"
                                        : "text-[#333333]"
                                    }`}
                                  >
                                    {row.target25_26 || ""}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                </div>
              )}

              {/* 4 Goal Cards Grid (sdg-goals-card-wrapper) */}
              {selectedCluster.cards && selectedCluster.cards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCluster.cards.map((card, cIdx) => (
                    <div
                      key={cIdx}
                      className="rounded-[10px] p-6 border border-[#9CC89B] bg-white"
                    >
                      <h4 className="text-[#1A1A1A] font-semibold text-[22px] mb-3 font-font-poppins">
                        {card.title}
                      </h4>
                      <ul className="space-y-1 text-[#222222] text-[16px] font-normal list-disc pl-5">
                        {card.items.map((item, iIdx) => (
                          <li key={iIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SdgResearchDomains;
