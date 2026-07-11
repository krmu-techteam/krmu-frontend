import { LabsWorkshopsSection } from "@/lib/api/krmu-campus-facility";
import LabsWorkshopSlide from "./LabsWorkshopSlide";

type Props = {
  labsWorkshop: LabsWorkshopsSection;
};

const LabsWorkshops = ({ labsWorkshop }: Props) => {
  return (
    <section className="py-10 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto w-full text-white">
        <h3 className="text-3xl md:text-5xl font-semibold text-center mb-5">
          {labsWorkshop?.heading}
        </h3>
        <p className="mb-10 text-center">{labsWorkshop?.content}</p>
        <div>
          <LabsWorkshopSlide data={labsWorkshop?.lab_workshop_imgs} />
        </div>
      </div>
    </section>
  );
};

export default LabsWorkshops;
