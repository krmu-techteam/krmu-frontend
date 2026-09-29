"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policyOnDecentWorkAndEconomicGrowthData } from "./data";

export const PolicyOnDecentWorkAndEconomicGrowthView: React.FC = () => {
    return (
        <PolicyDetailTemplate data={policyOnDecentWorkAndEconomicGrowthData} />
    );
};

export default PolicyOnDecentWorkAndEconomicGrowthView;
