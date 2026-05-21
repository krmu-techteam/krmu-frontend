import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { KREEEnrollAcc } from "@/lib/types/kree";

type Props = {
  kreeEnrolData: KREEEnrollAcc[];
};

const KREEEnroll = ({ kreeEnrolData }: Props) => {
  return (
    <section className="py-[4%] px-4">
      <div className="max-w-[1267px] mx-auto w-full">
        <h2 className="kree-titlecolor text-5xl font-semibold text-center leading-[1.5] mt-2.5 mb-[15px]">
          KREE 2026
        </h2>

        <p className="mb-5">
          KR Entrance Exam is a gateway to enrolment for the preferred
          Undergraduate and Postgraduate programme at K.R. Mangalam University.
          The entrance exam comprises sections on objective-type questions for
          sentence completion, matching, multiple-choice, and true-false
        </p>

        <div className="text-center">
          <h3 className="text-2xl font-semibold">Programmes For Enrolment</h3>
          <h5 className="text-xl font-semibold mt-2.5 mb-[15px]">
            Undergraduate and Postgraduate Programmes
          </h5>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full kree-accordion"
          defaultValue=""
        >
          {kreeEnrolData?.map((item) => (
            <AccordionItem
              key={item.id}
              value={`kree-${item.id}`}
              className="mb-2.5"
            >
              <AccordionTrigger className="bg-[#051630] py-[15px] px-5 text-white text-base cursor-pointer hover:no-underline">
                {item.heading}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance py-5 md:p-5 kree-toggles">
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: item?.kree_enrol_html }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-right text-sm  mt-2 text-muted-foreground">
          ** Subject to Approval
        </p>
      </div>
    </section>
  );
};

export default KREEEnroll;
