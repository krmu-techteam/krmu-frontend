 
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PaymentFaqItemProps {
  value: string;
  question: string;
  answer: React.ReactNode;
}

const PaymentFaqItem = ({
  value,
  question,
  answer,
}: PaymentFaqItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="py-5 pl-10 pr-5 text-base md:text-xl font-medium text-white bg-[#061623] border border-white/50 cursor-pointer paymentprocAccpanel rounded-xs font-poppins ">
        {question}
      </AccordionTrigger>

      <AccordionContent className="flex flex-col text-white font-poppins text-lg gap-4 text-balance p-5 mb-5  ">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default PaymentFaqItem;