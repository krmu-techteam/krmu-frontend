import { Metadata } from "next";
import { Sdg2ZeroHungerSection } from "@/presentation/static-pages/sustainability/sdg-2-zero-hunger";

export const metadata: Metadata = {
  title: "SDG-2: Zero Hunger | K.R. Mangalam University",
  description:
    "K.R. Mangalam University actively aligns its initiatives with SDG Goal 2: Zero Hunger to advance sustainable food systems, food security, and nutrition awareness.",
};

const SDG2ZeroHungerPage = () => {
  return <Sdg2ZeroHungerSection />;
};

export default SDG2ZeroHungerPage;
