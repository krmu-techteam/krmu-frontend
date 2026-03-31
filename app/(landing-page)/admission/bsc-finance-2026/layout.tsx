import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NoPaperFormProvider from "@/lib/constants/NoPaperFormProvider";
import BscFinanceNavbar from "./components/BscFinanceNavbar";
import {
  bscFinanceApplyHref,
  bscFinanceBrochureFileName,
  bscFinanceBrochureHref,
  heroNavLinks,
} from "./content";
import "./bsc-finance-2026.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
        {/* Navbar is absolute — floats over the hero background */}
        <BscFinanceNavbar
          navLinks={heroNavLinks}
          brochureHref={bscFinanceBrochureHref}
          brochureDownloadName={bscFinanceBrochureFileName}
          applyHref={bscFinanceApplyHref}
        />
        {children}
      </body>
    </html>
  );
}
