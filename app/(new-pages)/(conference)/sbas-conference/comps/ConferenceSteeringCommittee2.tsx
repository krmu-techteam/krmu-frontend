import { organizingCommittee } from "../constant";
import ConferenceSteeringCommitteeCard2 from "./cards/ConferenceSteeringCommitteeCard2";

const ConferenceSteeringCommittee2 = () => {
  return (
    <section className="bg-[#ede9dd] pb-8 sm:pb-10 px-5 sm:px-6 md:px-10 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10 text-center">
          <h4 className="text-2xl sm:text-3xl text-[#1c2822] font-bold font-lora leading-tight">
            Conference Steering Committee
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {organizingCommittee.map((member) => (
            <ConferenceSteeringCommitteeCard2
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSteeringCommittee2;