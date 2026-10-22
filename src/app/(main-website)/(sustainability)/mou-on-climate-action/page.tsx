import MouOnClimateActionView from "@/presentation/static-pages/sustainability/mou-on-climate-action";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MoU on Climate Action | K.R. Mangalam University",
    description:
        "Official Memorandum of Understanding (MoU) documents, climate partnerships, and environmental initiatives at K.R. Mangalam University.",
};

const MouOnClimateActionPage = () => {
    return <MouOnClimateActionView />;
};

export default MouOnClimateActionPage;
