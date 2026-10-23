"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { mouOnLifeOnLandData } from "./data";

export const MouOnLifeOnLandView: React.FC = () => {
    return <PolicyDetailTemplate data={mouOnLifeOnLandData} />;
};

export default MouOnLifeOnLandView;
