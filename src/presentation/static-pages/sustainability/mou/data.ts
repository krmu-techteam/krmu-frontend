import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const mouOnLifeBelowWaterData: PolicyPageData = {
    title: "MoU on Life Below Water",
    heroImage: "/images/sustainability/sdg/life-below-water.jpg",
    backLink: "/sdg-14-life-below-water",
    policies: [
        {
            id: "mou-1",
            title: "National Mission for Clean Ganga",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/goal-14/mou-118.pdf",
        },
        {
            id: "mou-2",
            title: "Insecticides (India) Limited (IIL)",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/goal-14/mou-160.pdf",
        },
    ],
};
