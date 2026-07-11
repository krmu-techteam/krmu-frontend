import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DeanHonorAcc } from "@/lib/types/dean-honors";

type Props = {
  deanAccData: DeanHonorAcc[];
};

const DeanHonorSemAcc = ({ deanAccData }: Props) => {
  return (
    <section>
      {deanAccData?.map((item) => (
        <div key={item.id} className="max-w-[1200px] mx-auto w-full px-4">
          <div className="py-[50px]">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-5">
              {item.title}
            </h3>

            <Accordion type="single" collapsible className="w-full">
              {item.dean_honor_html?.map((accItem, index) => (
                <AccordionItem key={accItem.id} value={`item-${index + 1}`}>
                  <AccordionTrigger className="py-2.5 bg-[#003366] px-11 rounded-none text-white text-base font-semibold deanhonoracc_panel cursor-pointer hover:no-underline">
                    {accItem.acc_title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance deanhonortable">
                    <div
                      className="deanhonortable-container"
                      dangerouslySetInnerHTML={{
                        __html: accItem.dean_honor_html_field,
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DeanHonorSemAcc;
