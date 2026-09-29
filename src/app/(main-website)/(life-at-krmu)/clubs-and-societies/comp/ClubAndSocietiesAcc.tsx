import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ClubAccordion } from "@/lib/types/club-and-societies";
import AccordionSlide from "./AccordionSlide";
import { Plus } from "lucide-react";

type Props = {
    accordionsData: ClubAccordion[];
};

const cleanHtml = (html: string): string => {
    const cleaned = html.replace(
        /<p[^>]*>([\s\S]*?)<\/p>/gi,
        (match, inner) => {
            const textOnly = inner.replace(/<[^>]*>/g, "");
            const realText = textOnly.replace(/(&nbsp;|\s)/g, "");
            return realText.length === 0 ? "" : match;
        }
    );
    return cleaned
        .replace(/(<p[^>]*?)margin:[^;"]*;?/gi, "$1")
        .replace(/(<p[^>]*?)margin-bottom:[^;"]*;?/gi, "$1");
};

const ClubAndSocietiesAcc = ({ accordionsData }: Props) => {
    return (
        <section className="py-20 ">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8">
                <Accordion
                    type="single"
                    collapsible
                    className="grid grid-cols-1 gap-6 items-start"
                    defaultValue="item-1"
                >
                    {accordionsData &&
                        accordionsData.map((accordion, i) => {
                            return (
                                <AccordionItem
                                    key={accordion?.id}
                                    value={`${i + 1}`}
                                    className="group relative bg-white  rounded-none   overflow-hidden "
                                >
                                    <AccordionTrigger className="flex items-center justify-start gap-4 px-6 md:px-10 py-3 hover:no-underline [&>svg:last-child]:hidden group bg-white/90 transition-colors duration-300">
                                        <div className="flex items-center gap-4 md:gap-6">
                                            <div className="flex cursor-pointer items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/10 border border-white/15 text-black  shrink-0">
                                                <Plus className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-data-[state=open]:rotate-45" />
                                            </div>
                                            <span className="text-lg  md:text-xl font-bold !text-black text-left transition-colors duration-300">
                                                {accordion?.title}
                                            </span>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="px-4  md:px-12 py-6">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: cleanHtml(
                                                    accordion.content ?? ""
                                                ),
                                            }}
                                            className="clubcontent mb-8 text-slate-700 text-lg leading-relaxed"
                                        />
                                        <div className="mt-4">
                                            <AccordionSlide
                                                slides={accordion?.clubimages}
                                            />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                </Accordion>
            </div>
        </section>
    );
};

export default ClubAndSocietiesAcc;
