import "./soadconference.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function SBASCOnferenceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased font-poppins">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
