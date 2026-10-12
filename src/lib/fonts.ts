import { Inter, Montserrat, Newsreader, Poppins } from "next/font/google";

export const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-family-inter",
});

export const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-family-montserrat",
});

export const newsreader = Newsreader({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-family-newsreader",
});

export const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-family-poppins",
});
