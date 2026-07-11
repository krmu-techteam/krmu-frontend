import Image from "next/image";

const ObjectivesList = ({
  heading,
  points,
}: {
  heading: string;
  points: string[];
}) => {
  return (
    <div className="lg:w-1/2 mb-5">
      <div className="py-[30px] md:pl-[40px] md:pr-[30px] text-white border border-[#0060aa5e] bg-[#0060aa5e] min-h-[1px] h-full rounded-b-[20px]">
        <p className="text-2xl mt-2.5 mb-[15px]">{heading}</p>
        <ul className="mt-2.5">
          {points?.map((point, idx) => {
            return (
              <li key={idx} className="flex items-start gap-3 py-2.5">
                <Image
                  src="/white-location-arrow.svg"
                  width={22}
                  height={26}
                  alt=""
                />{" "}
                <span>{point}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ObjectivesList;
