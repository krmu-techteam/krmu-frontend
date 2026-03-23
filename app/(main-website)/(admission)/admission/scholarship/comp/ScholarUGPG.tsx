import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScholarNotesUG from "./ScholarNotesUG";
import ScholarNotesPG from "./ScholarNotesPG";
const ScholarUGPG = () => {
  return (
    <section className="py-[60px]">
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
            <h3 className="text-2xl sm:text-5xl lg:text-[64px] font-medium text-center mt-[50px] mb-[30px]">
              Under Graduate (UG) Programme
            </h3>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <div className="max-w-[1664px] mx-auto ">
                <AccordionItem value="item-1" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            {" "}
                            <th>Eligibility Criteria</th> <th>Scholarship</th>{" "}
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>90% and above</td> <td>100%</td>
                            <td>
                              To be paid in 3 instalment-1st instalment (25%)
                              will be paid upfront post documents verification
                              and the amount of scholarship will be deducted
                              from the semester fee at the time of registration.
                              2nd instalment (50%) and 3rd instalment (25%) will
                              be paid by cheque in 2nd Semester and 3rd Semester
                              respectively, if the student fulfils all the
                              criteria listed under Note : 7) given below the
                              table.
                            </td>
                          </tr>
                          <tr>
                            <td>85% to less than 90%</td>
                            <td id="undergraduate">35%</td>
                            <td rowSpan={2}>
                              To be paid in 2 equal instalments-1st instalment
                              will be paid upfront post documents verification
                              and the amount of scholarship will be deducted
                              from the semester fee at the time of registration.
                              2nd instalment will be paid by cheque in 2nd
                              Semester, if the student fulfils all the criteria
                              listed under Note: 7) given below the table.
                            </td>
                          </tr>
                          <tr>
                            <td>80% to less than 85%</td> <td>25%</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <div className="overflow-x-auto ugpgtable_container">
                      <table>
                        <thead>
                          <tr>
                            <th>Category</th>
                            <th>Scholarship</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Shero Scholarship (For Female Students) )
                              (Applicable only on the Programme Fee for Semester
                              1 only)
                            </td>
                            <td>10%</td>
                            <td>
                              For Female students securing 70% and above in
                              Class XII (To be paid in 2 equal instalments-1st
                              instalment will be paid upfront post documents
                              verification and the amount of scholarship will be
                              deducted from the semester fee at the time of
                              registration. 2nd instalment will be paid by
                              cheque in 2nd Semester, if the student fulfils all
                              the criteria listed under Note: 8) given below the
                              table.)
                            </td>
                          </tr>
                          <tr>
                            <td>Siblings</td>
                            <td>15%</td>
                            <td>
                              Applicable to all siblings excluding the first
                              child admitted at KRMU
                            </td>
                          </tr>
                          <tr>
                            <td>K.R. Mangalam Group</td>
                            <td>15%</td>
                            <td>
                              For students who have passed the 12th standard
                              from K.R.Mangalam group of schools or KRMU
                              Graduates opting to pursue another Undergraduate
                              (UG) programme
                            </td>
                          </tr>
                          <tr>
                            <td>Defense Scholarship</td>
                            <td>15%</td>
                            <td>For children of Defence Personnel</td>
                          </tr>
                          <tr>
                            <td>Staff Discount</td>
                            <td>15%</td>
                            <td>
                              Children of KRMU staff seeking admission in all UG
                              courses
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Sports Quota</b> – Represented India in Olympic
                              Games, Asian Games, World University, World Games,
                              World Championships, World Cups, Commonwealth
                              Games, Asian Meets, Test Matches in Cricket.
                              Commonwealth Championships, Asian Championship.
                              Asia Cup, SAF Games, Davis Games, Wimbledon
                              Championship, US French, Australian Open Tennis
                              Championship, Thomas Cup, Uber Cup, ALL England
                              Badminton Tournament and International Athletic
                              Permit Meet and any other International
                              Tournament/ Championship, Games and Sports
                              approved by IOA (Indian Olympic Association) and
                              Govt. of India recognized Sports Federations.
                            </td>
                            <td>100%</td>
                            <td>Position and Participation</td>
                          </tr>
                          <tr>
                            <td rowSpan={4}>
                              <b>Sports Quota</b> – Senior National / National
                              Games / Federation Cup
                              <br />/ All India Inter University
                            </td>
                            <td>75%</td>
                            <td>1st position</td>
                          </tr>
                          <tr>
                            <td>50%</td>
                            <td>2nd position</td>
                          </tr>
                          <tr>
                            <td>25%</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>10%</td>
                            <td>Participation</td>
                          </tr>
                          <tr>
                            <td rowSpan={4}>
                              <b>Sports Quota </b>– Junior National / Zone wise
                              university / Ranji
                              <br />
                              Trophy
                            </td>
                            <td>75%</td>
                            <td>1st position</td>
                          </tr>
                          <tr>
                            <td>50%</td>
                            <td>2nd position</td>
                          </tr>
                          <tr>
                            <td>25%</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>10%</td>
                            <td>Participation</td>
                          </tr>
                          <tr>
                            <td rowSpan={4}>
                              <b>Sports Quota</b> – National Women Championship
                              / Rural Championship /<br />
                              School National (SGFI)/ level
                            </td>
                            <td>75%</td>
                            <td>1st position</td>
                          </tr>
                          <tr>
                            <td>50%</td>
                            <td>2nd position</td>
                          </tr>
                          <tr>
                            <td>25%</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>10%</td>
                            <td>Participation</td>
                          </tr>
                          <tr>
                            <td rowSpan={4}>
                              <b>Sports Quota</b> – K.V.S National / C.B.S.E
                              National / Navodaya
                              <br />
                              National / Sanik School National / All India
                              Public School National
                            </td>
                            <td>25%</td>
                            <td>1st position</td>
                          </tr>
                          <tr>
                            <td>15%</td>
                            <td>2nd position</td>
                          </tr>
                          <tr>
                            <td>15%</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>10%</td>
                            <td>Participation</td>
                          </tr>
                          <tr>
                            <td rowSpan={4}>
                              <b>Sports Quota</b> – State Championship
                            </td>
                            <td>25%</td>
                            <td>1st position</td>
                          </tr>
                          <tr>
                            <td>15%</td>
                            <td>2nd position</td>
                          </tr>
                          <tr>
                            <td>15%</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>10%</td>
                            <td>Participation</td>
                          </tr>
                          <tr>
                            <td rowSpan={4}>
                              <b>Sports Quota</b> – C.B.S.E Cluster / K.V.S. /
                              Navodaya / Sanik /<br />
                              Zonal / District / State Women Festival
                            </td>
                            <td>25%</td>
                            <td>1st position</td>
                          </tr>
                          <tr>
                            <td>15%</td>
                            <td>2nd position</td>
                          </tr>
                          <tr>
                            <td>15%</td>
                            <td>3rd position</td>
                          </tr>
                          <tr>
                            <td>10%</td>
                            <td>Participation</td>
                          </tr>
                          <tr>
                            <th colSpan={3}>Remark</th>
                          </tr>
                          <tr>
                            <td colSpan={3}>
                              <ol>
                                <li>
                                  For 100% Scholarship – To be paid in 3
                                  instalments – 1st instalment (25%) will be
                                  paid upfront post document verification, and
                                  the amount of scholarship will be deducted
                                  from the semester fee at the time of
                                  registration. 2nd instalment (50%) and 3rd
                                  instalment (25%) will be paid by cheque in the
                                  2nd Semester and 3rd Semester, respectively,
                                  if the student fulfills all the criteria
                                  listed under Note: 7) given below the table.
                                </li>
                                <li>
                                  For 75% / 50% / 25% / 10% Scholarship – To be
                                  paid in 2 equal instalments. The 1st
                                  instalment will be paid upfront post document
                                  verification, and the amount of scholarship
                                  will be deducted from the semester fee at the
                                  time of registration. The 2nd instalment will
                                  be paid by cheque in the 2nd Semester if the
                                  student fulfills all the criteria listed under
                                  Note: 7) given below the table.
                                </li>
                              </ol>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <p className="font-semibold text-center mb-5">
                      CUET -1 (On the basis of best 4 subjects score)
                    </p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            {" "}
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>90% &amp; above</td> <td>100%</td>
                          </tr>
                          <tr>
                            <td>75% to less than 90%</td> <td>50%</td>
                          </tr>
                          <tr>
                            <td>60% to less than 75%</td> <td>35%</td>
                          </tr>
                          <tr>
                            <td>50% to less than 60%</td> <td>25%</td>
                          </tr>
                          <tr>
                            <td>45% to less than 50%</td> <td>10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="font-semibold text-center my-5">
                      CUET -2, On the basis of best 3 subjects score with legal
                      studies as a mandatory subject. This scholarship is
                      applicable for School of Legal Studies only.
                    </p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>90% & above</td> <td>100%</td>
                          </tr>
                          <tr>
                            <td>75% to less than 90%</td>
                            <td>35%</td>
                          </tr>
                          <tr>
                            <td>60% to less than 75%</td>
                            <td>25%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="font-semibold text-center my-5">JEE (MAIN)</p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>95.01 percentile and above</td> <td>100%</td>
                          </tr>
                          <tr>
                            <td>90.01 percentile to 95th percentile</td>{" "}
                            <td>35%</td>
                          </tr>
                          <tr>
                            <td>85.01 percentile to 90th percentile</td>{" "}
                            <td>25%</td>
                          </tr>
                          <tr>
                            <td>75.01 percentile to 85th percentile</td>{" "}
                            <td>10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="font-semibold text-center my-5">CLAT Rank</p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1-2500</td> <td>100%</td>
                          </tr>
                          <tr>
                            <td>2501-5000</td> <td>35%</td>
                          </tr>
                          <tr>
                            <td>5001-10000</td> <td>25%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="font-semibold text-center my-5">NATA</p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>130.01 & above</td> <td>100%</td>
                          </tr>
                          <tr>
                            <td>110.01 to 130</td> <td>35%</td>
                          </tr>
                          <tr>
                            <td>90 to 110</td> <td>25%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="mt-5">
                        <thead>
                          <tr>
                            <th colSpan={3}>Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={3}>
                              1. For 100% Scholarship -To be paid in 3
                              instalment-1st instalment (25%) will be paid
                              upfront post documents verification and the amount
                              of scholarship will be deducted from the semester
                              fee at the time of registration. 2nd instalment
                              (50%) and 3rd instalment (25%) will be paid by
                              cheque in 2nd Semester and 3rd Semester
                              respectively, if the student fulfills all the
                              criteria listed under Note : 7) given below the
                              table.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2. For 75%/ 50%/ 25%/ 10% Scholarship - To be paid
                              in 2 equal instalments-1st instalment will be paid
                              upfront post documents verification and the amount
                              of scholarship will be deducted from the semester
                              fee at the time of registration. 2nd instalment
                              will be paid by cheque in 2nd Semester, if the
                              student fulfils all the criteria listed under
                              Note: 7) given below the table.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <ScholarNotesUG />
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
              <div className="max-w-[1664px] mx-auto ">
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>95% and above</td> <td>100%</td>
                            <td>
                              <div>
                                To be paid in 3 instalment-1st instalment (25%)
                                will be paid upfront post documents verification
                                and the amount of scholarship will be deducted
                                from the semester fee at the time of
                                registration. 2nd instalment (50%) and 3rd
                                instalment (25%) will be paid by cheque in 2nd
                                Semester and 3rd Semester respectively, if the
                                student fulfills all the criteria listed under
                                Note : 2) given below the table.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>85% to less than 95%</td>
                            <td id="undergraduate">35%</td>
                            <td rowSpan={2}>
                              <div>
                                To be paid in 2 equal instalments-1st instalment
                                will be paid upfront post documents verification
                                and the amount of scholarship will be deducted
                                from the semester fee at the time of
                                registration. 2nd instalment will be paid by
                                cheque in 2nd Semester, if the student fulfils
                                all the criteria listed under Note: 2) given
                                below the table.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>75% to less than 85%</td> <td>25%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>75% and above marks in Graduation</td>
                            <td id="undergraduate">25%</td>
                            <td rowSpan={2}>
                              <div>
                                To be paid in 2 equal instalments-1st instalment
                                will be paid upfront post documents verification
                                and the amount of scholarship will be deducted
                                from the semester fee at the time of
                                registration. 2nd instalment will be paid by
                                cheque in 2nd Semester, if the student fulfils
                                all the criteria listed under Note: 2) given
                                below the table.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              65% to less than 75% marks in
                              <br /> Graduation
                            </td>
                            <td>10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <p className="text-center font-semibold my-5">
                      CAT/ MAT/ XAT
                    </p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th> <th>Scholarship</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>95.01 percentile and above</td> <td>100%</td>
                            <td>
                              To be paid in 3 instalment-1st instalment (25%)
                              will be paid upfront post documents verification
                              and the amount of scholarship will be deducted
                              from the semester fee at the time of registration.
                              2nd instalment (50%) and 3rd instalment (25%) will
                              be paid by cheque in 2nd Semester and 3rd Semester
                              respectively, if the student fulfills all the
                              criteria listed under Note : 2) given below the
                              table.
                            </td>
                          </tr>
                          <tr>
                            <td>85.01 percentile to 95 percentile</td>{" "}
                            <td>35%</td>
                            <td rowSpan={2}>
                              To be paid in 2 equal instalments-1st instalment
                              will be paid upfront post documents verification
                              and the amount of scholarship will be deducted
                              from the semester fee at the time of registration.
                              2nd instalment will be paid by cheque in 2nd
                              Semester, if the student fulfils all the criteria
                              listed under Note: 2) given below the table.
                            </td>
                          </tr>
                          <tr>
                            <td>75 percentile to 85 percentile</td> <td>25%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-center font-semibold my-5">CUET</p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th>
                            <th>Scholarship</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>75% and above marks in Graduation</td>
                            <td>25%</td>
                            <td rowSpan={2}>
                              1. Applicable for students who attempted CUET
                              <br />
                              2. To be paid in 2 equal instalments-1st
                              instalment will be paid upfront post documents
                              verification and the amount of scholarship will be
                              deducted from the semester fee at the time of
                              registration. 2nd instalment will be paid by
                              cheque in 2nd Semester, if the student fulfils all
                              the criteria listed under Note: 2) given below the
                              table.
                            </td>
                          </tr>
                          <tr>
                            <td>50% to less than 75% marks in Graduation</td>
                            <td>10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="mb-[30px]">
                  <AccordionTrigger
                    className="rounded-[12px] data-[state=open]:rounded-b-none py-2.5 px-[30px] text-base md:text-2xl md:leading-[1.83] text-white hover:no-underline cursor-pointer ugpgacctab"
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
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    <p className="text-center font-semibold my-5">UG to PG</p>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Eligibility Criteria</th>
                            <th>Scholarship</th>
                            <th>Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              KRMU Undergraduate Programme student seeking
                              admission in Post Graduate Programme
                            </td>
                            <td>10%</td>
                            <td>
                              Alumni Scholarship to be paid in two equal
                              instalments:
                              <br />
                              To be paid in 2 equal instalments-1st instalment
                              will be paid upfront post documents verification
                              and the amount of scholarship will be deducted
                              from the semester fee at the time of registration.
                              2nd instalment will be paid by cheque in 2nd
                              Semester, if the student fulfils all the criteria
                              listed under Note: 2) given below the table.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <ScholarNotesPG />
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScholarUGPG;
