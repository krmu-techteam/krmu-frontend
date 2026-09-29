import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const policiesOnGenderEqualityData: PolicyPageData = {
    title: "Policies on Gender Equality",
    heroImage: "/images/sustainability/sdg/gender-equality.jpg",
    backLink: "/sdg-5-gender-equality",
    policies: [
        {
            id: "policy-1",
            title: "Anti Discrimination Policy of K.R. Mangalam University",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-gender-equality/anti-discrimination-policy-of-kr-mangalam-university.pdf",
        },
        {
            id: "policy-2",
            title: "Revised Anti Discrimination Policy of K.R. Mangalam University",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-gender-equality/revised-anti-discrimination-policy-KRMU.pdf",
        },
        {
            id: "policy-3",
            title: "Revised HR Manual and Employment Policy Manual 2023 Edition",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-gender-equality/Revised-HR-Manual-and-Employment-Policy-Manual-2023-Edition.pdf",
        },
    ],
};
