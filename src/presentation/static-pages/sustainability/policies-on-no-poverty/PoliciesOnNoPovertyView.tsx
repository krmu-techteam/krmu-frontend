"use client";

import React from "react";
import { PolicyDetailTemplate } from "../shared-policies";
import { policiesOnNoPovertyData } from "./data";

export const PoliciesOnNoPovertyView: React.FC = () => {
    // JS se order change: newly increased ID policies (policy-7 to policy-13) first, followed by policy-1 to policy-6
    const orderedData = React.useMemo(() => {
        const newPolicies = policiesOnNoPovertyData.policies.slice(6);
        const initialPolicies = policiesOnNoPovertyData.policies.slice(0, 6);

        return {
            ...policiesOnNoPovertyData,
            policies: [...newPolicies, ...initialPolicies],
        };
    }, []);

    return <PolicyDetailTemplate data={orderedData} />;
};

export default PoliciesOnNoPovertyView;
