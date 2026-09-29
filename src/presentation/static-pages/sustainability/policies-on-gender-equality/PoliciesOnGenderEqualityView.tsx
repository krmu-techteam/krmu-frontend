"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policiesOnGenderEqualityData } from "./data";

export const PoliciesOnGenderEqualityView: React.FC = () => {
    return <PolicyDetailTemplate data={policiesOnGenderEqualityData} />;
};

export default PoliciesOnGenderEqualityView;
