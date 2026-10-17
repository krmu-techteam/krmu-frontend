"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { foodWasteReportData } from "./data";

export const FoodWasteReportView: React.FC = () => {
    return <PolicyDetailTemplate data={foodWasteReportData} />;
};

export default FoodWasteReportView;
