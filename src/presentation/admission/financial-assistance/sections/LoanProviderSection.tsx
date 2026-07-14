import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
 
import { BankLoan, NBFCARDS } from "@/lib/types/financialAssistance";
import { LoanProviderCard } from "../components";
 

type Props = {
  bankLoansCards: BankLoan;
  nbfccardsData: NBFCARDS;
};

const LoanProviderSection = ({ bankLoansCards, nbfccardsData }: Props) => {
  return (
    <>
      <section className="my-12 px-4">
        <div className="max-w-[1530px] px-6 md:px-7 xl:px-16 mx-auto w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-[#061623] rounded-[3px] font-poppins text-white p-5 text-xl font-semibold cursor-pointer hover:no-underline bankloanaccpanel">
                Bank Loans
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                  {bankLoansCards?.bank_loan_card &&
                    bankLoansCards?.bank_loan_card?.map((bank, i) => {
                      return (
                        <LoanProviderCard
                          key={i}
                          bankImgs={bank?.bank_img}
                          name={bank?.bank_contact_person}
                          content={bank?.bankinfo}
                          downloadUrl={bank?.download_btn_url}
                          quickApplyUrl={bank?.quick_apply_btn_url}
                        />
                      );
                    })}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-[#061623] rounded-[3px] font-poppins text-white p-5 text-xl font-semibold cursor-pointer hover:no-underline bankloanaccpanel">
                NBFC’s
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {nbfccardsData?.nbfc_cards &&
                    nbfccardsData?.nbfc_cards?.map((bank, i) => {
                      return (
                        <LoanProviderCard
                          key={i}
                          bankImgs={bank?.bank_img}
                          name={bank?.bank_contact_person}
                          content={bank?.bankinfo}
                          downloadUrl={bank?.download_btn_url}
                          quickApplyUrl={bank?.quick_apply_btn_url}
                        />
                      );
                    })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default LoanProviderSection;
