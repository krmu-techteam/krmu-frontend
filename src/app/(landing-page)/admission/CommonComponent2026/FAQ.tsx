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

const FAQSection = ({ data }: Props) => {
  return (
    <section className="py-10 sm:py-20 px-4 bg-white">
      <div className="max-w-[1000px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#003d7a] text-sm font-medium mb-2">
            {data.eyebrow}
          </p>
          <h2 className="text-[#013fa1] text-4xl font-semibold mb-4">
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
          className="space-y-4"
        >
          {data.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-200 rounded-xl bg-gray-50 px-6 data-[state=open]:bg-gray-50"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6 lpul">
                <span
                  dangerouslySetInnerHTML={{
                    __html: faq.answer,
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
