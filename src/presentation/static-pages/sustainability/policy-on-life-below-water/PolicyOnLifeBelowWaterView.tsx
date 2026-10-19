"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policyOnLifeBelowWaterData } from "./data";

export const PolicyOnLifeBelowWaterView: React.FC = () => {
    return <PolicyDetailTemplate data={policyOnLifeBelowWaterData} />;
};

export default PolicyOnLifeBelowWaterView;
