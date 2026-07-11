"use client";

import { useState } from "react";
import Image from "next/image";

type TabKey = "overview" | "eligibility" | "faq";

const programmes = [
  {
    id: 1,
    title: "Ph.D. - Computer Science & Engineering",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 2,
    title: "Ph.D. - Physics",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 3,
    title: "Ph.D. - Chemistry",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 4,
    title: "Ph.D. - Mathematics",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },

  {
    id: 5,
    title: "Ph.D. - Journalism & Mass Communications",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 6,
    title: "Ph.D. - Pharmaceutical Sciences",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 7,
    title: "Ph.D. - Economics ",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },

  {
    id: 8,
    title: "Ph.D. - Forensic Science",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },

  {
    id: 9,
    title: "Ph.D. - English",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 10,
    title: "Ph.D. - Management",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 11,
    title: "Ph.D. - Commerce",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 12,
    title: "Ph.D. - Law",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 13,
    title: "Ph.D. - Education",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
  {
    id: 14,
    title: "Ph.D. - Psychology",
    overview: `
      The Ph.D. programme is based on the research carried out by the scholars under the guidance of Supervisor/Co-Supervisor(s) and the programme duration is dependent upon the completion of the chosen research by the scholars. The research work is characterised either by discovery of new facts or proposition of a new theory/theories or by fresh interpretation of known facts. It should bear evidence of the scholars’ capacity for analysis and judgment as well as his/her ability to carry out independent investigation, design or development. All admitted scholars are provisionally registered into the programme and are required to do a mandatory minimum course work of 14 credits. <br /><br />Upon successful completion of the course work, the student shall identify supervisor/co-supervisor(s) and in consultation prepare a detailed Research Proposal/Synopsis of the research she/he wants to carry out. After the approval of the Synopsis and supervisor/co-supervisor(s), students are formally registered into Ph.D. programmes. This must normally be done within one year of admission. After formal registration, scholars proceed with research and are required to submit his/her progress report at the end of every semester and make a presentation to the School Research Committee (SRC). The minimum period after which a scholar can submit the dissertation is three years from the date of admission and the maximum period allowed is 6 years. Women scholars and persons with more than 40% disability may be given a relaxation of 2 years as per UGC norms. On completion of the research work, the scholar has to submit a summary (synopsis) of the research work and make a presentation to SRC. Before submitting the dissertation, the scholar should publish at least one paper from the research work in refereed journals and two presentations in the conference. The dissertation must be a piece of original work free from any plagiarism. The final dissertation is evaluated by examiners and scholars have to defend it.
    `,
    eligibility: `
      <span class="italic">* Admission to Ph.D. programmes is through KRMU-PET or NET Score followed by interview.<br />
* Written Exam is Exempted for UGC-JRF/CSIR-UGC-JRF/M.Phil. qualified candidates.</span><br /><br />
(a) Candidates who have completed a 1-year/2-semester master’s degree programme following a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester master’s degree programme following a 3-year bachelor’s degree programme, or equivalent qualifications as recognised by the relevant statutory regulatory body. The candidate must have achieved at least 55% aggregate marks or an equivalent grade on a point scale where applicable, or hold an equivalent qualification from a foreign institution accredited by an authorized assessment and accreditation agency recognized by the relevant authority in its home country. A relaxation of 5% marks or the equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other categories, as per the Commission decisions from time to time.
<br /><br />
(b) Candidates who have completed a 4-year/8-semester bachelor’s degree programme with at least 75% aggregate marks or an equivalent grade on a point scale, where applicable. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as determined by the commission decisions from time to time.
<br /><br />
(c) Candidates who have completed an M.Phil. programme with at least 55% aggregate marks or an equivalent grade on a point scale, or an equivalent qualification from a foreign institution accredited by a recognised assessment and accreditation agency in its home country. A 5% relaxation in marks or its equivalent grade may be granted to candidates belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled, Economically Weaker Section (EWS), and other specified categories, as per the Commission’s decisions from time to time.

    `,
    faq: [
      "<b>Is a master’s degree mandatory for Ph.D. admission?</b> <br /> As per the National Education Policy (NEP) 2020, a master’s degree is not mandatory for Ph.D. admission in India. The policy allows candidates to pursue a Ph.D. after a four-year undergraduate degree with a strong research component. However, universities may set their own eligibility criteria, and many still require a master's degree (such as an M.A., M.Sc., or M.Tech.) for Ph.D. admissions.",
      "<b>Are part-time or external Ph.D. options available?</b> <br /> KRMU may offer flexible enrollment modes; consult the admissions team for more details.",
      "<b>How long does it typically take to complete a Ph.D.?</b> <br />Usually 3–5 years, depending on the field and research progress.",
      "<b>Do I need to publish papers during the Ph.D.?</b> <br />Yes, doctoral scholars are encouraged to publish their research paper in reputed journals to enhance their academic profile.",
      "<b>Is hostel accommodation available for Ph.D. scholars?</b> <br /> Yes, KRMU offers secure campus housing with modern amenities, subject to availability.",
      `<b>What are the fellowships given to Ph.D. scholars at KRMU?</b> <br /> KRMU offers Research Fellowship (URF) for meritorious candidates for 3 years: 
       <ul>
        <li> - NET-JRF Qualified: Rs. 35,000/- Per month</li>
        <li> - NET Qualified: Rs. 30,000/- Per month</li>
        <li> - NON-NET: Rs. 25,000/- Per month</li>
       </ul>
      `,
      "<b>Can working professionals apply for the Ph.D. programme?</b> <br />Yes, working professionals can apply for the part-time Ph.D. programme, provided they meet the eligibility criteria and can fulfil the research and coursework requirements and departmental availability.",
    ],
  },
];

const tabs = [
  { key: "overview", label: "Programme Structure" },
  { key: "eligibility", label: "Eligibility Criteria" },
  { key: "faq", label: "Frequently Asked Questions (FAQs)" },
] as const;

const PhdProgrammeOfferedAccordionTab = () => {
  const [selectedProgramme, setSelectedProgramme] = useState(programmes[0]);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <section className="bg-[#F8F9FA] py-10">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* ---------------- SELECT PROGRAMME ---------------- */}
        <div className="bg-white p-8 rounded-[10px] mb-10">
          <h4 className="text-3xl font-semibold mb-6">
            Select Your Ph.D. Programme
          </h4>

          <div className="relative w-full md:w-3/5">
            <select
              className="w-full bg-[#F1F1F1] py-3 px-5 rounded-md appearance-none"
              value={selectedProgramme.id}
              onChange={(e) => {
                const p = programmes.find(
                  (item) => item.id === Number(e.target.value)
                );
                if (p) {
                  setSelectedProgramme(p);
                  setActiveTab("overview");
                }
              }}
            >
              {programmes.map((programme) => (
                <option key={programme.id} value={programme.id}>
                  {programme.title}
                </option>
              ))}
            </select>

            <Image
              src="/landingpage/phd/chevron.svg"
              width={14}
              height={16}
              alt=""
              className="absolute right-5 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* ---------------- TABS ---------------- */}
        <div>
          <ul className="flex flex-wrap border-b border-[#E2E8F0]">
            {tabs.map((tab) => (
              <li
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 cursor-pointer text-sm md:text-base ${
                  activeTab === tab.key
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-600"
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* ---------------- TAB CONTENT ---------------- */}
          <div
            className="mt-6 bg-white rounded-[4px] p-6"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {activeTab === "overview" && (
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: selectedProgramme.overview,
                }}
              />
            )}

            {activeTab === "eligibility" && (
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: selectedProgramme.eligibility,
                }}
              />
            )}

            {activeTab === "faq" && (
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                {selectedProgramme.faq.map((item, index) => (
                  <li key={index}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item,
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhdProgrammeOfferedAccordionTab;
