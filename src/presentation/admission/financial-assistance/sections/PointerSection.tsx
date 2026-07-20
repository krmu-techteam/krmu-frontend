import {
  LEFT_SECTIONS,
  RIGHT_SECTIONS,
} from "@/features/admission/financial-assistance";
import { PointerGroup } from "../components";

const PointerSection = () => {
  return (
    <>
      <section className="pb-12">
        <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row items-start gap-20 px-6 md:px-8 xl:px-16">
          <div className="lg:w-1/2 flex flex-col gap-10">
            {LEFT_SECTIONS.map((section) => (
              <PointerGroup
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>

          <div className="lg:w-1/2 flex flex-col gap-10">
            {RIGHT_SECTIONS.map((section) => (
              <PointerGroup
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PointerSection;
