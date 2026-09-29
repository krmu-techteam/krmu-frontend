import PolicyOnSustainableCitiesAndCommunitiesView from "@/presentation/static-pages/sustainability/policy-on-sustainable-cities-and-communities";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Policy on Sustainable Cities and Communities | K.R. Mangalam University",
    description:
        "Official policies on sustainable environment and green campus initiatives at K.R. Mangalam University.",
};

const PolicyOnSustainableCitiesAndCommunitiesPage = () => {
    return <PolicyOnSustainableCitiesAndCommunitiesView />;
};

export default PolicyOnSustainableCitiesAndCommunitiesPage;
