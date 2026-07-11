import { Check } from "lucide-react";
import React from "react";

const YRCCriteria = () => {
  return (
    <section
      style={{
        backgroundImage: "linear-gradient(180deg,#051630 0%,#0060aa 100%)",
      }}
      className="py-[50px] px-4"
    >
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="text-center text-white font-bold">
          <h3 className="mb-5">Criteria to join YRC</h3>
        </div>
        <div>
          <ul className="text-white">
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                Must be a student of a recognized school, college, or
                university.
              </span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>Age limit is typically between 15 to 30 years.</span>
            </li>
            <li className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>
                Willingness to uphold and work towards Red Cross principles of
                humanity, impartiality, neutrality, independence, voluntary
                service, unity, and universality.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YRCCriteria;
