import { Metadata } from "next";
import { Sdg6CleanWaterAndSanitationSection } from "@/presentation/static-pages/sustainability/sdg-6-clean-water-and-sanitation";

export const metadata: Metadata = {
    title: "SDG-6: Clean Water and Sanitation | K.R. Mangalam University",
    description:
        "K.R. Mangalam University is committed to SDG Goal 6: Clean Water and Sanitation through sustainable water management, STP recycling, water conservation, and campus stewardship.",
};

const SDG6CleanWaterAndSanitationPage = () => {
    return <Sdg6CleanWaterAndSanitationSection />;
};

export default SDG6CleanWaterAndSanitationPage;
