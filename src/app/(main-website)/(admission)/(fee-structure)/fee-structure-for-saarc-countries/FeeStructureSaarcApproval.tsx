import { FEEStructureApproval } from "@/lib/types/feestructuresaarc";
import Link from "next/link";

type Props = {
  feeStructSAARCApproval: FEEStructureApproval;
};

const FeeStructureSaarcApproval = ({ feeStructSAARCApproval }: Props) => {
  return (
    <section className="py-[60px] px-4">
      <div className="max-w-[1600px] mx-auto w-full py-[84px] text-center bg-[url(/feestucturebot.webp)] bg-cover bg-no-repeat rounded-[30px] text-white">
        <p className="mb-5">
          Note: “The fee payable in subsequent years may increase upto 10% per
          annum”
          <br /> *Subject to Approval from the Competent Authority
        </p>
        <div className="max-w-[30%] mx-auto w-full">
          <div className="border-b border-white"></div>
        </div>
        <h4 className="leading-[1.5] md:leading-[2] text-2xl md:text-4xl font-bold my-5">
          Fee Structure for SAARC Countries (except India)
        </h4>
        <div className="flex flex-col justify-center items-center">
          {feeStructSAARCApproval?.fee_struct_click_here && (
            <Link
              href={feeStructSAARCApproval?.fee_struct_click_here || ""}
              className="py-[11px] px-[23px] bg-[#e31e24] text-white rounded-[4px] mb-[30px]"
              target="_blank" rel="noopener noreferrer"
            >
              Click Here
            </Link>
          )}
          {feeStructSAARCApproval?.office_order_url && (
            <Link
              href={feeStructSAARCApproval?.office_order_url || ""}
              className="py-[11px] px-[23px] bg-[#e31e24] text-white rounded-[4px] mb-[30px]"
              target="_blank" rel="noopener noreferrer"
            >
              OFFICE ORDER REGARDING THE FEE REFUND POLICY
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeeStructureSaarcApproval;
