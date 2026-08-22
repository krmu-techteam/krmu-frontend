"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policiesOnQualityEducationData } from "./data";

export const PoliciesOnQualityEducationView: React.FC = () => {
    return <PolicyDetailTemplate data={policiesOnQualityEducationData} />;
};

export default PoliciesOnQualityEducationView;
