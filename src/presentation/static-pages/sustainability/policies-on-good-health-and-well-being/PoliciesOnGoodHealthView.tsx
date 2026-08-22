"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policiesOnGoodHealthData } from "./data";

export const PoliciesOnGoodHealthView: React.FC = () => {
  return <PolicyDetailTemplate data={policiesOnGoodHealthData} />;
};

export default PoliciesOnGoodHealthView;
