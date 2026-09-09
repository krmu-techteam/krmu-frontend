import SectorWiseHiring from "./SectorWiseHiring";
import OfficialReports from "./OfficialReports";
import { hiringSectors, OfficialReports as reports } from "../constant";

const HiringTrendsAndReports = () => {
  return (
    <section className="px-5 xl:px-0 py-10 sm:py-14 md:py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16">
        <SectorWiseHiring sectors={hiringSectors} />

        <OfficialReports reports={reports} />
      </div>
    </section>
  );
};

export default HiringTrendsAndReports;