import Image from "next/image";

type IndusItem = {
  heading: string;
  imgUrl: string;
  pointer: string[];
};

type Props = {
  data: IndusItem[];
};

const IndusAcadCollabCard = ({ data }: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {data.map((item, index) => (
        <div key={index} className="rekhi-program-box relative">
          {/* Left border */}
          <span className="absolute left-0 top-0 h-full w-1 bg-purple-700 rounded-l-xl" />

          <div className="p-6">
            <Image
              src={item.imgUrl || "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ey_kp_scaled_e223e383eb.png"}
              width={176}
              height={220}
              alt={item.heading}
            />

            <div className="my-5">
              <h3 className="rekhi-program-title">{item.heading}</h3>

              <ul className="rekhi-program-description list-disc pl-5 space-y-2">
                {item.pointer.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndusAcadCollabCard;
