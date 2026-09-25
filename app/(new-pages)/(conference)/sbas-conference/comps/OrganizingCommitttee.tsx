import { editorialCommittee } from "../constant";
import OrganizingCommittteeCard from "./cards/OrganizingCommittteeCard";

const OrganizingCommitttee = () => {
  return (
    <section className="bg-[#ede9dd] pb-8 sm:pb-10 px-5 sm:px-6 md:px-10 xl:px-0">
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10">
        <div className="text-center mb-8 sm:mb-10">
          <h4 className="text-2xl sm:text-[32px] font-bold font-lora text-[#1C2822]">
            Organizing Committee
          </h4>
        </div>

        <div className="flex flex-wrap justify-center pt-2 sm:pt-[18px] gap-4 sm:gap-5">
          {editorialCommittee.map((member) => (
            <OrganizingCommittteeCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommitttee;