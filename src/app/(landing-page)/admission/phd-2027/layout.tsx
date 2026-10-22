// import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./phd2027.css";
// import PhdFooter from "./commonComponent/PhdFooter";
// import PhdHeader from "./commonComponent/PhdHeader";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
// import { Button } from "@/components/ui/button";

export default function PhdLandingPageLayout({
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
