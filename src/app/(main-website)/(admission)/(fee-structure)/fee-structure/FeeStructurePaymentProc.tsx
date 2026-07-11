import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FeeStructurePaymentProc = () => {
  return (
    <section className="py-[30px] ">
      <div className="max-w-[1530px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-11 xl:px-16">
        <div className="w-full">
          <h3 className="text-3xl md:text-[64px] font-semibold text-white leading-[1.67] mb-5">
            Payment Procedure
          </h3>
          <p className="text-white font-poppins text-base">
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
          <h3 className="text-3xl md:text-[64px] font-semibold text-white leading-[1.67] mt-10 mb-5">
            Frequently Asked Questions
          </h3>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full grid  grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2.5 items-start"
              defaultValue="item-1"
            >
              <AccordionItem
                value="item-1"
                className=" text-[#716d6c] bg-[#142532] rounded-sm border border-white/20"
              >
                <AccordionTrigger className="py-[15px] text-white font-poppins px-[25px] text-lg  hover:no-underline cursor-pointer">
                  How often are the fees reviewed?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p className="font-poppins text-white/80">
                    Fees are reviewed annually to reflect the university’s
                    operational costs and inflation. Any changes are
                    communicated before the new academic year.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" text-[#716d6c] bg-[#142532] rounded-sm border border-white/20"
              >
                <AccordionTrigger className="py-[15px] px-[25px] text-white font-poppins text-lg  hover:no-underline cursor-pointer">
                  {` What is the university's refund policy?`}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p className="font-poppins text-white/80">
                    {` Our refund policy is designed to be fair and considerate of
                    students’ circumstances. For detailed information, please
                    visit our [Refund Policy] page.`}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className=" text-[#716d6c] bg-[#142532] rounded-sm border border-white/20"
              >
                <AccordionTrigger className="py-[15px] px-[25px] text-white font-poppins text-lg  hover:no-underline cursor-pointer">
                  Are there any additional fees not listed here?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p className="font-poppins text-white/80">
                    Listed fees cover the majority of your academic costs.
                    However, some programs may have specific fees for materials,
                    field trips, or special equipment. Detailed information can
                    be found in the program-specific fee breakdown.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className=" text-[#716d6c] bg-[#142532] rounded-sm border border-white/20"
              >
                <AccordionTrigger className="py-[15px] px-[25px] text-white font-poppins text-lg  hover:no-underline cursor-pointer">
                  How can I apply for financial aid?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 leading-[1.2] pt-2.5 px-[25px] pb-[25px] text-base">
                  <p className="font-poppins text-white/80">
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
