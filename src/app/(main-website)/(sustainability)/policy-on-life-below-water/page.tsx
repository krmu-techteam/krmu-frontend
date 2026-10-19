import PolicyOnLifeBelowWaterView from "@/presentation/static-pages/sustainability/policy-on-life-below-water";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policies on Life Below Water | K.R. Mangalam University",
    description:
        "Official policies on Life Below Water and aquatic ecosystems at K.R. Mangalam University.",
};

const PolicyOnLifeBelowWaterPage = () => {
    return <PolicyOnLifeBelowWaterView />;
};

export default PolicyOnLifeBelowWaterPage;
