import { Accordion } from "@/components/ui/accordion";
import { PaymentFaqItem } from "../components";
import { PAYMENT_FAQS } from "@/features/admission/payment-procedure";

const PaymentProcedureFaqSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1530px] mx-auto w-full px-6 lg:px-7 xl:px-16">
        <div className="text-center">
          <h3 className="text-[26px] md:text-5xl text-white font-semibold mb-5 md:mb-10">
            Frequently Asked Questions
          </h3>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {PAYMENT_FAQS.map((faq) => (
              <PaymentFaqItem
                key={faq.value}
                value={faq.value}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcedureFaqSection;
