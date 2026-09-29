import { PolicyPageData, PolicyItem } from "../shared-policies";

export type PolicyLinkItem = PolicyItem;

export const mouOnAffordableAndCleanEnergyData: PolicyPageData = {
    title: "MoU on Affordable and Clean Energy",
    heroImage: "/images/sustainability/sdg/affordable-and-clean-energy.jpg",
    backLink: "/sdg-7-affordable-and-clean-energy",
    policies: [
        {
            id: "mou-1",
            title: "MoU with Climate Project",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/events/sdg-7/MOU-Climate-Project.pdf",
        },
        {
            id: "mou-2",
            title: "MoU Hazardous waste scrap disposal",
            url: "https://www.krmangalam.edu.in/pdfs/sdg/events/sdg-7/MoU-Hazardous-waste-scrap-disposal.pdf",
        },
    ],
};
