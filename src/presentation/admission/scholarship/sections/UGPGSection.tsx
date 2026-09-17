import React from "react";
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
    return (
        <section className="font-poppins bg-white py-12">
            <div className="w-full">
                <Tabs defaultValue="undergraduate">
                    {/* Tabs Navigation */}
                    <div className="relative w-full max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 flex flex-col items-center">
                        <TabsList className="flex justify-center items-center gap-4 sm:gap-10 bg-transparent p-0 border-none shadow-none h-auto mx-auto relative z-10">
                            <TabsTrigger
                                value="undergraduate"
                                className="relative pb-4 pt-2 px-6 sm:px-10 text-base sm:text-xl md:text-2xl font-semibold bg-transparent data-[state=active]:bg-transparent text-black/80 hover:text-black data-[state=active]:text-black data-[state=active]:font-semibold rounded-none border-0 border-transparent shadow-none data-[state=active]:shadow-none data-[state=active]:border-none data-[state=active]:border-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none cursor-pointer transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:max-w-[251px] after:h-[4px] after:opacity-0 data-[state=active]:after:opacity-100 after:transition-opacity after:duration-200 after:[background:#061623] after:z-10"
                            >
                                UG Programmes
                            </TabsTrigger>
                            <TabsTrigger
                                value="postgraduate"
                                className="relative pb-4 pt-2 px-6 sm:px-10 text-base sm:text-xl md:text-2xl font-semibold bg-transparent data-[state=active]:bg-transparent text-black/80 hover:text-black data-[state=active]:text-black data-[state=active]:font-semibold rounded-none border-0 border-transparent shadow-none data-[state=active]:shadow-none data-[state=active]:border-none data-[state=active]:border-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none cursor-pointer transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:max-w-[251px] after:h-[4px] after:opacity-0 data-[state=active]:after:opacity-100 after:transition-opacity after:duration-200 after:[background:#061623] after:z-10"
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
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <div className="max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 flex flex-col gap-6">
                                {/* Part A */}
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
                                                On The Basis of Marks Scored in
                                                Class XII Examination
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

                                {/* Part B */}
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
                                                On The Basis of Other Category
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

                                {/* Part C */}
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
                                            CUET -1 (On the basis percentage of
                                            best 4 subjects score)
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
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <div className="max-w-[1530px] mx-auto px-6 md:px-8 xl:px-16 flex flex-col gap-6">
                                {/* PG MBA */}
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
                                                PG (MBA) on basis of Graduations
                                                Score
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

                                {/* PG Non-MBA */}
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

                                {/* PG Entrance */}
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

                                {/* Alumni */}
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
                            <NotesPG />
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default UGPGSection;
