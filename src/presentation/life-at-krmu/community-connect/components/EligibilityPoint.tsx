import { Check } from "lucide-react";

const EligibilityPoint = ({ points }: { points: string[] }) => {
  return (
    <div>
      <ul className="text-white">
        {points?.map((point, idx) => {
          return (
            <li key={idx} className="flex items-center gap-3 py-1">
              <div className="bg-black rounded-full flex items-center justify-center p-1 w-[27px] h-[27px] ">
                <Check color="#ffffff" strokeWidth={3} />
              </div>
              <span>{point}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EligibilityPoint;
