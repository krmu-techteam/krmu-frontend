"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FacultyTabContent } from "@/lib/api/common";

type Props = {
  facTabs: FacultyTabContent; // this contains `faculty_tab` array
};

const SingleFacultyTabs = ({ facTabs }: Props) => {
  const tabs = facTabs?.faculty_tab || [];

  return (
    <section className="mt-[100px]">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex w-full flex-col gap-6">
          {tabs.length > 0 ? (
            <Tabs
              defaultValue={tabs[0]?.tabname
                ?.toLowerCase()
                .replace(/\s+/g, "-")}
            >
              <TabsList className="flex flex-wrap gap-2 w-full bg-transparent fac_tab_panel">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.tabname.toLowerCase().replace(/\s+/g, "-")}
                    className="font-semibold text-2xl cursor-pointer hover:text-white"
                  >
                    {tab.tabname}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabs.map((tab) => (
                <TabsContent
                  key={tab.id}
                  value={tab.tabname.toLowerCase().replace(/\s+/g, "-")}
                  className="mt-10 text-white"
                >
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
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <p>No tabs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleFacultyTabs;
