import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQAccordion } from "@/lib/types/examination";

type Props = {
  heading: string;
  faqs: FAQAccordion[];
};

const ExaminationFAQ = ({ heading, faqs }: Props) => {
  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        {/* Main Heading */}
        <h4 className="text-2xl md:text-4xl lg:text-5xl leading-[1.5] font-bold mt-2.5 mb-[15px]">
          {heading}
        </h4>

        {/* FAQ Sections */}
        <div className="mt-5 space-y-10">
          {faqs?.map((faqSection) => (
            <div key={faqSection.id}>
              {/* Section Title */}
              <h5 className="leading-[2] text-2xl md:text-4xl font-bold mb-4">
                {faqSection.title}
              </h5>

              {/* Accordion for Questions */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue={`item-${faqSection.exam_faq_acc?.[0]?.id ?? "1"}`}
              >
                {faqSection.exam_faq_acc?.map((item) => (
                  <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger className="bg-black text-base text-white font-semibold rounded-none py-2.5 pl-2.5 pr-20 sm:p-2.5 hover:no-underline examination-faq-panel">
                      {item.ques}
                    </AccordionTrigger>
                    <AccordionContent className="p-2.5 text-base border border-[#f1f2f5] examination-faq-content">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExaminationFAQ;
