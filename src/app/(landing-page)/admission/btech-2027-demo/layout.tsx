import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
import "./btech2027.css";
import Footer2 from "./components/Footer2";
// import { Button } from "@/components/ui/button";

export default function BBA2026LandingPageLayout({
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
                {/* <CommonFooter /> */}
                <Footer2 />
            </body>
        </html>
    );
}
