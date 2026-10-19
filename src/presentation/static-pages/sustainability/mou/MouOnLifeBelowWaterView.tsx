"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { mouOnLifeBelowWaterData } from "./data";

export const MouOnLifeBelowWaterView: React.FC = () => {
    return <PolicyDetailTemplate data={mouOnLifeBelowWaterData} />;
};

export default MouOnLifeBelowWaterView;
