import { Accreditation } from "@/features/about/accreditations-recognition-and-approvals";
import { AccreditationCard } from "../components";

export default function AccreditationsSection({
  title,
  description,
  accrediationrecogapprovals,
}: {
  title: string;
  description: string;
  accrediationrecogapprovals: Accreditation["accrediationrecogapprovals"];
}) {
  return (
    <section className="pt-40 pb-20 min-h-screen relative overflow-hidden">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-7 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-12 px-4 lg:px-0 text-center md:text-left">
          <h3 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight font-poppins leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-white/60 max-w-6xl text-base md:text-lg leading-relaxed font-poppins">
            {description}
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accrediationrecogapprovals &&
            accrediationrecogapprovals.map((member) => (
              <AccreditationCard key={member.id} member={member} />
            ))}
        </div>
      </div>
    </section>
  );
}
