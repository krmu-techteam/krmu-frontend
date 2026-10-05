import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Page Not Found | K.R. Mangalam University",
    description: "The page you are looking for does not exist.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function CatchAll() {
    notFound();
}
