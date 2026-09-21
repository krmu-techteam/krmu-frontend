import { Newsreader, Poppins } from "next/font/google";
import "./registration.css";

import HeaderWrapper from "@/app/(main-website)/components/Header/HeaderWrapper";
import Footer from "@/app/(main-website)/components/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-poppins",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-newsreader",
  display: "swap",
});

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${newsreader.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
