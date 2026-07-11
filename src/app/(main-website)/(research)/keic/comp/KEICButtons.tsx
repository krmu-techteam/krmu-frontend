import Link from "next/link";

const KEICButtons = () => {
  return (
    <section className="pb-[50px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <div className="flex flex-col justify-center items-center">
          <Link
            href="https://www.krmangalam.edu.in/wp-content/uploads/2024/09/Innovation-and-Start-Up-Policy-of-KRMU.pdf"
            className="mt-10 mb-5 py-[11px] px-[23px] bg-[#0060aa] text-white rounded-[4px] text-[13px] inline-block"
            target="_blank" rel="noopener noreferrer"
          >
            Innovation and Startup Policy
          </Link>
          <Link
            href="https://www.krmangalam.edu.in/wp-content/uploads/2024/12/Standard-Operating-Procedure-SOP-for-KEIC-Mart-K.R.-Mangalam-University.pdf"
            className="mt-10 mb-5 py-[11px] px-[23px] bg-[#0060aa] text-white rounded-[4px] text-[13px] inline-block"
            target="_blank" rel="noopener noreferrer"
          >
            Standard Operating Procedure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KEICButtons;
