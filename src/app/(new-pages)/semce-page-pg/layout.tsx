import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";

import "./SEMCEProgStyle.css";

// import { Button } from "@/components/ui/button";


const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"], // optional
  variable: "--font-instrument-serif", // optional (for tailwind)
});


export const metadata: Metadata = {
  title: "School of Emerging Media and Creator Economy | KRMU",
  description: "",
};

export default function SEMCEProgPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
