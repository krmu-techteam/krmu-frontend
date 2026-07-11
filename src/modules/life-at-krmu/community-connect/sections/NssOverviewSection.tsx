import { NSSOverviewSectionProps } from "../types";

const NssOverviewSection = ({
  nssOverviewSection,
}: {
  nssOverviewSection: NSSOverviewSectionProps;
}) => {
  const { heading, descriptions } = nssOverviewSection;
  return (
    <section className="pt-[6%] pb-[9%] font-poppins bg-[url(/bg-gradient.webp)]">
      <div className="max-w-[1530px] mx-auto w-full text-white px-6 md:px-7 xl:px-16">
        <h2 className="text-3xl md:text-[42px] mb-5 font-bold">{heading}</h2>
        {descriptions?.map((item, idx) => {
          return (
            <p key={idx} className="mb-3">
              {item}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default NssOverviewSection;
