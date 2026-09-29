"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policyOnCleanWaterAndSanitationData } from "./data";

export const PolicyOnCleanWaterAndSanitationView: React.FC = () => {
    return <PolicyDetailTemplate data={policyOnCleanWaterAndSanitationData} />;
};

export default PolicyOnCleanWaterAndSanitationView;
