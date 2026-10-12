import type { Metadata } from "next";
import { instrumentSerif } from "@/lib/fonts";

import "./SEMCEProgStyle.css";

export const metadata: Metadata = {
    title: "School of Emerging Media and Creator Economy | KRMU",
    description: "",
};

export default function SEMCEProgPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
