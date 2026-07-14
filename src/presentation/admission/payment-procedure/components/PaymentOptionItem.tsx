 

const PaymentOptionItem = ({
  item,
  index,
}: {
  item: string;
  index: number;
}) => {
  return (
    <li
      key={index}
      className="flex font-poppins items-center text-white gap-5 text-xl py-[15px]"
    >
      <div>
        <span className="w-11 h-11 bg-[#d2dee4] flex items-center justify-center text-[#434343] text-xl rounded-full">
          {index + 1}
        </span>
      </div>
      {item}
    </li>
  );
};
export default PaymentOptionItem;
