"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policyOnReducedInequalitiesData } from "./data";

export const PolicyOnReducedInequalitiesView: React.FC = () => {
    return <PolicyDetailTemplate data={policyOnReducedInequalitiesData} />;
};

export default PolicyOnReducedInequalitiesView;
