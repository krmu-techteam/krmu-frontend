import { Metadata } from "next";
import { Sdg3GoodHealthAndWellBeingSection } from "@/presentation/static-pages/sustainability/sdg-3-good-health-and-well-being";

export const metadata: Metadata = {
    title: "SDG-3: Good Health and Well Being | K.R. Mangalam University",
    description:
        "K.R. Mangalam University actively supports SDG Goal 3: Good Health and Well Being by promoting public health education, clinical research, mental wellness initiatives, and community outreach.",
};

const SDG3GoodHealthAndWellBeingPage = () => {
    return <Sdg3GoodHealthAndWellBeingSection />;
};

export default SDG3GoodHealthAndWellBeingPage;
