import { Metadata } from "next";
import { Sdg11SustainableCitiesAndCommunitiesSection } from "@/presentation/static-pages/sustainability/sdg-11-sustainable-cities-and-communities";

export const metadata: Metadata = {
    title: "SDG-11: Sustainable Cities and Communities | K.R. Mangalam University",
    description:
        "K.R. Mangalam University actively supports SDG 11: Sustainable Cities and Communities through smart technologies, green architecture, heritage preservation, and sustainable urban living.",
};

const Sdg11SustainableCitiesAndCommunitiesPage = () => {
    return <Sdg11SustainableCitiesAndCommunitiesSection />;
};

export default Sdg11SustainableCitiesAndCommunitiesPage;
