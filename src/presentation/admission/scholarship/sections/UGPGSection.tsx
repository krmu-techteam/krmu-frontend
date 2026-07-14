import React from "react";
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

const UGPGSection = () => {
  return (
    <section className="font-poppins">
      <div className="w-full">
        <Tabs defaultValue="undergraduate">
          <TabsList
            className="mx-auto bg-[#ebecec] rounded-full text-white h-[75px]"
            style={{
              boxShadow: `0px 1.30061px 2.21381px 0px rgba(0,0,0,.01),0px 3.12555px 5.32008px 0px rgba(0,0,0,.02),0px 5.88513px 10.01724px 0px rgba(0,0,0,.03),0px 10.49806px 17.86905px 0px rgba(0,0,0,.03),0px 19.63548px 33.42209px 0px rgba(0,0,0,.04),0px 47px 80px 0px rgba(0,0,0,.05)`,
            }}
          >
            <TabsTrigger
              value="undergraduate"
              className="text-base sm:text-xl md:text-2xl md:leading-[3] p-4  lg:px-[100px] hover:bg-[#cb000d] hover:text-white data-[state=active]:bg-[#cb000d] data-[state=active]:text-white rounded-full cursor-pointer font-semibold"
            >
              UG <br className="md:hidden" /> Programmes
            </TabsTrigger>
            <TabsTrigger
              value="postgraduate"
              className="text-base sm:text-xl md:text-2xl md:leading-[3] p-4  lg:px-[100px] hover:bg-[#cb000d] hover:text-white data-[state=active]:bg-[#cb000d] data-[state=active]:text-white rounded-full cursor-pointer font-semibold"
            >
              PG <br className="md:hidden" /> Programmes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="undergraduate">
            <h3 className="text-2xl font-serif sm:text-5xl lg:text-[42px] font-bold text-white text-center mt-[50px] mb-[30px]">
              Under Graduate (UG) Programme
            </h3>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <div className="max-w-[1530px] mx-auto px-6 md:px-7 xl:px-16  ">
                <AccordionItem value="item-1" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[4px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    Part A - On The Basis of Marks Scored in Class XII
                    Examination
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <CustomTable headers={ugPartAHeaders} rows={ugPartARows} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[4px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    Part B - On The Basis of Other Category
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <CustomTable
                      headers={ugPartBHeaders}
                      rows={ugPartBRows}
                      className="ugpgtable_container"
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger
                    className="rounded-[4px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    Part C - On the Basis of Entrance Examination
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p className="font-semibold text-center mb-5 text-white">
                      CUET -1 (On the basis percentage of best 4 subjects score)
                    </p>
                    <CustomTable headers={eligibilityHeaders} rows={cuet1Rows} />

                    <p className="font-semibold text-center my-5 text-white">
                      CUET -2 (On the basis average percentile of best 4
                      subjects)
                    </p>
                    <CustomTable headers={eligibilityHeaders} rows={cuet2Rows} />

                    <p className="font-semibold text-center my-5 text-white">JEE (MAIN)</p>
                    <CustomTable headers={eligibilityHeaders} rows={jeeRows} />

                    <p className="font-semibold text-center my-5 text-white">CLAT Rank</p>
                    <CustomTable headers={eligibilityHeaders} rows={clatRows} />

                    <p className="font-semibold text-center my-5 text-white">NATA</p>
                    <CustomTable headers={eligibilityHeaders} rows={nataRows} />

                    <CustomTable
                      theadRows={[[{ content: "Remark", colSpan: 3 }]]}
                      rows={ugPartCRemarkRows}
                      tableClassName="mt-5"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
              <NotesUG />
            </Accordion>
          </TabsContent>
          <TabsContent value="postgraduate">
            <h3 className="text-2xl sm:text-5xl lg:text-[64px] font-medium text-center mt-[50px] mb-[30px]">
              Post Graduate (PG) Programmes
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <div className="max-w-[1530px] mx-auto px-6 md:px-7 xl:px-16">
                <AccordionItem value="item-1" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    PG (MBA) on basis of Graduations Score
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <CustomTable headers={pgMbaHeaders} rows={pgMbaRows} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[4px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    PG (Non-MBA) on basis of Graduations Score
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <CustomTable headers={pgNonMbaHeaders} rows={pgNonMbaRows} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[4px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    On the basis of Entrance Examination
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p className="text-center font-semibold my-5">
                      CAT/ MAT/ XAT
                    </p>
                    <CustomTable
                      headers={pgCatMatXatHeaders}
                      rows={pgCatMatXatRows}
                    />

                    <p className="text-center font-semibold my-5">CUET</p>
                    <CustomTable headers={pgCuetHeaders} rows={pgCuetRows} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[4px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
                    style={{
                      background: `linear-gradient(18deg,#0060aa 14.28%,#051630 118.99%)`,
                    }}
                  >
                    Alumni Scholarships
                  </AccordionTrigger>
                  <AccordionContent
                    className="pt-[30px] px-5 pb-[15px] ugpgtable"
                    style={{
                      background: `linear-gradient(180deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.05) 100%)`,
                      boxShadow: `0px 0px 20px 0px rgba(0,0,0,.25)`,
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p className="text-center font-semibold my-5">UG to PG</p>
                    <CustomTable headers={pgAlumniHeaders} rows={pgAlumniRows} />
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
