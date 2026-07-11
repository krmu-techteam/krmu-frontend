import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
import "./law2026.css";
// import { Button } from "@/components/ui/button";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});



export default function Btech2026LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${poppins.className} antialiased`}>
        <CommonHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
