import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FeeStructurePaymentProc = () => {
  return (
    <section className="py-[30px] bg-[#0060aa14] px-4">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="w-full">
          <h3 className="text-3xl md:text-[64px] font-semibold text-[#0060aa] leading-[1.67] mb-5">
            Payment Procedure
          </h3>
          <p>
            K.R. Mangalam University offers a variety of secure and convenient
            payment methods for all fees, including registration, tuition,
            hostel, transport, and other charges. These options are designed to
            streamline the payment process, ensuring a smooth and hassle-free
            experience for students and their families.{" "}
            <Link
              href="/payment-procedure"
              className="text-[#af406a] hover:text-[#0060aa]"
              target="_blank" rel="noopener noreferrer"
            >
              Read More
            </Link>
          </p>
          <h3 className="text-3xl md:text-[64px] font-semibold text-[#0060aa] leading-[1.67] mt-10 mb-5">
            Frequently Asked Questions
          </h3>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2.5 items-start"
              defaultValue="item-1"
            >
              <AccordionItem
                value="item-1"
                className="bg-white text-[#716d6c] rounded-sm"
              >
                <AccordionTrigger className="py-[15px] px-[25px] bg-white text-xl  hover:no-underline cursor-pointer feestructurepaymentaccpanel">
                  How often are the fees reviewed?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p>
                    Fees are reviewed annually to reflect the university’s
                    operational costs and inflation. Any changes are
                    communicated before the new academic year.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-white text-[#716d6c] rounded-[8px]"
              >
                <AccordionTrigger className="py-[15px] px-[25px] bg-white text-xl  hover:no-underline cursor-pointer feestructurepaymentaccpanel">
                  {` What is the university's refund policy?`}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p>
                    {` Our refund policy is designed to be fair and considerate of
                    students’ circumstances. For detailed information, please
                    visit our [Refund Policy] page.`}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-white text-[#716d6c] rounded-sm"
              >
                <AccordionTrigger className="py-[15px] px-[25px] bg-white text-xl  hover:no-underline cursor-pointer feestructurepaymentaccpanel">
                  Are there any additional fees not listed here?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p>
                    Listed fees cover the majority of your academic costs.
                    However, some programs may have specific fees for materials,
                    field trips, or special equipment. Detailed information can
                    be found in the program-specific fee breakdown.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="bg-white text-[#716d6c] rounded-sm"
              >
                <AccordionTrigger className="py-[15px] px-[25px] bg-white text-xl  hover:no-underline cursor-pointer feestructurepaymentaccpanel">
                  How can I apply for financial aid?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p>
                    Financial aid applications are open to all eligible
                    students. For more information on how to apply, eligibility
                    criteria, and deadlines, please visit our [Financial Aid]
                    page.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructurePaymentProc;
