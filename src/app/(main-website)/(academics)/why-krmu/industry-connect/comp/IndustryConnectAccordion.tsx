import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Seminar from "./Seminar";
import Workshop from "./Workshop";
import SolsPanel from "../comp2/SolsPanel";
import SMASPanel from "../comp2/SMASPanel";
import SPRSPanel from "../comp2/SPRSPanel";
import SOLAPanel from "../comp2/SOLAPanel";
import SOADPanel from "../comp2/SOADPanel";
import SBASPanel from "../comp2/SBASPanel";
import SOHMCTPanel from "../comp2/SOHMCTPanel";
import SJMCPanel from "../comp2/SJMCPanel";
import SOASPanel from "../comp2/SOASPanel";

const IndustryConnectAccordion = () => {
  return (
    <section className="px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <Accordion type="single" collapsible defaultValue="soet" className="">
          <AccordionItem value="soet">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Engineering & Technology
            </AccordionTrigger>
            <AccordionContent>
              <Seminar />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="somc">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Management & Commerce
            </AccordionTrigger>
            <AccordionContent>
              <Workshop />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sols">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Legal Studies
            </AccordionTrigger>
            <AccordionContent>
              <SolsPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="smas">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Medical and Allied Sciences
            </AccordionTrigger>
            <AccordionContent>
              <SMASPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sprs">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Physiotherapy and Rehabilitation Sciences
            </AccordionTrigger>
            <AccordionContent>
              <SPRSPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sola">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Liberal Arts
            </AccordionTrigger>
            <AccordionContent>
              <SOLAPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="soad">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Architecture & Design
            </AccordionTrigger>
            <AccordionContent>
              <SOADPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sbas">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Basic and Applied Sciences
            </AccordionTrigger>
            <AccordionContent>
              <SBASPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sohmct">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Hotel Management & Catering Technology
            </AccordionTrigger>
            <AccordionContent>
              <SOHMCTPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sjmc">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Emerging Media & Creator Economy
            </AccordionTrigger>
            <AccordionContent>
              <SJMCPanel />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="soas">
            <AccordionTrigger className="bg-[#051630] border border-[#e8e8e8] w-full text-white font-semibold  px-5 text-xl rounded-none hover:no-underline cursor-pointer">
              School of Agriculture Sciences
            </AccordionTrigger>
            <AccordionContent>
              <SOASPanel />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default IndustryConnectAccordion;
