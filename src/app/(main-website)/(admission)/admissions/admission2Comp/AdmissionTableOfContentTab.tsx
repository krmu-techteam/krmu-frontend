import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Adm2FAQ } from "@/lib/types/admission2";

type Props = {
  tocfaqs: Adm2FAQ[];
};

const AdmissionTableOfContentTab = ({ tocfaqs }: Props) => {
  return (
    <Tabs
      defaultValue={tocfaqs?.[0]?.tocpoint.toLowerCase() ?? ""}
      className="flex flex-col w-full"
    >
      {/* Tab list: Horizontal Top Navigation */}
      <TabsList className="flex flex-row overflow-x-auto w-full h-auto bg-transparent border-b border-gray-100 justify-start md:justify-center no-scrollbar mb-8 gap-8 md:gap-16 p-0">
        {tocfaqs.map((section) => (
          <TabsTrigger
            key={section.id}
            value={section.tocpoint.toLowerCase()}
            className="relative text-[15px] md:text-xl font-bold cursor-pointer px-1 py-3 
               text-gray-400 rounded-none bg-transparent shadow-none
               data-[state=active]:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[3px] after:bg-[#0a41a1] after:transition-all after:duration-300
               data-[state=active]:after:w-full "
          >
            {section.tocpoint}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab content: Full Width Section */}
      <div className="w-full pb-4">
        {tocfaqs.map((section) => (
          <TabsContent
            key={section.id}
            value={section.tocpoint.toLowerCase()}
            className="mt-0 outline-none"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue={`item-${section.faq[0]?.id ?? 1}`}
            >
              {section.faq.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className="border border-gray-100 px-6 py-2 rounded-sm bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#0a41a1]/20 last:border-b last:border-gray-100"
                >
                  <AccordionTrigger className="text-base md:text-xl font-bold text-[#051630] hover:no-underline text-left py-4 transition-colors data-[state=open]:text-[#0a41a1]">
                    {item.ques}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-lg text-gray-500 leading-relaxed pb-6">
                    <p className="font-medium">{item.ans}</p>
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

export default AdmissionTableOfContentTab;
