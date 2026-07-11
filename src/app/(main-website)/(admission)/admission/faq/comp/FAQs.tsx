import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SingleFAQ } from "@/lib/types/faq";

type Props = {
  faqs: SingleFAQ[];
};

const FAQs = ({ faqs }: Props) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-5"
            defaultValue="item-1"
          >
            {faqs &&
              faqs?.map((faq, i) => {
                return (
                  <AccordionItem
                    value={`item-${i + 1}`}
                    key={i}
                    className="border-none w-full lg:w-[calc(50%-10px)]"
                  >
                    <AccordionTrigger className="bg-white border hover:text-[#0060aa] hover:no-underline border-[#f2f3f5] rounded-lg data-[state=open]:rounded-b-none data-[state=open]:bg-black text-base data-[state=open]:text-white text-black py-2.5 px-5 cursor-pointer">
                      {faq?.ques}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance py-2.5 px-5 border-x border-b rounded-b-lg border-[#f2f3f5] break-all">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: faq?.ans,
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
        {/* <div className="w-1/2"></div> */}
      </div>
    </section>
  );
};

export default FAQs;
