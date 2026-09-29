import PolicyOnCleanWaterAndSanitationView from "@/presentation/static-pages/sustainability/policy-on-clean-water-and-sanitation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policies Clean Water and Sanitation | K.R. Mangalam University",
    description:
        "Official policies on clean water, sanitation, sustainable environment and green campus at K.R. Mangalam University.",
};

const PolicyOnCleanWaterAndSanitationPage = () => {
    return <PolicyOnCleanWaterAndSanitationView />;
};

export default PolicyOnCleanWaterAndSanitationPage;
