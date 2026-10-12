import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import NoPaperFormProvider from "@/lib/constants/NoPaperFormProvider";
import JournalismAndMassCommunication from "./page";

export const metadata: Metadata = {
    title: "BSc (Hons) Finance 2026 - K.R. Mangalam University",
    description:
        "Graduate with a degree, 12 months of paid industry experience, and a curriculum aligned to CFA, FRM & actuarial examinations. Apply for BSc (Hons) Finance 2026-27 batch.",
    openGraph: {
        title: "BSc (Hons) Finance 2026 - K.R. Mangalam University",
        description:
            "Graduate with a degree, 12 months of paid industry experience, and a curriculum aligned to CFA, FRM & actuarial examinations.",
    },
};

export default function BscFinance2026Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head />
            <body className={`${inter.className} antialiased`}>
                <NoPaperFormProvider />
                <JournalismAndMassCommunication />
                {children}
            </body>
        </html>
    );
}
