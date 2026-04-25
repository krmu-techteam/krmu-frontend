import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TOCFAQ } from "@/lib/types/school-programme";

type Props = {
  tocfaqs: TOCFAQ[];
};

const TableOfContentTab = ({ tocfaqs }: Props) => {
  return (
    <Tabs
      defaultValue={tocfaqs?.[0]?.tocpoint.toLowerCase() ?? ""}
      className="flex flex-col w-full"
    >
      
      {/* Tab list: Horizontal Top Navigation */}
      <TabsList className="flex flex-row overflow-x-auto w-full h-auto bg-transparent border-b border-gray-200 justify-start no-scrollbar mb-4 ">
        {tocfaqs.map((section) => (
          <TabsTrigger
            key={section.id}
            value={section.tocpoint.toLowerCase()}
            className="relative text-base md:text-xl font-medium cursor-pointer px-1 py-2 
               text-gray-500 
               data-[state=active]:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[3px] after:bg-[#0a41a1] after:transition-all after:duration-300
               data-[state=active]:after:w-full"
          >
            {section.tocpoint}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab content: Full Width Section */}
      <div className="w-full">
        {tocfaqs.map((section) => (
          <TabsContent
            key={section.id}
            value={section.tocpoint.toLowerCase()}
            className="mt-0"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full cursor-pointer"
              defaultValue={`item-${section.faq[0]?.id ?? 1}`}
            >
              {section.faq.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className="border-none hidetocplusminusicon"
                >
                  <AccordionTrigger className="text-sm md:text-xl cursor-pointer tocplusminusicon text-black font-semibold text-left py-3 hover:text-[#0a41a1] transition-colors">
                    {item.ques}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-gray-700 leading-relaxed pb-6 text-sm md:text-lg">
                    <p>{item.ans}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default TableOfContentTab;
