import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import { FAQSectionData } from "../admission/PGType";

type Props = {
  data: FAQSectionData;
};

const FAQSection = ({ data }: Props) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-10">
        {/* Header */}
        <div className="w-full lg:w-2/5">
          <div className="mb-12">
            <p className="text-[#003d7a] text-sm font-medium mb-2">
              {data.eyebrow}
            </p>
            <h2 className="text-[#003d7a] text-3xl md:text-5xl font-bold mb-4">
              {data.heading}
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto mb-10">
              {data.description}
            </p>
            <Image
              src="/wp-content/landingpage/mca-2026/faq.webp"
              width={300}
              height={300}
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
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
      </div>
    </section>
  );
};

export default FAQSection;
