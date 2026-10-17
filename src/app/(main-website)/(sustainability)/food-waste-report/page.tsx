import FoodWasteReportView from "@/presentation/static-pages/sustainability/food-waste-report";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Food Waste Report | K.R. Mangalam University",
    description:
        "Official Food Waste and Food Integrated reports at K.R. Mangalam University aligned with SDG 2: Zero Hunger.",
};

const FoodWasteReportPage = () => {
    return <FoodWasteReportView />;
};

export default FoodWasteReportPage;
