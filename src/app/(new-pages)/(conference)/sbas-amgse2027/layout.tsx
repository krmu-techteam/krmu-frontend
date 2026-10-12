import "./sbasconference.css";

import HeaderWrapper from "@/components/layouts/Header/HeaderWrapper";
import Footer from "@/components/layouts/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function SBASCOnferenceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased font-inter">
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
