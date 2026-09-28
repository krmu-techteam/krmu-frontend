import { Newsreader, Poppins } from "next/font/google";
import "./placement.css";

import HeaderWrapper from "@/components/layouts/Header/HeaderWrapper";
import Footer from "@/components/layouts/Footer/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-family-poppins",
    display: "swap",
});

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
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
            className={`${poppins.variable} ${newsreader.variable} antialiased`}
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
