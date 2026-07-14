import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, Home, Truck, ShieldCheck } from "lucide-react";
import { FeeTable } from "../components";
import { FEE_OVERVIEW_TABS } from "@/features/admission/admissions/constants";
import SectionDivider from "@/components/common/SectionDivider";
import Button from "@/components/common/Button";

const ICON_MAP: Record<string, React.ElementType> = {
  Wallet,
  Home,
  Truck,
  ShieldCheck,
};

const FeeOverviewSection = () => {
  return (
    <section className="relative z-4 py-10 md:py-16 px-6 md:px-8 lg:px-11 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full">
        <h4 className="text-2xl md:text-3xl mb-8 text-white font-bold font-serif border-l-4 border-white pl-5 leading-none">
          Fee Details
        </h4>

        <Tabs
          defaultValue="item-1"
          orientation="vertical"
          className="flex flex-col lg:flex-row gap-6 lg:gap-10"
        >
          {/* NAVIGATION */}
          <div className="w-full lg:w-[380px] shrink-0">
            <TabsList className="flex flex-col w-full h-auto bg-[#061623] border font-poppins border-[#061623] p-1.5 rounded-sm shadow-sm">
              {FEE_OVERVIEW_TABS.map((tab) => {
                const IconComponent = ICON_MAP[tab.icon];
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="w-full text-left cursor-pointer justify-start py-3.5 px-4 rounded-sm transition-all duration-300 whitespace-nowrap leading-tight flex items-center gap-3
                     data-[state=active]:bg-transparent data-[state=active]:text-[#3598f5] 
                    data-[state=inactive]:text-white/90 hover:text-white/90 text-[13px] md:text-sm"
                  >
                    {IconComponent && <IconComponent size={16} className="shrink-0" />}
                    <span>{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <div className="hidden lg:block mt-6">
              <Button
                href="/fee-structure"
                variant="outline"
                className="font-poppins !border-[#0562b9] !text-[#1e82df] hover:!bg-[#0562b9] hover:!text-white tracking-normal w-fit"
              >
                View Fee Structure
              </Button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 w-full overflow-hidden">
            {FEE_OVERVIEW_TABS.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0 outline-none">
                <FeeTable items={tab.fees} />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="flex lg:hidden items-center justify-center mt-10">
          <Button
            href="/fee-structure"
            target="_blank"
            variant="primary"
            className="!bg-[#0a41a1] hover:!bg-[#051730] !rounded-sm font-poppins !normal-case tracking-normal w-fit"
          >
            View Fee Structure
          </Button>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default FeeOverviewSection;
