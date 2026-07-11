import { Montserrat } from "next/font/google";
import "./btechcsecourse.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
