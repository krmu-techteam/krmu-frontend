
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Advisory } from "@/lib/api/facAdv";
import DeansSlide from "./DeansSlide";
import AdvisorySlide from "./AdvisorySlide";

type Props = {
  data: Advisory[];
};

const AboutTabs = ({ data }: Props) => {
  return (
    <>
      <Tabs defaultValue="advisoryboard" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="h-14 lg:h-16 p-[3px] bg-slate-100 rounded-full border border-slate-200 shadow-inner faculty-with-advisory">
            <TabsTrigger
              value="advisoryboard"
              className="cursor-pointer px-8 lg:px-12 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 data-[state=active]:bg-[#051630] data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              Advisory Board
            </TabsTrigger>
            <TabsTrigger
              value="krmudean"
              className="cursor-pointer px-8 lg:px-12 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 data-[state=active]:bg-[#051630] data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              Deans of KRMU Schools
            </TabsTrigger>
          </TabsList>
        </div>
        <div >
          <TabsContent value="advisoryboard" className="w-full">
            <AdvisorySlide  />
          </TabsContent>
          <TabsContent value="krmudean">
            <DeansSlide />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default AboutTabs;
