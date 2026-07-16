"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FacultyTabContent } from "@/lib/api/common";

type Props = {
  facTabs: FacultyTabContent; // contains faculty_tab array
};

const SingleFacultyAcc = ({ facTabs }: Props) => {
  const tabs = facTabs?.faculty_tab || [];

  return (
    <section className="mt-12">
      <div className="max-w-[1000px] mx-auto w-full">
        {tabs.length > 0 ? (
          <Accordion
            type="single"
            collapsible
            className="w-full text-white"
            defaultValue={`item-${tabs[0].id}`}
          >
            {tabs.map((tab) => (
              <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                <AccordionTrigger className="fac_acc_ques justify-center text-2xl font-semibold">
                  {tab.tabname}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {tab.tabcontent ? (
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: tab.tabcontent }}
                    />
                  ) : (
                    <p className="text-gray-500 italic">
                      No content available.
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-gray-500 text-center italic">
            No sections available.
          </p>
        )}
      </div>
    </section>
  );
};

export default SingleFacultyAcc;
