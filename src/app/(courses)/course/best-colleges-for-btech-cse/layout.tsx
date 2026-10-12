import { montserrat } from "@/lib/fonts";
import "./btechcsecourse.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${montserrat.className} antialiased`}>
                <Header />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
