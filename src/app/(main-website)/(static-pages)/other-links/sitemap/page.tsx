import type { Metadata } from "next";
import {
    HeroSection,
    SitemapContentSection,
} from "@/presentation/static-pages/other-links/sitemap";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Website Sitemap | K.R. Mangalam University Gurugram",
        description:
            "Browse the complete sitemap of K.R. Mangalam University to easily find courses, academic departments, research hubs, admissions details, and administrative links.",
        alternates: {
            canonical: "https://www.krmangalam.edu.in/other-links/sitemap",
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: "Website Sitemap | K.R. Mangalam University Gurugram",
            description:
                "Browse the complete sitemap of K.R. Mangalam University to easily find courses, academic departments, research hubs, admissions details, and administrative links.",
            url: "https://www.krmangalam.edu.in/other-links/sitemap",
            siteName: "K.R. Mangalam University",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Website Sitemap | K.R. Mangalam University Gurugram",
            description:
                "Browse the complete sitemap of K.R. Mangalam University to easily find courses, academic departments, research hubs, admissions details, and administrative links.",
        },
    };
}

export default function Page() {
    return (
        <main className="min-h-screen bg-[#f8f8f8]">
            <HeroSection />
            <SitemapContentSection />
        </main>
    );
}
