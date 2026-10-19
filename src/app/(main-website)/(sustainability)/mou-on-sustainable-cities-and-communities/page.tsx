import MouOnSustainableCitiesAndCommunitiesView from "@/presentation/static-pages/sustainability/mou-on-sustainable-cities-and-communities";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MoU on Sustainable Cities and Communities | K.R. Mangalam University",
    description:
        "Official Memorandum of Understanding (MoU) on Sustainable Cities and Communities at K.R. Mangalam University.",
};

const MouOnSustainableCitiesAndCommunitiesPage = () => {
    return <MouOnSustainableCitiesAndCommunitiesView />;
};

export default MouOnSustainableCitiesAndCommunitiesPage;
