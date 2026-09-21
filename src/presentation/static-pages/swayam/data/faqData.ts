export interface SwayamFaqItem {
    id: number;
    questionNumber: number;
    title: string;
    heiQuery: string;
    ugcReply: string;
}

export const swayamImportantPoints: string[] = [
    "40% is the minimum passing requirement for a SWAYAM course: 12/30 in assessments/quizzes and 28/70 in the end-term examination.",
    "At least 75% of graded assignments must be submitted to be eligible for a University-conducted SWAYAM end-term examination.",
    "If the SWAYAM course has fewer credits than the University's corresponding course, the University may add an additional component to meet the required credits.",
    "The SWAYAM course credits remain as prescribed on the SWAYAM platform; if the University requires additional credits, additional coursework may be assigned.",
];

export const swayamFaqList: SwayamFaqItem[] = [
    {
        id: 1,
        questionNumber: 1,
        title: "Difference in Credits Between SWAYAM and University Course",
        heiQuery:
            "What should be done if the number of credits offered by a SWAYAM course is lower than the credits prescribed by a university for the corresponding course?",
        ugcReply:
            "If the number of credits offered by the SWAYAM course is lower than those prescribed by the university, the university may assign an additional component, such as assignments, projects, or other academic activities, to fulfil the required credits.",
    },
    {
        id: 2,
        questionNumber: 2,
        title: "Higher University Passing Criteria",
        heiQuery:
            "Which passing criteria will be applicable if a university prescribes higher minimum passing marks than those specified under SWAYAM for a course?",
        ugcReply:
            "In cases where the university's minimum passing marks are higher than the passing criteria prescribed under SWAYAM, the university's passing criteria shall be applicable and binding on the students.",
    },
    {
        id: 3,
        questionNumber: 3,
        title: "Failure in Internal Assessment and No Course Re-run",
        heiQuery:
            "In cases where a student scores less than the minimum required 12 out of 30 marks in internal assessments of a SWAYAM course, and the corresponding course is not scheduled for re-run in the next semester, what measures should the university undertake?",
        ugcReply:
            "If a student scores less than the minimum required 12 out of 30 marks in the internal assessment of a SWAYAM course and the course is not being re-run in the subsequent semester, the university may conduct a supplementary examination for the entire course carrying 100 marks in the next semester.",
    },
    {
        id: 4,
        questionNumber: 4,
        title: "University Pass Criteria vs SWAYAM Pass Criteria",
        heiQuery:
            "If a SWAYAM certificate is issued and the university programme requires more than 50% marks overall (combining Internal Assessment and External Examination), whereas SWAYAM requires students to secure a minimum of 40% separately in both components, should the university follow its own criteria or SWAYAM's criteria?",
        ugcReply:
            "Where the university's minimum passing criteria are higher than the SWAYAM internal and external passing criteria, the university's prescribed passing criteria shall be applicable and binding.",
    },
    {
        id: 5,
        questionNumber: 5,
        title: "Failure in University-Conducted End-Term Examination",
        heiQuery:
            "If a student fails to secure the minimum 28 out of 70 marks (40%) in the university-conducted end-term examination for a SWAYAM course, should the student be declared failed, or can the university apply its own examination norms?",
        ugcReply:
            "Yes, the student shall be declared failed if he or she does not secure the minimum 28 out of 70 marks (40%) in the end-term examination. As per the UGC Framework for Universities to Conduct Examinations for SWAYAM Courses, a student must obtain a minimum of 12 out of 30 marks in Assessments/Quizzes and 28 out of 70 marks in the End-Term Examination to pass the SWAYAM course.",
    },
    {
        id: 6,
        questionNumber: 6,
        title: "Relaxation in 75% Assignment Submission Requirement",
        heiQuery:
            "Is there any provision for relaxation in the requirement of submitting at least 75% of graded assignments in cases of medical emergencies, especially when the course is not scheduled for re-run?",
        ugcReply:
            "No. As per the UGC Framework for Universities to Conduct Examinations for SWAYAM Courses, only those students who have submitted at least 75% of the graded assignments are eligible to appear for the university-conducted end-term examination. For courses that are not scheduled for re-run, universities may refer to the provisions mentioned in Question 3.",
    },
    {
        id: 7,
        questionNumber: 7,
        title: "Different Examination Modes",
        heiQuery:
            "Is it possible that half of the class/or a few students, opt for the SWAYAM end-term examination through NTA/NPTEL, and the other half be examined by the university separately?",
        ugcReply: "Yes.",
    },
    {
        id: 8,
        questionNumber: 8,
        title: "SWAYAM Certificate",
        heiQuery:
            "When students complete SWAYAM courses and the University conducts examinations at a university, uploading the marks to the university dashboard, will students receive an additional certificate from SWAYAM?",
        ugcReply:
            "No. If the SWAYAM Courses for which the end-term examinations are conducted by Universities, students will not receive a SWAYAM certificate.",
    },
    {
        id: 9,
        questionNumber: 9,
        title: "Credit Transfer and Academic Transcript/Marksheet",
        heiQuery:
            "If the University conducts the end-term examination for a SWAYAM course in accordance with the UGC Framework, will the credits earned by students be eligible for transfer and reflected in their Academic Transcript/Marksheet?",
        ugcReply:
            "Yes, please refer UGC Framework for Universities to conduct Examinations for SWAYAM Courses (Chapter 2, Step 5, Point A) which states that:\n\n• The Nodal Officer of the University shall upload on the SWAYAM platform, the marks out of 70 obtained by the students in the end-term examination, conducted by the University.\n• The Nodal Officer of the University shall submit the total marks (out of 100) obtained by students from the SWAYAM platform to Controller of Examination (CoE) and the same shall be reflected in the students' University Mark-sheet / Transcript.\n• University to ensure that marks of all students who have appeared in the SWAYAM Examination are mapped and visible to the students in their Academic Bank of Credits (ABC) account.",
    },
    {
        id: 10,
        questionNumber: 10,
        title: "Selection of SWAYAM Courses",
        heiQuery:
            "Could you please clarify whether HEI should provide a pre-defined list of courses to students or allow them to choose from all available SWAYAM courses? Additionally, what role does our Academic Council play in this process?",
        ugcReply:
            "The SWAYAM course list is to be finalized by HEIs before the commencement of each academic session (January/July) based on the set of notified courses available on the SWAYAM platform.\n\nFor role of the Statutory bodies such as Academic Council, BoS, please refer to UGC Framework for Universities to conduct Examinations for SWAYAM Courses (Chapter 2, Steps 1 & 2, Page 5).",
    },
    {
        id: 11,
        questionNumber: 11,
        title: "Students Not Opting for SWAYAM",
        heiQuery:
            "If there are students who do not wish to opt for the SWAYAM course, are we permitted to continue offering offline classes for them as we have done previously?",
        ugcReply: "Yes.",
    },
    {
        id: 12,
        questionNumber: 12,
        title: "Difference in SWAYAM and University Course Credits",
        heiQuery:
            "In case a SWAYAM course carries 4 credits and our university course carries 2 or 3 credits (or vice versa), are we allowed to adopt such a course and align it with our curriculum by assigning our credit value to it?",
        ugcReply:
            "Please refer to UGC Framework for Universities to conduct Examinations for SWAYAM Courses (Chapter 1, Page 3, point 2), which clearly states that:\n\nThe number of credits of the SWAYAM courses should be as prescribed on the SWAYAM Platform.\n\nIt is also important to note:\n• If a SWAYAM course is of 5 credits, and your university typically offers 3 or 4 credits for a similar course, the credits shall remain 5.\n• Conversely, if the SWAYAM course is of 3 credits, but your university's curriculum mandates 4 credits for that course, the remaining 1 credit may be fulfilled by assigning appropriate additional coursework to the student, such as assignments, project reports, paper publication, etc., as decided by the university's SWAYAM Advisory Committee/Academic Council/BoS.",
    },
    {
        id: 13,
        questionNumber: 13,
        title: "Internal Assignment Marks Not Uploaded",
        heiQuery:
            "In case of internal assignment marks for several SWAYAM courses have still not been uploaded. In such cases, where should the University seek official assistance or resolution?",
        ugcReply:
            "Universities UNO should contact the NPTEL SWAYAM Technical Support Team.\n\nContact details are as follows:\nDr. M Jayakrishnan, Senior Scientist\nIIT Madras\nEmail: jkm@nptel.iitm.ac.in",
    },
    {
        id: 14,
        questionNumber: 14,
        title: "Technical Glitches in Assignment Submission",
        heiQuery:
            "In certain SWAYAM courses requiring assignment submission via PDF, DOC, or SWAYAM system editor, discrepancies have been found in submission records. Some students, initially marked ineligible by the university for not meeting the 75% assignment requirement, were later found to be affected by a technical glitch on the SWAYAM portal. In such cases, what steps should the university take to address the issue and determine the student's eligibility?",
        ugcReply:
            "In such cases, steps to be taken by SWAYAM UNO:\n\n1. Send an email to the concerned Course Coordinator (CC), with a copy to the National Coordinator, to ensure the number of graded assignments is correctly reflected in the dashboard data.\n2. Once the confirmation is received from CC regarding the above, modify the status of the assignments.\n3. This will get reflected in the University Dashboard by the end of the day.\n4. UNOs can now look at the updated data and confirm the eligibility of students.\n\nPlease note that the graded assignment submission counts are updated at the end of the day in the University Dashboard.\nIf a University is planning to conduct local exams for SWAYAM courses, they will have to wait till the SWAYAM exams are over for the same course so that the Internal Marks are updated by the SWAYAM Technical team.\nInternal Assessment marks are updated within 15–20 days after SWAYAM exams are completed to accommodate any student grievances related to the course.",
    },
    {
        id: 15,
        questionNumber: 15,
        title: "NPTEL and SWAYAM Assessment",
        heiQuery:
            "(a) Why NPTEL and SWAYAM assignments/external are completely different?\n(b) In NPTEL-delivered SWAYAM courses, the internal assessment (IA) is calculated out of 25, and the external exam is out of 75.\n(c) In NPTEL courses, if students submit 4 assignments out of 8 (50% of the total assignments), they are eligible for the final exam.\n(d) For instance, in a course with 8 assignments, a student who submits 4 is eligible as per NPTEL norms, but the University Dashboard flags them as ineligible. How should such cases be addressed?",
        ugcReply:
            "• SWAYAM Courses for which the end-term examination is conducted by NPTEL, the assessment criteria declared by the NPTEL for the course will be applicable.\n• In the case highlighted by the University for NPTEL courses, if students submit 4 assignments out of 8 (50% of the total assignments), they are eligible for the final exam, as the NPTEL treats the remaining assessment as a 0 score and then calculates the average score.\n• If the average score is more than 40%, the student is eligible for a certificate.\n• So, just because the student did 4 assignments out of 8 (50% of the total assignments), it does not mean that they are eligible.\n• As per the UGC Framework for Universities to conduct Examinations for SWAYAM Courses, only students who have submitted at least 75% of the graded assessments are eligible to appear for the end-term SWAYAM Course examination conducted by the University.",
    },
    {
        id: 16,
        questionNumber: 16,
        title: "Internal Assessment Scheme",
        heiQuery:
            "The internal assessment scheme varies across courses—some follow 'best 3 out of 5,' others use 'average of all,' and some switch criteria mid-course. Such inconsistencies create confusion for students and universities alike. It is recommended that the assessment criteria be clearly communicated at the beginning of the course and preferably standardized across all SWAYAM courses to ensure fairness and transparency in evaluation.",
        ugcReply:
            "The assignment structure and assessment methodology are determined by the respective SWAYAM Course Coordinators (CCs) based on the pedagogical requirements and curriculum design of each SWAYAM course.\n\nTherefore, a uniform internal assessment scheme cannot be imposed across all SWAYAM courses.",
    },
    {
        id: 17,
        questionNumber: 17,
        title: "Assignment Deadlines",
        heiQuery:
            "No assessment (assignment or quiz) should be scheduled or released before the last date of course enrollment. This ensures that all enrolled students have equal opportunity to participate in the internal assessment process and prevents disadvantage to those who enroll closer to the deadline. It will also maintain consistency and fairness in student evaluation across institutions.",
        ugcReply:
            "This concern has been duly noted.\n\nUGC may request all SWAYAM National Coordinators (NCs) to advise their respective Course Coordinators (CCs) to ensure that the assignment deadlines are scheduled at least 10 days after the close of course enrollment.",
    },
    {
        id: 18,
        questionNumber: 18,
        title: "NPTEL and University Examination Students",
        heiQuery:
            "There are two different types of students in the same class who are studying the same SWAYAM course. One is giving online NPTEL exam and another is opting for SWAYAM exam conducted by the university.\n\nOne of the online exam student got certificate in which marks are mentioned as 24.63/25 in internal and 52.5/75 in external and 77% in total.\n\nFor the university exam student, we have to create components of total marks in 30 & 70, as per the framework 2024. If we scale the marks for online students in 30 & 70 then the total marks will change.\n\nAlso, we cannot create two different types of components (30 & 70 and 25 & 75) in the same code (same MOOC course). What should we do? Please guide us.",
        ugcReply:
            "To ensure uniformity in grading and to avoid inconsistency in course codes and academic records, the following approach shall be adopted by HEI conducting the end-term SWAYAM examination:\n\nMarks obtained through NPTEL Certification (in 25:75 format) shall be proportionately scaled to the 30:70 format.",
    },
];
