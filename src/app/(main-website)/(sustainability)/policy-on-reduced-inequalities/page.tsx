import PolicyOnReducedInequalitiesView from "@/presentation/static-pages/sustainability/policy-on-reduced-inequalities";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policy on Reduced Inequalities | K.R. Mangalam University",
    description:
        "Official policies on anti-discrimination, Divyangjan inclusion, scholarships, and mental health & well-being at K.R. Mangalam University.",
};

const PolicyOnReducedInequalitiesPage = () => {
    return <PolicyOnReducedInequalitiesView />;
};

export default PolicyOnReducedInequalitiesPage;
