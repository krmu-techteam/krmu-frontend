import { Newsreader, Poppins } from "next/font/google";
import "./trainers.css";
import HeaderWrapper from "@/components/layouts/Header/HeaderWrapper";
import Footer from "@/components/layouts/Footer/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    display: "swap",
});

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-family-newsreader",
    display: "swap",
});

export default function Trainerslayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} ${newsreader.variable}`}
        >
            <body className="antialiased">{children}</body>
        </html>
    );
}
