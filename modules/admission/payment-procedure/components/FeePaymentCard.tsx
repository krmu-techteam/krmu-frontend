import Link from "next/link";

const FeePaymentCard = ({
 item
}: {
  item:{title: string,subtitle:string,link:string,btnText:string}
}) => {
  return (
    <div className="md:w-1/2 z-10" key={item.title}>
      <div
        className="text-[18px] font-poppins md:text-2xl  xl:text-[28px] flex flex-col items-center justify-center font-semibold py-16 text-white rounded-t-[4px]"
        style={{
          background: "linear-gradient(45deg,#051630,#014d8b)",
        }}
      >
        <p>{item?.title}</p>
        <span className="text-lg font-medium mt-1">{item?.subtitle}</span>
      </div>
      <div>
        <Link
          href={item?.link}
          className="bg-[#e31e24] py-3 font-poppins text-white px-[29px] inline-block w-full text-base md:text-xl xl:text-2xl font-semibold leading-[1] rounded-b-[4px] hover:bg-[#034272]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{item?.btnText}</span>
        </Link>
      </div>
    </div>
  );
};
export default FeePaymentCard;
