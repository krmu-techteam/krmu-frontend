import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
import "./btech2026.css";
import Footer2 from "./components/Footer2";
// import { Button } from "@/components/ui/button";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});



export default function BBA2026LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.className} antialiased`}>
        <CommonHeader />
        {children}
        {/* <CommonFooter /> */}
        <Footer2 />
      </body>
    </html>
  );
}
