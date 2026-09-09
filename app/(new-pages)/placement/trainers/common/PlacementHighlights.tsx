import { placementStats } from "../constant";

const PlacementHighlights = () => {
  return (
    <section className="border-b border-[#d9d5cf] bg-[#fdfaf5]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {placementStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                flex min-h-[120px] flex-col items-center justify-center
                border-[#d9d5cf]
                px-3 py-5
                text-center
                sm:min-h-[140px]
                sm:px-4
                md:min-h-[148px]

                /* Mobile: vertical divider between columns */
                ${index % 2 === 0 ? "border-r" : ""}

                /* Mobile: horizontal divider between rows */
                ${index >= 2 ? "border-t" : ""}

                /* Tablet: reset borders for 3-column layout */
                md:border-r-0
                md:border-t-0
                ${index % 3 !== 2 ? "md:border-r" : ""}
                ${index >= 3 ? "md:border-t" : ""}

                /* Desktop: 6 columns */
                lg:border-t-0
                ${index !== placementStats.length - 1 ? "lg:border-r" : ""}
                lg:last:border-r-0
              `}
            >
              <div
                className="
                  font-newsreader
                  text-[28px]
                  font-semibold
                  leading-none
                  text-[#001836]
                  sm:text-[36px]
                  md:text-[40px]
                  lg:text-[42px]
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-2
                  font-poppins
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-[0.12em]
                  text-[#303030]
                  sm:mt-3
                  sm:text-xs
                  md:text-sm
                  lg:text-base
                  lg:tracking-[0.14em]
                "
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementHighlights;
