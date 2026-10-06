import type { Metadata } from "next";
import MainWebsiteLayout from "@/components/layouts/MainWebsiteLayout";

export const metadata: Metadata = {
    title: "K.R. Mangalam University | Best University in Gurgaon, Delhi NCR",
    description:
        "K.R. Mangalam University is a premier university in Delhi NCR offering industry-aligned UG, PG, and PhD programmes with world-class campus & top placements.",
    verification: {
        google: "-bhKCuhZrMwY93wMOanH66_uVGlrdB4ZMYSEik3Zl-M",
    },
};

export const revalidate = 3600;

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <MainWebsiteLayout>{children}</MainWebsiteLayout>;
}
