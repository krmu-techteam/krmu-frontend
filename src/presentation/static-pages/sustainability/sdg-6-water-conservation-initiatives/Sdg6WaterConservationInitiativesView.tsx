"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { sdg6WaterConservationInitiativesData } from "./data";

export const Sdg6WaterConservationInitiativesView: React.FC = () => {
    return <PolicyDetailTemplate data={sdg6WaterConservationInitiativesData} />;
};

export default Sdg6WaterConservationInitiativesView;
