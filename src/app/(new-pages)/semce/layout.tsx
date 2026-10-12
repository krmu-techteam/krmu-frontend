import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import SEMCEHeader from "./comp/SEMCEHeader";
import "./SEMCEStyle.css";

export const metadata: Metadata = {
    title: "School of Emerging Media and Creator Economy | KRMU",
    description: "",
};

export default function Brand2026LandingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${inter.className} antialiased`}>
                <SEMCEHeader />
                {children}
            </body>
        </html>
    );
}
