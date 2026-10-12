import { newsreader, poppins } from "@/lib/fonts";
import "./registration.css";

import { Toaster } from "@/components/ui/sonner";

export default function RegistrationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${poppins.variable} ${newsreader.variable} antialiased`}
        >
            {children}
            <Toaster position="top-right" richColors closeButton />
        </div>
    );
}
