import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
import "./pharmacy2026.css";
// import { Button } from "@/components/ui/button";

export default function Brand2026LandingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${inter.className} antialiased`}>
                <CommonHeader />
                {children}
                <CommonFooter />
            </body>
        </html>
    );
}
