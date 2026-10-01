import { Inter, Lora } from "next/font/google";
import "./sbasconference.css";

import HeaderWrapper from "@/app/(main-website)/components/Header/HeaderWrapper";
import Footer from "@/app/(main-website)/components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-lora",
  display: "swap",
});

export default function SBASCOnferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <div id="main-header">
          <HeaderWrapper />
        </div>

        {children}

        <Toaster position="top-right" richColors closeButton />
        <div id="main-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
