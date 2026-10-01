import { Metadata } from "next";
import {
    BannerSection,
    ProfileSection,
    RoleSection,
} from "@/presentation/static-pages/ombudsperson";

export const metadata: Metadata = {
    title: "Ombudsperson – K.R. Mangalam University",
    description:
        "Learn about the role of the Ombudsperson at KRMU, ensuring impartial resolution of complaints and fostering fairness and transparency for all stakeholders.",
    alternates: {
        canonical: "https://www.krmangalam.edu.in/ombudsperson",
    },
    openGraph: {
        title: "Ombudsperson – K.R. Mangalam University",
        description:
            "Learn about the role of the Ombudsperson at KRMU, ensuring impartial resolution of complaints and fostering fairness and transparency for all stakeholders.",
        url: "https://www.krmangalam.edu.in/ombudsperson",
        siteName: "K.R. Mangalam University",
        images: [
            {
                url: "https://krmangalam.edu.in/images/talwant-singh.jpeg",
                width: 800,
                height: 1000,
                alt: "Hon'ble Justice Talwant Singh - Ombudsperson",
            },
        ],
        type: "website",
    },
};

const OmbudspersonPage = () => {
    return (
        <div className="w-full min-h-screen text-white">
            {/* 1. Header Banner & Breadcrumbs (Hero background) */}
            <BannerSection />

            {/* 2. Ombudsperson Profile (Combined in ONE single box, no extra section bg) */}
            <ProfileSection />

            {/* 3. Role of the Ombudsperson (Clean layout, no extra section bg) */}
            <RoleSection />
        </div>
    );
};

export default OmbudspersonPage;
