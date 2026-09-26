import { advisoryBoardMembers } from "../constant";
import CommitteeMemberCard from "./common/CommitteeMemberCard";

const PastAdvisoryBoard = () => {
  return (
    <section className="w-full bg-[#f5f2eb] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[88px]">
        {/* Heading */}
        <div className="mb-7 sm:mb-8">
          <h2 className="text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-3xl md:text-[28px]">
            Past Advisory Board
          </h2>

          <p className="mt-2 max-w-[600px] font-serif text-[12px] leading-[1.5] text-[#625d55] sm:text-[13px]">
            Distinguished academicians and professionals providing strategic
            guidance and academic oversight to the conference.
          </p>
        </div>

        {/* Advisory Board Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {advisoryBoardMembers.map((member) => (
            <CommitteeMemberCard
              key={`${member.name}-${member.role}`}
              image={member.image}
              role={member.role}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastAdvisoryBoard;