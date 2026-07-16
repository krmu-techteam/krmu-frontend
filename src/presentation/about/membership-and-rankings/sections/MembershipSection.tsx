import { MembershipDomain } from "@/features/about/membership-and-rankings";
import { MembershipCard } from "../components";

const MembershipSection = ({
  title,
  description,
  memberships,
}: MembershipDomain) => {
  return (
    <section className="pt-40 pb-10">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 px-4 lg:px-0 text-center md:text-left">
          <h3 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight font-poppins leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-white/60 max-w-6xl text-base md:text-lg leading-relaxed font-poppins">
            {description}
          </p>
        </div>

        {/* Memberships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships &&
            memberships.map((member) => (
              <MembershipCard key={member.id} member={member} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default MembershipSection;
