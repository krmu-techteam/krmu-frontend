import { Inter } from "next/font/google";
import { CommonHeader } from "../commonComponent/header/CommonHeader";
import CommonFooter from "../commonComponent/footer/CommonFooter";
import "./brand2026.css";
// import { Button } from "@/components/ui/button";
import Script from "next/script";
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Brand2026LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TD7GV8Z3');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
       {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TD7GV8Z3"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <CommonHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
}
