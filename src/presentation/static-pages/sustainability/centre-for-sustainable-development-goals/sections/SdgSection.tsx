"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  const scrollToPanel = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140; // Generous offset ensuring top navbar never cuts off accordion headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => {
      const isOpening = prev !== id;
      if (isOpening) {
        setTimeout(() => {
          scrollToPanel(id);
        }, 150);
      }
      return isOpening ? id : null;
    });
  };

  const handleSelectDrawerTab = (id: string) => {
    setOpenAccordion(id);
    setIsDrawerOpen(false);

    // Initial smooth scroll as drawer closes
    setTimeout(() => {
      scrollToPanel(id);
    }, 150);

    // Re-adjust scroll position after accordion expansion animation completes
    setTimeout(() => {
      scrollToPanel(id);
    }, 450);
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
