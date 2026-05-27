import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhdAdmissionAccordion } from "@/lib/types/admissionenroll";

type Props = {
  acc: PhdAdmissionAccordion[];
};

const PHDAdmissionAccordion = ({ acc }: Props) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full items-start">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 auto-rows-min"
        >
          {acc?.map((item, i) => (
            <AccordionItem
              key={i}
              value={`left-item-${i + 1}`}
              className="bg-[#051630] text-white rounded-[40px]
                         px-[25px] py-[15px] w-full self-start "
            >
              <AccordionTrigger className="text-base cursor-pointer p-0 data-[state=open]:pb-[25px]">
                {item?.ques}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-base">
                {item?.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PHDAdmissionAccordion;
