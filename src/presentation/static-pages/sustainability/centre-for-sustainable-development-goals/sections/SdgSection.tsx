"use client";

import React, { useState, useEffect } from "react";
import {
  FloatingReportsButton,
  ReportsDrawer,
  SdgBadgeGrid,
  SdgCertificateOverview,
  SdgAccordionList,
  SdgGoalsFooterSection,
} from "../components";

const SDGSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "sustain-panel-1",
  );
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerEl =
        document.getElementById("main-footer") ||
        document.querySelector("footer");
      let isFooterVisible = false;

      if (footerEl) {
        const footerTop = footerEl.getBoundingClientRect().top;
        if (footerTop <= window.innerHeight - 80) {
          isFooterVisible = true;
        }
      }

      setShowFloatingButton(!isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const handleSelectDrawerTab = (id: string) => {
    setOpenAccordion(id);
    setIsDrawerOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section className="w-full text-white font-poppins py-12 md:py-16 overflow-hidden relative">
      {/* Floating Left REPORTS Button */}
      <FloatingReportsButton
        show={showFloatingButton}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Slide-out Left Sidebar Drawer */}
      <ReportsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeAccordion={openAccordion}
        onSelectTab={handleSelectDrawerTab}
      />

      {/* Main Container */}
      <div className="max-w-[1380px] 2xl:max-w-[1530px] mx-auto px-4 md:px-6 lg:px-16 relative">
        {/* Top Section: 6 SDG Badge Cards + Certificate & Text */}
        <div className="mb-12">
          <SdgBadgeGrid />
          <SdgCertificateOverview />
        </div>

        {/* 17 Accordion Panels List */}
        <SdgAccordionList
          openAccordion={openAccordion}
          onToggleAccordion={toggleAccordion}
        />

        {/* Bottom Section: SDG Goals Grid + KRMU Group Photo */}
        <SdgGoalsFooterSection />
      </div>
    </section>
  );
};

export default SDGSection;
