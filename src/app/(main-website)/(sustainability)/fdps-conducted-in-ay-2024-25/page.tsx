import { Metadata } from "next";
import FdpsConductedInAy202425View from "@/presentation/static-pages/sustainability/fdps-conducted-in-ay-2024-25";

export const metadata: Metadata = {
    title: "FDPs Conducted in AY 2024-25 | K.R. Mangalam University",
    description:
        "Faculty Development Programs (FDPs) and Short-Term Training Programs conducted at K.R. Mangalam University in Academic Year 2024-25 under SDG 17.",
};

export default function FdpsConductedInAy202425Page() {
    return <FdpsConductedInAy202425View />;
}
