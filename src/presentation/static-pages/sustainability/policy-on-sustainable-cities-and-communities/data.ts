import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const policyOnSustainableCitiesAndCommunitiesData: PolicyPageData = {
    title: "Policy on Sustainable Cities and Communities",
    heroImage:
        "/images/sustainability/sdg/sustainable-cities-and-communities.jpg",
    backLink: "/sdg-11-sustainable-cities-and-communities",
    policies: [
        {
            id: "policy-1",
            title: "Sustainable Environment and Green Campus Policy",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-affordable-and-clean-energy/OFFICE-ORDER-KRMU-SUSTAINABLE-ENVIRONMENT-AND-GREEN-CAMPUS-POLICY.pdf",
        },
        {
            id: "policy-2",
            title: "Revised Sustainable Environment and Green Campus Policy",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-climate-action/Revised-Sustainable-Environment-and-Green-Campus-Policy-Edition-2023.pdf",
        },
    ],
};
