import { committeeMembers } from "../constant";
import CommitteeMemberCard from "./cards/CommitteeMemberCard";

const ConferenceSteeringCommittee = () => {
  return (
    <section className="bg-[#ede9dd] pt-14 sm:pt-16 md:pt-20 xl:pt-24 pb-8 sm:pb-10 px-5 sm:px-6 md:px-10 xl:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-3 mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs font-bold tracking-[1.5px] text-[#2F5745]">
            PEOPLE
          </p>

          <h4 className="text-2xl sm:text-3xl font-bold font-lora text-[#1c2822] leading-tight">
            Conference Steering Committee
          </h4>
        </div>

        {/* Committee Members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {committeeMembers.map((member) => (
            <CommitteeMemberCard
              key={member.name}
              name={member.name}
              designation={member.designation}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSteeringCommittee;