import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhDFaq } from "@/lib/types/phd-programmes";

type Props = {
  faqTitle: string;
  faqs: PhDFaq[];
};

const PHDTestimonialsAcc = ({ faqTitle, faqs }: Props) => {
  const faqColumns = faqs
    ? [faqs.filter((_, i) => i % 2 === 0), faqs.filter((_, i) => i % 2 !== 0)]
    : [];

  return (
    <>
      <section className="py-[60px] px-4">
        <div className="max-w-[1664px] mx-auto w-full">
          <h3 className="text-3xl md:text-5xl font-semibold mb-5">
            {faqTitle}
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[3.84%] gap-y-2.5"
          >
            {faqColumns.map((columnFaqs, columnIndex) => (
              <div
                key={columnIndex}
                className="contents md:flex md:flex-col md:gap-2.5"
              >
                {columnFaqs.map((faq, i) => {
                  const itemIndex = i * 2 + columnIndex + 1;

                  return (
                    <AccordionItem
                      key={faq?.id}
                      value={`item-${itemIndex}`}
                      style={{ order: itemIndex }}
                      className="last:border-b py-[15px] px-[25px] rounded-[8px] h-fit border border-[#d9dada]"
                    >
                      <AccordionTrigger className="text-xl text-[#1a1a1a] font-semibold p-0 hover:no-underline cursor-pointer phd-acc-panel">
                        {faq?.ques}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-base text-[#333] pt-[10px] pb-[15px]">
                        <p>{faq?.ans}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </div>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default PHDTestimonialsAcc;
