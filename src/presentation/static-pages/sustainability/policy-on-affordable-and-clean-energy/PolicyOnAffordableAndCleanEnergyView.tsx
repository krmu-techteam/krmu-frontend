"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policyOnAffordableAndCleanEnergyData } from "./data";

export const PolicyOnAffordableAndCleanEnergyView: React.FC = () => {
    return <PolicyDetailTemplate data={policyOnAffordableAndCleanEnergyData} />;
};

export default PolicyOnAffordableAndCleanEnergyView;
