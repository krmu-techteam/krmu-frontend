"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { mouOnClimateActionData } from "./data";

export const MouOnClimateActionView: React.FC = () => {
    return <PolicyDetailTemplate data={mouOnClimateActionData} />;
};

export default MouOnClimateActionView;
