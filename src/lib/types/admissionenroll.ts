// ---------- BUTTON ----------
export type PhdAdmissionBtn = {
  id: number;
  btn_text: string;
  btn_link: string;
};

// ---------- IMAGE ----------
export type PhdAdmissionImg = {
  id: number;
  documentId: string;
  url: string;
};

// ---------- SCHOOL IMAGE ----------
export type OfferedSchoolImg = {
  id: number;
  documentId: string;
  url: string;
};

// ---------- OFFERED SCHOOLS ----------
export type OfferedSchool = {
  id: number;
  heading: string;
  content: string;
  url: string;
  school_img: OfferedSchoolImg;
};

// ---------- phd_programmes_schools ----------
export type PhdProgrammeSchools = {
  id: number;
  offered_schools: OfferedSchool[];
};

// ---------- phdprogramme_offered ----------
export type PhdProgrammeOffered = {
  id: number;
  phdOffered_heading: string;
  phd_programmes_schools: PhdProgrammeSchools;
  even_odd_sem_card: EvenOddSemCard[];
};

// ---------- EVEN / ODD SEMESTER CARD ----------
export type EvenOddSemCard = {
  id: number;
  title: string;
  url: string;
};

// ---------- PERSONAL INTERVIEW ----------
export type PersonalInterview = {
  id: number;
  heading: string;
  info_heading: string;
  content: string;
  personal_interview_img: PhdAdmissionImg;
};

// ---------- Phd Admission Accordions ----------
export type PhdAdmissionAccordion = {
  id: number;
  ques: string;
  ans: string;
};

// ---------- MAIN RESPONSE DATA ----------
export type PhdAdmissionData = {
  id: number;
  documentId: string;
  heading: string;
  subheading: string;
  content: string;
  hero_btn: PhdAdmissionBtn;
  heroimg?: PhdAdmissionImg; // Not present in actual JSON, but present in your type
  phdprogramme_offered: PhdProgrammeOffered;
  personal_interview: PersonalInterview;
  phd_admission_acc: PhdAdmissionAccordion[];
};

// ---------- FINAL API RESPONSE ----------
export type PhdAdmissionResponse = {
  data: PhdAdmissionData;
  meta: Record<string, unknown>;
};
