import { Inter, Lora } from "next/font/google";
import "./soadconference.css";

import HeaderWrapper from "@/app/(main-website)/components/Header/HeaderWrapper";
import Footer from "@/app/(main-website)/components/Footer/Footer";

export default function SBASCOnferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div id="main-header">
          <HeaderWrapper />
        </div>

        {children}

        <div id="main-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
