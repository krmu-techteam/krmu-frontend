import { PlacementPolicyCard } from "../components";
import { PLACEMENT_POLICIES } from "../constants";

const PlacementPoliciesSection = () => {
  return (
    <section className="px-4">
      {PLACEMENT_POLICIES.map((policy, index) => (
        <PlacementPolicyCard {...policy} key={index} />
      ))}
    </section>
  );
};

export default PlacementPoliciesSection;
