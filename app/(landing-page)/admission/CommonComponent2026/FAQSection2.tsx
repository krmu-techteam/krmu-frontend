import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSectionData } from "../law-2026/contentype";

type Props = {
  data: FAQSectionData;
};

const FAQSection2 = ({ data }: Props) => {
  const faqColumns = [
    data.faqs.filter((_, i) => i % 2 === 0),
    data.faqs.filter((_, i) => i % 2 !== 0),
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#003d7a] text-sm font-medium mb-2">
            {data.eyebrow}
          </p>

          <h2 className="text-2xl md:text-[40px] font-bold mb-5">
            {data.heading}
          </h2>

          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue={data.faqs[0]?.id}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[3%] gap-y-2.5"
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
                    key={faq.id}
                    value={faq.id}
                    style={{ order: itemIndex }}
                    className="last:border-b h-fit border border-gray-200 rounded-xl bg-gray-50 px-6"
                  >
                    <AccordionTrigger className="p-0 cursor-pointer phd-acc-panel text-lg font-semibold text-gray-900 hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-4 text-balance text-base pt-[10px] text-gray-600 leading-relaxed pb-6 lpul">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: faq.answer,
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection2;
