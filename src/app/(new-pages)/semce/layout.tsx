import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SEMCEHeader from "./comp/SEMCEHeader";
import "./SEMCEStyle.css"

// import { Button } from "@/components/ui/button";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School of Emerging Media and Creator Economy | KRMU",
  description: "",
};

export default function Brand2026LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.className} antialiased`}>
        <SEMCEHeader />
        {children}
      </body>
    </html>
  );
}
