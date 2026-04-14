import { coursePlacementData } from "../content";
import PlacementOverviewSlide from "./PlacementOverviewSlide";

export default function PlacementOverview() {
  return (
    <section className="bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,#f0f7ff_50%,#e6f0ff_100%)] relative overflow-hidden backdrop-blur-[20px] py-[50px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* LEFT - Slider */}
          <div className="w-full lg:w-1/2">
            <div className="mx-3 lg:mx-0">
              {/* Slide 1 */}
              <PlacementOverviewSlide data={coursePlacementData} />

              {/* Same pattern for remaining slides (no change) */}
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="w-full lg:w-1/2 lg:pl-10 md:px-4 mt-4 lg:mt-0">
            <h4 className="mb-2 text-sm font-semibold">Placement Overview</h4>

            <h2 className="font-bold mb-3 text-2xl md:text-4xl">
              The World's <br />
              <span className="text-red-600">
                Leading
                <br />
                Companies
              </span>{" "}
              Hire Our Talent
            </h2>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[15px] mb-4">
              {/* Card 1 */}
              <div className="bg-[#0e3d8a] text-white sm:min-h-[160px] h-full p-4 flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-[5px] hover:brightness-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                <h3 className="font-bold m-0 text-[28px]">100%</h3>
                <p className="text-sm mt-0 leading-none text-[#cbd5e0]">
                  Placement Assistance
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0e3d8a] text-white sm:min-h-[160px] h-full p-4 flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-[5px] hover:brightness-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                <h3 className="font-bold m-0 text-[28px]">800+</h3>
                <p className="text-sm mt-0 leading-none text-[#cbd5e0]">
                  Companies Visited
                  <br />
                  for Recruitment
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0e3d8a] text-white sm:min-h-[160px] h-full p-4 flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-[5px] hover:brightness-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                <h3 className="font-bold m-0 text-[28px] sm:inline-flex flex-col">
                  56.6 <small className="text-base">LPA</small>
                </h3>
                <p className="text-sm mt-0 leading-none text-[#cbd5e0]">
                  Highest National
                  <br />
                  Package Offered
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#0e3d8a] text-white sm:min-h-[160px] h-full p-4 flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-[5px] hover:brightness-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                <h3 className="font-bold m-0 text-[28px]">18K+</h3>
                <p className="text-sm mt-0 leading-none text-[#cbd5e0]">Alumni Base</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
