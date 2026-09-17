"use client";

import React, { useState, useEffect, useRef } from "react";
import { CircleArrowDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { NotesUG, NotesPG, CustomTable } from "../components";
import {
    ugPartARows,
    ugPartAHeaders,
    ugPartBRows,
    ugPartBHeaders,
    eligibilityHeaders,
    cuet1Rows,
    cuet2Rows,
    jeeRows,
    clatRows,
    nataRows,
    ugPartCRemarkRows,
    pgMbaRows,
    pgMbaHeaders,
    pgNonMbaRows,
    pgNonMbaHeaders,
    pgCatMatXatRows,
    pgCatMatXatHeaders,
    pgCuetRows,
    pgCuetHeaders,
    pgAlumniRows,
    pgAlumniHeaders,
} from "@/features/admission/scholarship";

const accordionBgStyle = {
    background:
        "linear-gradient(237.4deg, #061623 69.95%, #59122E 95.28%, #63174C 98.75%)",
};

const CircleArrowIcon = () => (
    <div className="shrink-0 ml-4 flex items-center justify-center">
        <CircleArrowDown className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-data-[state=open]:rotate-180 stroke-[1.5]" />
    </div>
);

const UGPGSection = () => {
    const [activeTab, setActiveTab] = useState<string>("undergraduate");
    const [openUgItems, setOpenUgItems] = useState<string[]>(["item-1"]);
    const [openPgItems, setOpenPgItems] = useState<string[]>(["item-1"]);

    const sectionRef = useRef<HTMLElement | null>(null);
    const ugItemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const pgItemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const manuallyClosedItems = useRef<Set<string>>(new Set());
    const isManualClick = useRef(false);

    const handleUgValueChange = (newValues: string[]) => {
        isManualClick.current = true;
        // User closed an item manually
        openUgItems.forEach((it) => {
            if (!newValues.includes(it)) {
                manuallyClosedItems.current.add(it);
            }
        });
        // User opened an item manually
        newValues.forEach((it) => {
            manuallyClosedItems.current.delete(it);
        });
        setOpenUgItems(newValues);
        setTimeout(() => {
            isManualClick.current = false;
        }, 800);
    };

    const handlePgValueChange = (newValues: string[]) => {
        isManualClick.current = true;
        openPgItems.forEach((it) => {
            if (!newValues.includes(it)) {
                manuallyClosedItems.current.add(it);
            }
        });
        newValues.forEach((it) => {
            manuallyClosedItems.current.delete(it);
        });
        setOpenPgItems(newValues);
        setTimeout(() => {
            isManualClick.current = false;
        }, 800);
    };

    // Pre-opens accordion in advance as user scrolls down so user never sees an abrupt pop
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                ticking = false;
                if (isManualClick.current) return;

                const sectionEl = sectionRef.current;
                if (!sectionEl) return;

                const sectionRect = sectionEl.getBoundingClientRect();
                if (
                    sectionRect.bottom < 100 ||
                    sectionRect.top > window.innerHeight - 50
                ) {
                    return;
                }

                // Pre-opens smoothly when item enters bottom 88% of screen
                const enterLine = window.innerHeight * 0.88;

                const isUg = activeTab === "undergraduate";
                const refs = isUg ? ugItemRefs.current : pgItemRefs.current;
                const items = isUg
                    ? ["item-1", "item-2", "item-3"]
                    : ["item-1", "item-2", "item-3", "item-4"];

                const newOpen: string[] = [];

                for (let i = 0; i < refs.length; i++) {
                    const el = refs[i];
                    if (!el) continue;
                    const rect = el.getBoundingClientRect();
                    const itemKey = items[i];

                    // If user manually closed this item, don't reopen unless it scrolls far away
                    if (manuallyClosedItems.current.has(itemKey)) {
                        if (
                            rect.top > window.innerHeight * 1.2 ||
                            rect.bottom < -200
                        ) {
                            manuallyClosedItems.current.delete(itemKey);
                        }
                        continue;
                    }

                    if (rect.top <= enterLine) {
                        newOpen.push(itemKey);
                    }
                }

                if (
                    newOpen.length === 0 &&
                    !manuallyClosedItems.current.has(items[0])
                ) {
                    newOpen.push(items[0]);
                }

                if (isUg) {
                    setOpenUgItems((prev) => {
                        const isSame =
                            prev.length === newOpen.length &&
                            prev.every((val) => newOpen.includes(val));
                        return isSame ? prev : newOpen;
                    });
                } else {
                    setOpenPgItems((prev) => {
                        const isSame =
                            prev.length === newOpen.length &&
                            prev.every((val) => newOpen.includes(val));
                        return isSame ? prev : newOpen;
                    });
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab]);

    return (
        <section
            ref={sectionRef}
            className="font-poppins bg-white py-6 md:py-12"
        >
            <div className="w-full">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    {/* Tabs Navigation */}
                    <div className="relative w-full max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 flex flex-col items-center">
                        <TabsList className="flex justify-center items-center gap-4 md:gap-10 bg-transparent p-0 border-none shadow-none h-auto mx-auto relative z-10">
                            <TabsTrigger
                                value="undergraduate"
                                className="relative pb-4 pt-2 px-6 sm:px-10 text-[15px] sm:text-xl md:text-2xl font-semibold bg-transparent data-[state=active]:bg-transparent text-black/80 hover:text-black data-[state=active]:text-black data-[state=active]:font-semibold rounded-none border-0 border-transparent shadow-none data-[state=active]:shadow-none data-[state=active]:border-none data-[state=active]:border-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none cursor-pointer transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:max-w-[251px] after:h-[4px] after:opacity-0 data-[state=active]:after:opacity-100 after:transition-opacity after:duration-200 after:[background:#061623] after:z-10"
                            >
                                UG Programmes
                            </TabsTrigger>
                            <TabsTrigger
                                value="postgraduate"
                                className="relative pb-4 pt-2 px-6 sm:px-10 text-[15px] sm:text-xl md:text-2xl font-semibold bg-transparent data-[state=active]:bg-transparent text-black/80 hover:text-black data-[state=active]:text-black data-[state=active]:font-semibold rounded-none border-0 border-transparent shadow-none data-[state=active]:shadow-none data-[state=active]:border-none data-[state=active]:border-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none cursor-pointer transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:max-w-[251px] after:h-[4px] after:opacity-0 data-[state=active]:after:opacity-100 after:transition-opacity after:duration-200 after:[background:#061623] after:z-10"
                            >
                                PG Programmes
                            </TabsTrigger>
                        </TabsList>
                        {/* Horizontal divider line under tabs */}
                        <div
                            className="w-full h-[4px] -mt-[4px] relative z-0 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(90deg, #FFFFFF 0%, #737373 51.44%, #FFFFFF 97.12%)",
                            }}
                        />
                    </div>

                    {/* Undergraduate Tab Content */}
                    <TabsContent value="undergraduate">
                        <h3 className="text-2xl sm:text-4xl font-poppins lg:text-[40px] font-bold text-black text-center mt-12 mb-10">
                            Under Graduate (UG) Programme
                        </h3>

                        <Accordion
                            type="multiple"
                            className="w-full"
                            value={openUgItems}
                            onValueChange={handleUgValueChange}
                        >
                            <div className="max-w-[1530px] mx-auto px-4 md:px-8 xl:px-16 flex flex-col gap-6">
                                {/* Part A */}
                                <div
                                    ref={(el) => {
                                        ugItemRefs.current[0] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-1"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part A
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    On The Basis of Marks Scored
                                                    in Class XII Examination
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="py-4 sm:py-6 md:py-8 bg-white  rounded-b-[8px] shadow-sm ugpgtable">
                                            <CustomTable
                                                headers={ugPartAHeaders}
                                                rows={ugPartARows}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>

                                {/* Part B */}
                                <div
                                    ref={(el) => {
                                        ugItemRefs.current[1] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-2"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part B
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    On The Basis of Other
                                                    Category
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="py-4 sm:py-6 md:py-8 bg-white rounded-b-[8px] shadow-sm ugpgtable">
                                            <CustomTable
                                                headers={ugPartBHeaders}
                                                rows={ugPartBRows}
                                                className="ugpgtable_container"
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>

                                {/* Part C */}
                                <div
                                    ref={(el) => {
                                        ugItemRefs.current[2] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-3"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part C
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    On the Basis of Entrance
                                                    Examination
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="py-4 sm:py-6 md:py-8 bg-white rounded-b-[8px] shadow-sm ugpgtable">
                                            <p className="font-semibold text-center mb-5 text-black">
                                                CUET -1 (On the basis percentage
                                                of best 4 subjects score)
                                            </p>
                                            <CustomTable
                                                headers={eligibilityHeaders}
                                                rows={cuet1Rows}
                                            />

                                            <p className="font-semibold text-center my-5 text-black">
                                                CUET -2 (On the basis average
                                                percentile of best 4 subjects)
                                            </p>
                                            <CustomTable
                                                headers={eligibilityHeaders}
                                                rows={cuet2Rows}
                                            />

                                            <p className="font-semibold text-center my-5 text-black">
                                                JEE (MAIN)
                                            </p>
                                            <CustomTable
                                                headers={eligibilityHeaders}
                                                rows={jeeRows}
                                            />

                                            <p className="font-semibold text-center my-5 text-black">
                                                CLAT Rank
                                            </p>
                                            <CustomTable
                                                headers={eligibilityHeaders}
                                                rows={clatRows}
                                            />

                                            <p className="font-semibold text-center my-5 text-black">
                                                NATA
                                            </p>
                                            <CustomTable
                                                headers={eligibilityHeaders}
                                                rows={nataRows}
                                            />

                                            <CustomTable
                                                theadRows={[
                                                    [
                                                        {
                                                            content: "Remark",
                                                            colSpan: 3,
                                                        },
                                                    ],
                                                ]}
                                                rows={ugPartCRemarkRows}
                                                tableClassName="mt-5"
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            </div>
                            <NotesUG />
                        </Accordion>
                    </TabsContent>

                    {/* Postgraduate Tab Content */}
                    <TabsContent value="postgraduate">
                        <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-black text-center mt-12 mb-10 font-poppins">
                            {" "}
                            Post Graduate (PG) Programmes
                        </h3>
                        <Accordion
                            type="multiple"
                            className="w-full"
                            value={openPgItems}
                            onValueChange={handlePgValueChange}
                        >
                            <div className="max-w-[1530px] mx-auto px-4 md:px-8 xl:px-16 flex flex-col gap-6">
                                {/* PG MBA */}
                                <div
                                    ref={(el) => {
                                        pgItemRefs.current[0] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-1"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part A
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    PG (MBA) on basis of
                                                    Graduations Score
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="py-4 sm:py-6 md:py-8 bg-white rounded-b-[8px] shadow-sm ugpgtable">
                                            <CustomTable
                                                headers={pgMbaHeaders}
                                                rows={pgMbaRows}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>

                                {/* PG Non-MBA */}
                                <div
                                    ref={(el) => {
                                        pgItemRefs.current[1] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-2"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part B
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    PG (Non-MBA) on basis of
                                                    Graduations Score
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="py-4 sm:py-6 md:py-8 bg-white rounded-b-[8px] shadow-sm ugpgtable">
                                            <CustomTable
                                                headers={pgNonMbaHeaders}
                                                rows={pgNonMbaRows}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>

                                {/* PG Entrance */}
                                <div
                                    ref={(el) => {
                                        pgItemRefs.current[2] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-3"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part C
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    On the basis of Entrance
                                                    Examination
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4 sm:pb-6 md:pb-8 bg-white rounded-b-[8px] shadow-sm ugpgtable">
                                            <p className="text-center font-semibold my-5 text-black">
                                                CAT/ MAT/ XAT
                                            </p>
                                            <CustomTable
                                                headers={pgCatMatXatHeaders}
                                                rows={pgCatMatXatRows}
                                            />

                                            <p className="text-center font-semibold my-5 text-black">
                                                CUET
                                            </p>
                                            <CustomTable
                                                headers={pgCuetHeaders}
                                                rows={pgCuetRows}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>

                                {/* Alumni */}
                                <div
                                    ref={(el) => {
                                        pgItemRefs.current[3] = el;
                                    }}
                                >
                                    <AccordionItem
                                        value="item-4"
                                        className="border-none"
                                    >
                                        <AccordionTrigger
                                            className="rounded-[8px] data-[state=open]:rounded-b-none py-4 px-6 md:px-8 text-white hover:no-underline cursor-pointer flex items-center justify-between w-full group [&>svg]:hidden"
                                            style={accordionBgStyle}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <span className="text-xl sm:text-2xl font-bold text-white shrink-0">
                                                    Part D
                                                </span>
                                                <span className="text-sm sm:text-base font-normal text-white/90">
                                                    Alumni Scholarships
                                                </span>
                                            </div>
                                            <CircleArrowIcon />
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4 sm:pb-6 md:pb-8 bg-white rounded-b-[8px] shadow-sm ugpgtable">
                                            <p className="text-center font-semibold my-5 text-black">
                                                UG to PG
                                            </p>
                                            <CustomTable
                                                headers={pgAlumniHeaders}
                                                rows={pgAlumniRows}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            </div>
                            <NotesPG />
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default UGPGSection;
