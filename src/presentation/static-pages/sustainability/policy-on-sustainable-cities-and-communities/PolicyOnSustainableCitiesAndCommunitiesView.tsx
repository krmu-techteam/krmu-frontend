"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policyOnSustainableCitiesAndCommunitiesData } from "./data";

export const PolicyOnSustainableCitiesAndCommunitiesView: React.FC = () => {
    return (
        <PolicyDetailTemplate
            data={policyOnSustainableCitiesAndCommunitiesData}
        />
    );
};

export default PolicyOnSustainableCitiesAndCommunitiesView;
