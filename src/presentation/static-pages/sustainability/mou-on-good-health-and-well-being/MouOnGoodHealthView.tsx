"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { mouOnGoodHealthData } from "./data";

export const MouOnGoodHealthView: React.FC = () => {
  return <PolicyDetailTemplate data={mouOnGoodHealthData} />;
};

export default MouOnGoodHealthView;
