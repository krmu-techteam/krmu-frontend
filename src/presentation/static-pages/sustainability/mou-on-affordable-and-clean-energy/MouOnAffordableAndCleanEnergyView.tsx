"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { mouOnAffordableAndCleanEnergyData } from "./data";

export const MouOnAffordableAndCleanEnergyView: React.FC = () => {
    return <PolicyDetailTemplate data={mouOnAffordableAndCleanEnergyData} />;
};

export default MouOnAffordableAndCleanEnergyView;
