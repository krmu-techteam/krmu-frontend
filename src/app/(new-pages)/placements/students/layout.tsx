import { Newsreader, Poppins } from "next/font/google";
import "./students.css";

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

export default function Studentslayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="w-full">{children}</div>;
}
