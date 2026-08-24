import { Metadata } from "next";
import { Sdg9IndustryInnovationAndInfrastructureSection } from "@/presentation/static-pages/sustainability/sdg-9-industry-innovation-and-infrastructure";

export const metadata: Metadata = {
    title: "SDG-9: Industry, Innovation, and Infrastructure | K.R. Mangalam University",
    description:
        "K.R. Mangalam University actively supports SDG 9: Industry, Innovation, and Infrastructure through resilient infrastructure, research excellence, University Spin-Offs, and technological advancement.",
};

const Sdg9IndustryInnovationAndInfrastructurePage = () => {
    return <Sdg9IndustryInnovationAndInfrastructureSection />;
};

export default Sdg9IndustryInnovationAndInfrastructurePage;
