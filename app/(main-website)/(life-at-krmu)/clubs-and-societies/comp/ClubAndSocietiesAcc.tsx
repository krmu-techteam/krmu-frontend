import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClubAccordion } from "@/lib/types/club-and-societies";
import AccordionSlide from "./AccordionSlide";
import { Plus } from "lucide-react";

type Props = {
  accordionsData: ClubAccordion[];
};

const ClubAndSocietiesAcc = ({ accordionsData }: Props) => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/80 from-80% to-white">
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8">
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 gap-6 items-start"
          defaultValue="item-1"
        >
          {accordionsData &&
            accordionsData.map((accordion, i) => {
              return (
                <AccordionItem 
                  key={accordion?.id} 
                  value={`${i + 1}`}
                  className="group relative bg-white  border-none rounded-xs overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#051630]" />
                  
                  <AccordionTrigger className="flex items-center justify-start gap-4 px-8 md:px-12 py-5 hover:no-underline [&>svg:last-child]:hidden group bg-gradient-to-r from-blue-50/80 to-transparent">
                    <div className="flex items-center gap-5 md:gap-8">
                      <div className="flex cursor-pointer items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#051630]/5 group-data-[state=open]:bg-[#051630] group-data-[state=open]:text-white transition-all duration-300 shrink-0">
                        <Plus className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-data-[state=open]:rotate-45" />
                      </div>
                      <span className="text-lg md:text-xl font-bold text-[#051630] text-left transition-colors duration-300">
                        {accordion?.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-4 md:px-12 py-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: accordion.content,
                      }}
                      className="clubcontent mb-8 text-slate-700 text-lg leading-relaxed"
                    />
                    <div className="mt-4">
                      <AccordionSlide slides={accordion?.clubimages} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </div>
    </section>
  );
};

export default ClubAndSocietiesAcc;
