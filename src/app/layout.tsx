import type { Metadata } from "next";
import {
    faustina,
    fraunces,
    inter,
    playfair,
    poppins,
    sofiaSansCondensed,
} from "@/lib/fonts";
import "./(main-website)/globals.css";
import Script from "next/script";
import { WebVitals } from "@/components/common/WebVitals";
import { ServerSpeedTracker } from "@/components/common/ServerSpeedTracker";
import { NavigationLoader } from "@/components/common/NavigationLoader";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.krmangalam.edu.in"),
    title: "K.R. Mangalam University | Best University in Gurgaon, Delhi NCR",
    description:
        "K.R. Mangalam University is a premier university in Delhi NCR offering industry-aligned UG, PG, and PhD programmes with world-class campus & top placements.",
    verification: {
        google: "-bhKCuhZrMwY93wMOanH66_uVGlrdB4ZMYSEik3Zl-M",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link
                    rel="preconnect"
                    href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="dns-prefetch"
                    href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com"
                />
                <link
                    rel="preconnect"
                    href="https://wp.krmangalam.edu.in"
                    crossOrigin="anonymous"
                />
                <link rel="dns-prefetch" href="https://wp.krmangalam.edu.in" />
                <Script id="google-tag-manager" strategy="lazyOnload">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8ZKK9X');
          `}
                </Script>
            </head>
            <body
                className={`${poppins.variable} ${playfair.variable} ${inter.variable} ${fraunces.variable} ${sofiaSansCondensed.variable} ${faustina.variable} ${poppins.className} antialiased`}
            >
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P8ZKK9X"
                        height="0"
                        width="0"
                        style={{
                            display: "none",
                            visibility: "hidden",
                        }}
                    />
                </noscript>
                <WebVitals />
                <ServerSpeedTracker />
                <NavigationLoader />
                {children}
            </body>
        </html>
    );
}
