import { newsreader, poppins } from "@/lib/fonts";
import "./placement.css";

import HeaderWrapper from "@/components/layouts/Header/HeaderWrapper";
import Footer from "@/components/layouts/Footer/Footer";

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
