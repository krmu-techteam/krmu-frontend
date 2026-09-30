import { IBM_Plex_Serif, Poppins } from "next/font/google";
import "./soadconference.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
    variable: "--font-family-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
    variable: "--font-family-ibm-plex-serif",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

export default function SBASCOnferenceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`antialiased ${poppins.variable} ${ibmPlexSerif.variable}`}
            >
                <div id="main-header">
                    <Header />
                </div>

                {children}

                <div id="main-footer">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
