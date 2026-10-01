import { Newsreader, Poppins } from "next/font/google";
import "./placement.css";

import HeaderWrapper from "@/components/layouts/Header/HeaderWrapper";
import Footer from "@/components/layouts/Footer/Footer";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
});

const newsreader = Newsreader({
    subsets: ["latin"],
    variable: "--font-family-newsreader",
    display: "swap",
});

export default function PlacementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${poppins.variable} ${newsreader.variable} antialiased bg-[#fbf8f3] text-[#001836] min-h-screen`}
        >
            <div id="main-header">
                <HeaderWrapper />
            </div>

            {children}

            <div id="main-footer">
                <Footer />
            </div>
        </div>
    );
}
