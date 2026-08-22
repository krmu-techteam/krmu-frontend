import PoliciesOnQualityEducationView from "@/presentation/static-pages/sustainability/policies-on-quality-education";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policies on Quality Education | K.R. Mangalam University",
    description:
        "Official policies and guidelines on quality education, lifelong learning access, and educational initiatives at K.R. Mangalam University.",
};

const PoliciesOnQualityEducationPage = () => {
    return <PoliciesOnQualityEducationView />;
};

export default PoliciesOnQualityEducationPage;
