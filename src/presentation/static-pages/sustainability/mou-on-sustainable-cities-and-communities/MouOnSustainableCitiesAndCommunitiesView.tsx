"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { mouOnSustainableCitiesAndCommunitiesData } from "./data";

export const MouOnSustainableCitiesAndCommunitiesView: React.FC = () => {
    return (
        <PolicyDetailTemplate data={mouOnSustainableCitiesAndCommunitiesData} />
    );
};

export default MouOnSustainableCitiesAndCommunitiesView;
