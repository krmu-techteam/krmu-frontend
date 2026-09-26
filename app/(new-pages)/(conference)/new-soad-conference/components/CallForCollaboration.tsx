const academicCollaboration = [
  "Curating conference sessions based on thematic tracks",
  "Faculty and student engagement through research publications and projects",
  "Sharing institutional case studies, design projects, or research outcomes",
  "Joint studios or faculty-student exchange initiatives; student design exhibitions",
  "Publication support, sponsorship of APCs and SCOPUS/WoS indexing charges",
  "Sponsorship of conference awards and activities",
  "Institutional MoUs for long-term academic and research partnerships",
];

const industryCollaboration = [
  "Curating industry-led sessions, panel discussions, and thematic talks",
  "Sponsorship of sessions, design awards, or conference materials",
  "Presenting innovative projects, technologies, or sustainable solutions",
  "Internships, mentorships, or skill-development opportunities for students",
  "Industry-led workshops, masterclasses, and hands-on sessions",
  "Collaborative curriculum/studio initiatives; joint community and social-impact projects",
];

const collaborationRoles = [
  "Keynote Speaker",
  "Advisory Board",
  "Session Chair / Moderator",
  "Reviewer / Editorial Board Member",
  "Publication Support",
];

const CollaborationCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div>
      <h3 className="mb-3 text-[14px] font-bold text-[#d6ad54] sm:text-[15px]">
        {title}
      </h3>

      <ul className="space-y-2.5 sm:space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 font-serif text-[12px] leading-[1.55] text-[#eeeae2] sm:gap-3 sm:text-[13px]"
          >
            <span className="mt-[2px] shrink-0 text-[#d6ad54]">—</span>

            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CallForCollaboration = () => {
  return (
    <section className="w-full bg-[#111d33] py-10 sm:py-12 md:py-16 lg:py-[68px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[100px]">
        {/* Header */}
        <div className="mb-7 sm:mb-8">
          <span className="mb-2 block font-serif text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6ad54] sm:text-[11px]">
            Partnerships
          </span>

          <h2 className="text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl md:text-[26px]">
            Call for Collaboration
          </h2>

          <p className="mt-2 max-w-2xl font-serif text-[12px] leading-[1.55] text-[#e7e3dc] sm:text-[13px]">
            We invite sponsorships and collaborations with academia and
            industry.
          </p>
        </div>

        {/* Collaboration Columns */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-[120px]">
          <CollaborationCard
            title="Academic & Institutional"
            items={academicCollaboration}
          />

          <CollaborationCard
            title="Industry & Corporate"
            items={industryCollaboration}
          />
        </div>

        {/* Roles */}
        <div className="mt-8 sm:mt-10">
          <h3 className="mb-4 text-[14px] font-bold text-white sm:mb-5 sm:text-[15px]">
            Roles Available for Collaborators
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {collaborationRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-[#756c5b] px-3.5 py-2 font-serif text-[10px] leading-none text-white transition-colors duration-200 hover:border-[#d6ad54] hover:text-[#d6ad54] sm:px-4 sm:py-2 sm:text-[11px] md:text-[12px]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForCollaboration;