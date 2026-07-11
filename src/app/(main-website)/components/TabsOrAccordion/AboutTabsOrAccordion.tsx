"use client";

import { useState, useEffect } from "react";
import AboutTabs from "../Tabs/AboutTabs";
import AboutAccordion from "../Accordion/AboutAccordion";
import { Advisory } from "@/lib/api/facAdv";

type Props = {
  data: Advisory[];
};

const AboutTabsOrAccordion = ({ data }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <AboutAccordion data={data}  /> : <AboutTabs data={data} />}</>;
};

export default AboutTabsOrAccordion;
