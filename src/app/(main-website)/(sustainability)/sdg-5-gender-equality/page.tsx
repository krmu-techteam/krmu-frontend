import { Metadata } from "next";
import { Sdg5GenderEqualitySection } from "@/presentation/static-pages/sustainability/sdg-5-gender-equality";

export const metadata: Metadata = {
    title: "SDG-5: Gender Equality | K.R. Mangalam University",
    description:
        "K.R. Mangalam University is committed to SDG 5: Gender Equality through equal opportunities, female empowerment, research, mentorship, and safe campus environments.",
};

const SDG5GenderEqualityPage = () => {
    return <Sdg5GenderEqualitySection />;
};

export default SDG5GenderEqualityPage;
