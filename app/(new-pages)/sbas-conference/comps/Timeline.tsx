import { timelineData } from "../constant";

const Timeline = () => {
  return (
    <section id="timeline-scroll">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 xl:px-0 py-14 sm:py-16 md:py-20 xl:py-24">
        {/* Heading */}
        <div className="space-y-3 mb-8 sm:mb-10 text-center">
          <p className="text-[#A9812F] text-xs font-bold tracking-[1.5px]">
            TIMELINE
          </p>

          <h4 className="font-bold font-lora text-2xl sm:text-3xl leading-tight">
            Important Dates
          </h4>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {timelineData.map((item, index) => (
            <div
              key={`${item.month}-${item.date}-${index}`}
              className="bg-white rounded-xl overflow-hidden border-2 border-[#D1C9B8]"
            >
              <div className="bg-[#19241F] py-2 px-4">
                <h6 className="text-white text-[11px] font-bold tracking-[1px]">
                  {item.month}
                </h6>
              </div>

              <div className="pt-4 px-4 pb-6 sm:pb-8">
                <h4 className="font-lora font-bold text-3xl mb-1">
                  {item.date}
                </h4>

                <h5 className="text-[#44504A] text-xs leading-5">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;