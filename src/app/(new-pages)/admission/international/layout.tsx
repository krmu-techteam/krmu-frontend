import {
    bigShoulders as bigShouldersDisplay,
    fraunces,
    hostGrotesk,
    inter,
    poppins,
    robotoCondensed,
} from "@/lib/fonts";
import "./internationalAdmission.css";
import Header from "./components/Header";

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
