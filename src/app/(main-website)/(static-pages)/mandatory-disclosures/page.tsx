import type { Metadata } from "next";
import {
    HeroSection,
    DisclosuresSection,
} from "@/presentation/static-pages/mandatory-disclosures";

export const metadata: Metadata = {
    title: "Mandatory Disclosures | K.R. Mangalam University",
    description:
        "Access K.R. Mangalam University mandatory disclosures, NIRF reports, statutes, AISHE, and official compliance documents.",
    keywords: "K.R. Mangalam University mandatory disclosures",
    alternates: {
        canonical: "https://www.krmangalam.edu.in/mandatory-disclosures",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function MandatoryDisclosuresPage() {
    return (
        <div className="w-full min-h-screen relative overflow-hidden pb-12">
            {/* Hero Section */}
            <HeroSection />

            {/* Disclosures Content */}
            <DisclosuresSection />
        </div>
    );
}
