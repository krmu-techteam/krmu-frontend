import MouOnLifeOnLandView from "@/presentation/static-pages/sustainability/mou-on-life-on-land";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MoU on Life on Land | K.R. Mangalam University",
    description:
        "Official Memorandum of Understanding (MoU) documents, partnerships, and environmental initiatives on Life on Land at K.R. Mangalam University.",
};

const MouOnLifeOnLandPage = () => {
    return <MouOnLifeOnLandView />;
};

export default MouOnLifeOnLandPage;
