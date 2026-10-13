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
                <Header />
                {children}
            </body>
        </html>
    );
}
