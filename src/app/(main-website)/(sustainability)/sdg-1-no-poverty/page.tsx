import { Metadata } from "next";
import { Sdg1NoPovertySection } from "@/presentation/static-pages/sustainability/sdg-1-no-poverty";

export const metadata: Metadata = {
    title: "SDG-1: No Poverty | K.R. Mangalam University",
    description:
        "K.R. Mangalam University actively supports SDG Goal 1: No Poverty by promoting financial assistance, scholarships, inclusive education, and socioeconomic growth.",
};

const SDG1NoPovertyPage = () => {
    return <Sdg1NoPovertySection />;
};

export default SDG1NoPovertyPage;
