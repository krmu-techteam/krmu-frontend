"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policiesOnNoPovertyData } from "./data";

export const PoliciesOnNoPovertyView: React.FC = () => {
  return <PolicyDetailTemplate data={policiesOnNoPovertyData} />;
};

export default PoliciesOnNoPovertyView;
