import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const policiesOnQualityEducationData: PolicyPageData = {
  title: "Policies on Quality Education",
  heroImage: "/images/sustainability/sdg/quality-education.jpg",
  backLink: "/sdg-4-quality-education",
  policies: [
    {
      id: "policy-1",
      title:
        "University Lifelong Learning Access Policy of K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-quality-education/university-lifelong-learning-access-policy-of-kr-mangalam-university.pdf",
    },
    {
      id: "policy-2",
      title: "Revised Lifelong Learning Access Policy 2023-24",
      url: "https://www.krmangalam.edu.in/pdfs/sdg/policy-on-quality-education/Revised-Lifelong-Learning-Access-Policy-2023-24.pdf",
    },
  ],
};
