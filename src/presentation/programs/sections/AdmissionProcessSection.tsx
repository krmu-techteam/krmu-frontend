import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AdmissionProcessSectionProps } from "@/features/programs/types";
import Button from "@/components/common/Button";
import { AdmissionCardDesktop, AdmissionCardMobile } from "../components";
import SectionDivider from "@/components/common/SectionDivider";

const AdmissionProcessSection = ({
  heading,
  highlight,
  desc,
  admissionCards,
  admisbtn,
  slug,
}: AdmissionProcessSectionProps) => {
  return (
    <section className="relative z-10 prog-global-padding py-8 md:p-6 lg:py-10 xl:py-20 px-4 lg:px-16 2xl:px-0">
      <div className="common-prog-container">
        <h2 className="heading-primary mb-3">
          {heading} {highlight}
        </h2>
        <p className="text-white/90 text-md font-poppins mb-5 md:mb-10">
          {desc}
        </p>
      </div>
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block">
        <Image
          src="/admisison-steps.png"
          width={1296}
          height={170}
          alt="Admission Process"
          className="w-full h-auto"
        />
        <div className="admis_proc_btn_grid_items">
          {admissionCards &&
            admissionCards.map((card) => (
              <AdmissionCardDesktop key={card?.id} card={card} />
            ))}
        </div>
      </div>
      <div className="max-w-full mx-auto w-full flex lg:hidden items-center justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          {admissionCards &&
            admissionCards.map((card) => (
              <AdmissionCardMobile key={card?.id} card={card} />
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        {admisbtn && slug !== "bhmct-hotel-management" && (
          <Button
            href={admisbtn.buttonlink || "https://admissions.krmangalam.edu.in"}
            variant="primary"
            icon={ArrowRight}
            iconPosition="right"
            target="_blank"
            className="w-full sm:w-auto"
          >
            {admisbtn.buttontext}
          </Button>
        )}
      </div>
      <SectionDivider />
    </section>
  );
};

export default AdmissionProcessSection;
