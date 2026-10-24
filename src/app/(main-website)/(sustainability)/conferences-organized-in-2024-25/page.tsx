import { Metadata } from "next";
import ConferencesOrganizedIn202425View from "@/presentation/static-pages/sustainability/conferences-organized-in-2024-25";

export const metadata: Metadata = {
    title: "Conferences Organized in 2024-25 | K.R. Mangalam University",
    description:
        "Explore national and international conferences organized by K.R. Mangalam University in 2024-25 advancing research, innovation, and sustainable development under SDG 17.",
};

export default function ConferencesOrganizedIn202425Page() {
    return <ConferencesOrganizedIn202425View />;
}
