import { timelineData } from "../constant";

const Timeline = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-24">
        <div className="space-y-3 mb-8 text-center">
          <p className="text-[#A9812F] text-xs font-bold tracking-[1.5px]">
            TIMELINE
          </p>
          <h4 className="font-bold font-lora text-3xl">Important Dates</h4>
        </div>
        <div className="grid grid-cols-5 gap-5">
          {timelineData.map((item, index) => (
            <div
              key={`${item.month}-${item.date}-${index}`}
              className="bg-white rounded-xl overflow-hidden border-2 border-[#D1C9B8]"
            >
              <div className="bg-black py-2 px-4">
                <h6 className="text-white text-[11px] font-bold tracking-[1px]">
                  {item.month}
                </h6>
              </div>

              <div className="pt-4 px-4 pb-8">
                <h4 className="font-lora font-bold text-3xl mb-1">
                  {item.date}
                </h4>

                <h5 className="text-[#44504A] text-xs">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
