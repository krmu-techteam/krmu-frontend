import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgramCard from "./ProgramCard";
import { programs } from "../types/data/programs";

const tabConfig = [
  { label: "Undergraduate", value: "ug" },
  { label: "Postgraduate", value: "pg" },
  { label: "Doctoral", value: "doctoral" },
];

const ExploreProgrammsTab = () => {
  return (
    <Tabs defaultValue="ug" className="w-full">
      {/* Tabs Header */}
      <TabsList className="gap-5 flex-wrap md:flex-nowrap">
        {tabConfig.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="text-black border-black bg-white data-[state=active]:bg-[#ca1b1f]
            data-[state=active]:text-white px-10 py-5 border
            data-[state=active]:border-white rounded-full cursor-pointer
            text-2xl font-semibold"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      <div className="mt-36 sm:mt-20 md:mt-10">
        {tabConfig.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="space-y-8">
              {programs
                .filter((program) => program.level === tab.value)
                .map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default ExploreProgrammsTab;
