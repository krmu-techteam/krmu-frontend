import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const policyOnAffordableAndCleanEnergyData: PolicyPageData = {
    title: "Policies on Affordable and Clean Energy",
    heroImage: "/images/sustainability/sdg/affordable-and-clean-energy.jpg",
    backLink: "/sdg-7-affordable-and-clean-energy",
    policies: [
        {
            id: "policy-1",
            title: "K.R. Mangalam University Sustainable Environment and Green Campus Policy",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/sdg-12/sdg-12-policy-K.R-Mangalam-University-Sustainable-Environment-and-Green-Campus-Policy.pdf",
        },
        {
            id: "policy-2",
            title: "Revised Sustainable Environment and Green Campus Policy Edition 2023",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/sdg-12/sdg-12-policy-Revised-Sustainable-Environment-and-Green-Campus-Policy-Edition-2023.pdf",
        },
    ],
};
