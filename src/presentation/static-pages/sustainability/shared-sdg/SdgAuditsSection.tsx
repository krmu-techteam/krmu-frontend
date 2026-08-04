"use client";

import React from "react";
import { Download } from "lucide-react";
import Button from "@/components/common/Button";
import { SdgAuditGroup } from "./types";

export interface SdgAuditsSectionProps {
  audits: SdgAuditGroup;
  accentColor?: string;
}

export const SdgAuditsSection: React.FC<SdgAuditsSectionProps> = ({
  audits,
}) => {
  const { mainAudits, gridAudits, isoCertificates } = audits;

  return (
    <section className="w-full text-white py-8">
      <div className="max-w-[1440px] mx-auto space-y-8 px-4 sm:px-6 md:px-10">
        {/* Main Audits Section */}
        <div className="space-y-4">
          {audits.title && (
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-serif md:text-[28px] font-semibold text-white">
                {audits.title}
              </h2>
            </div>
          )}

          {/* Top Featured Audits Row */}
          {mainAudits && mainAudits.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {mainAudits.map((item, idx) => (
                <Button
                  key={idx}
                  href={item.url}
                  target="_blank"
                  variant="outline"
                  icon={Download}
                  iconPosition="left"
                  className="!w-auto !inline-flex border border-white/20 hover:border-white/60 bg-[#0c1e2c]/60 hover:bg-white/10 text-white font-medium text-sm sm:text-base rounded-[4px] px-5 py-3 h-[45px] !normal-case tracking-normal transition-colors"
                >
                  {item.title}
                </Button>
              ))}
            </div>
          )}

          {/* Grid Audits List (Dynamic width according to text) */}
          {gridAudits && gridAudits.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {gridAudits.map((item, idx) => (
                <Button
                  key={idx}
                  href={item.url}
                  target="_blank"
                  variant="outline"
                  icon={Download}
                  iconPosition="left"
                  className="!w-auto !inline-flex border border-white/20 hover:border-white/60 bg-[#0c1e2c]/50 hover:bg-white/10 text-white font-medium text-xs sm:text-sm rounded-[4px] px-5 py-3 h-[45px] !normal-case tracking-normal transition-colors"
                >
                  {item.title}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* ISO Certificates Section */}
        {isoCertificates && isoCertificates.length > 0 && (
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-serif font-semibold text-white">
                ISO Certificates
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {isoCertificates.map((item, idx) => (
                <Button
                  key={idx}
                  href={item.url}
                  target="_blank"
                  variant="outline"
                  icon={Download}
                  iconPosition="left"
                  className="!w-auto !inline-flex border border-white/20 hover:border-white/60 bg-[#0c1e2c]/50 hover:bg-white/10 text-white font-medium text-xs sm:text-sm rounded-[4px] px-5 py-3 h-[45px] !normal-case tracking-normal transition-colors"
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
