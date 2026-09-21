import {
  Big_Shoulders,
  Fraunces,
  Host_Grotesk,
  Inter,
  Poppins,
  Roboto_Condensed,
} from "next/font/google";
import "./internationalAdmission.css";
import InternationalHeader from "./components/InternationalHeader";
import Header from "./components/Header";
import KRMUTimer from "@/app/(landing-page)/admission/CommonComponent2026/KRMUTimer";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-host-grotesk",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  variable: "--font-family-inter",
  display: "swap",
  subsets: ["latin"],
});

const bigShouldersDisplay = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-poppins",
  display: "swap",
});


const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-roboto-condensed",
  display: "swap",
});

export default function InternationalAdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${fraunces.variable} ${inter.variable} ${bigShouldersDisplay.variable} ${poppins.variable} ${robotoCondensed.variable}`}
    >
      <body className="antialiased">
           {/* <div className="w-full bg-[#fcd404]">
        <KRMUTimer targetDate="2026-08-14T23:59:59" />
      </div> */}
        <Header />
        {children}
      </body>
    </html>
  );
} 
