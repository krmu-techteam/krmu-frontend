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
      className="flex-row text-white"
    >
      {/* Tab list (dynamic tocpoints) */}
      <TabsList className="flex-col w-1/2 md:w-1/3 h-full bg-transparent items-start">
        <div>
          <h4 className="text-sm md:text-2xl font-medium mb-8 text-white md:text-black">
            Table of content
          </h4>
        </div>

        {tocfaqs.map((section) => (
          <TabsTrigger
            key={section.id}
            value={section.tocpoint.toLowerCase()}
            className="relative text-xs md:text-xl cursor-pointer p-0 mb-5
               text-white md:text-black
               data-[state=active]:md:text-[#0a41a1]
               data-[state=active]:bg-transparent
               data-[state=active]:shadow-none
               data-[state=active]:after:content-['']
               data-[state=active]:after:absolute
               data-[state=active]:after:top-1/2
               data-[state=active]:after:translate-y-[-50%]
               data-[state=active]:after:left-full
               data-[state=active]:after:ml-[5px]
               data-[state=active]:md:after:w-[100px]
               data-[state=active]:after:w-[20px]
               data-[state=active]:after:h-[2px]
               data-[state=active]:after:bg-[#0a41a1]"
          >
            {section.tocpoint}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab content (dynamic accordions per section) */}
      <div className="w-1/2 md:w-2/3">
        {tocfaqs.map((section) => (
          <TabsContent
            key={section.id}
            value={section.tocpoint.toLowerCase()}
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
                  <AccordionTrigger className="text-sm md:text-xl cursor-pointer tocplusminusicon text-white md:text-black">
                    {item.ques}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance text-white md:text-black">
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
