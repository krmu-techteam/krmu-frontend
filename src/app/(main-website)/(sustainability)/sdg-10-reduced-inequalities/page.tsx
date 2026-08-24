import { Metadata } from "next";
import { Sdg10ReducedInequalitiesSection } from "@/presentation/static-pages/sustainability/sdg-10-reduced-inequalities";

export const metadata: Metadata = {
    title: "SDG-10: Reduced Inequalities | K.R. Mangalam University",
    description:
        "K.R. Mangalam University actively supports SDG 10: Reduced Inequalities through equal opportunity policies, scholarships, inclusive infrastructure, and community outreach.",
};

const Sdg10ReducedInequalitiesPage = () => {
    return <Sdg10ReducedInequalitiesSection />;
};

export default Sdg10ReducedInequalitiesPage;
