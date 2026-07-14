import { CommitteeSectionProps } from "@/features/life-at-krmu/youth-red-cross-committee";

const CommitteeSection = ({
  committeeSection,
}: {
  committeeSection: CommitteeSectionProps;
}) => {
  const { heading, description, focusTitle, focusAreas, closingDescription } =
    committeeSection;
  return (
    <section className="py-8 md:py-12 xl:py-20 bg-[url(/bg-gradient.webp)] font-poppins">
      <div className="max-w-[1530px] mx-auto w-full text-white px-6 md:px-7 xl:px-16">
        <h2 className="text-3xl md:text-5xl mb-5 font-bold">{heading}</h2>
        <p>{description}</p>
        <br />
        <p>{focusTitle}</p>
        <ul className="list-disc pl-10 my-2.5">
          {focusAreas?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <br />
        <p>{closingDescription}</p>
      </div>
    </section>
  );
};

export default CommitteeSection;
