import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const sdg6WaterConservationInitiativesData: PolicyPageData = {
    title: "Water Conservation Initiatives",
    heroImage: "/images/sustainability/sdg/clean-water-and-sanitation.jpg",
    backLink: "/sdg-6-clean-water-and-sanitation",
    policies: [
        {
            id: "initiative-1",
            title: "Rain Water Harvesting",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/events/sdg-6/Rain-Water-Harvesting.pdf",
        },
        {
            id: "initiative-2",
            title: "Borewell Recharge",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/events/sdg-6/Borewell-Recharge.pdf",
        },
        {
            id: "initiative-3",
            title: "Water Conservation Initiative Report",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/events/sdg-6/Water-Conservation-Initiative-Report.pdf",
        },
    ],
};
