import { PlacementPolicyCardProps } from "../types";

const PlacementPolicyCard = ({
  title,
  description,
  items,
  note,
}: PlacementPolicyCardProps) => {
  return (
    <>
      <div className="max-w-[1530px] mx-auto w-full pt-[30px] pb-[30px] px-[30px] border border-[#0055A4] bg-[#061623] rounded-[4px] text-white placementulli font-poppins">
        <div className="md:text-center">
          <h3 className="leading-[3] my-2.5 text-xl md:text-4xl font-serif font-bold">
            {title}
          </h3>
        </div>
        <p className="mb-5">{description}</p>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="max-w-[1530px] mx-auto w-full my-[60px] text-white lg:flex">
        <div className="lg:w-1/2 p-10 lg:p-[30px] font-poppins border border-[#9b9b9b] rounded-[4px]">
          <p>{note}</p>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </>
  );
};
export default PlacementPolicyCard;
