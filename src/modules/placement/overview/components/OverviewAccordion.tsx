import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OverviewAccordion = () => {
  
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full font-poppins"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white">Training</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
            <p>
              The University has signed a Memorandum of Understanding (MoU) with
              renowned companies and institutions in diverse sectors to increase
              industry exposure. This helps the learners apply their practical
              skills to resolve real-life problems in all aspects.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white">Projects</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
            <p>
              As a part of the Project-Based Learning (PBL) pedagogy, students
              complete their research projects and apply their innovative
              solutions to fix industry-specific problems. The practice ensures
              project relevance while enabling students to identify the existing
              and potential requirements of the industry.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white">Corporate Life</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-white/80">
            <p>
              Students undergo in-house training in corporate houses to
              understand the company hierarchy and office discipline. Graduates
              acquire hands-on experience of job responsibilities under the
              supervision of their mentors. The prime objective of the training
              is to make students industry-ready with apt theoretical and
              technical skills.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default OverviewAccordion;
