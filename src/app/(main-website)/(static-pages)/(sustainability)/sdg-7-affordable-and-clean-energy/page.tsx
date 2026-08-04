import { Metadata } from "next";
import { Sdg7AffordableAndCleanEnergySection } from "@/presentation/static-pages/sustainability/sdg-7-affordable-and-clean-energy";

export const metadata: Metadata = {
  title: "SDG-7: Affordable and Clean Energy | K.R. Mangalam University",
  description:
    "K.R. Mangalam University is committed to SDG 7: Affordable and Clean Energy through solar adoption, energy efficiency, green campus audits, research, and sustainability awards.",
};

const SDG7AffordableAndCleanEnergyPage = () => {
  return <Sdg7AffordableAndCleanEnergySection />;
};

export default SDG7AffordableAndCleanEnergyPage;
