import PoliciesOnGenderEqualityView from "@/presentation/static-pages/sustainability/policies-on-gender-equality";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policies on Gender Equality | K.R. Mangalam University",
    description:
        "Official policies and guidelines on gender equality, anti-discrimination, and HR manual at K.R. Mangalam University.",
};

const PoliciesOnGenderEqualityPage = () => {
    return <PoliciesOnGenderEqualityView />;
};

export default PoliciesOnGenderEqualityPage;
