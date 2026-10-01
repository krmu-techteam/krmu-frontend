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
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="max-w-[1440px] mx-auto w-full">
                {/* Main Heading from CMS */}
                <h4 className="text-2xl font-serif sm:text-3xl md:text-[38px] text-white   font-bold mb-8">
                    {heading}
                </h4>

                {/* FAQ Sections */}
                <div className="space-y-10">
                    {faqs?.map((faqSection) => (
                        <div key={faqSection.id}>
                            {/* Section Sub-Title */}
                            {faqSection.title && (
                                <h5 className="text-lg font-serif sm:text-2xl md:text-[24px] text-white font-bold mb-4">
                                    {faqSection.title}
                                </h5>
                            )}

                            {/* Accordion for Questions */}
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full space-y-3"
                                defaultValue={`item-${faqSection.exam_faq_acc?.[0]?.id ?? "1"}`}
                            >
                                {faqSection.exam_faq_acc?.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={`item-${item.id}`}
                                        className="bg-[#061623]  rounded-[4px] overflow-hidden transition-all duration-200"
                                    >
                                        <AccordionTrigger className="text-left text-sm sm:text-base text-white font-semibold px-4 sm:px-6 py-4 hover:no-underline hover:text-[#38bdf8] transition-colors [&[data-state=open]]:text-[#38bdf8]">
                                            {item.ques}
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300   bg-[#061623]">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: item.answer,
                                                }}
                                                className="prose prose-invert max-w-none text-slate-300 leading-relaxed"
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
