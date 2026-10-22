import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
import "./law2027.css";
// import { Button } from "@/components/ui/button";

export default function Btech2026LandingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${poppins.className} antialiased`}>
                <CommonHeader />
                {children}
                <CommonFooter />
            </body>
        </html>
    );
}
