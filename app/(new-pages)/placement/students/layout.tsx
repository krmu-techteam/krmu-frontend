import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./student.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-newsreader-next",
});

export const metadata: Metadata = {
  title: "My Website",
  description: "My Next.js website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsreader.variable}>{children}</body>
    </html>
  );
}
