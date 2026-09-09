import { Slider } from "@/components/ui/slider";

interface HiringSector {
  name: string;
  percentage: number;
}

interface SectorWiseHiringProps {
  sectors: HiringSector[];
}

const SectorWiseHiring = ({ sectors }: SectorWiseHiringProps) => {
  return (
    <div className="w-full">
      <h4 className="text-xs sm:text-sm md:text-base text-[#7A1F2B] tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8">
        Sector wise hiring
      </h4>

      <ul>
        {sectors.map((sector) => (
          <li
            key={sector.name}
            className="flex items-center gap-4 sm:gap-6 border-b border-[#ccc] py-4 sm:py-5"
          >
            {/* Sector name */}
            <span className="text-sm sm:text-base md:text-lg text-[#12233F] font-medium w-[35%] sm:w-1/3 shrink-0">
              {sector.name}
            </span>

            {/* Slider + Percentage */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <Slider
                value={[sector.percentage]}
                max={100}
                step={1}
                // disabled
                className="
                  w-full
                  [&_[data-slot=slider-track]]:h-2 sm:[&_[data-slot=slider-track]]:h-3
                  [&_[data-slot=slider-track]]:rounded-none
                  [&_[data-slot=slider-track]]:bg-[#e3e2e1]
                  [&_[data-slot=slider-range]]:bg-black
                  [&_[data-slot=slider-range]]:rounded-none
                  [&_[data-slot=slider-thumb]]:hidden
                "
              />

              <span className="text-base sm:text-lg md:text-[22px] text-black w-9 sm:w-10 shrink-0 text-right">
                {sector.percentage}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectorWiseHiring;