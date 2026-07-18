export interface HeroSection {
  title: string;
  description: string;
}

export interface ContactInfo {
  label: string;
  value: string;
}

export interface Documents {
  title: string;
  url: string;
}
export interface Helpline {
  title: string;
  contactInfo: ContactInfo;
}
export interface MemberSecretary {
  title: string;
  contactInfo: ContactInfo;
}
export interface Members {
  name: string;
  position: string;
}
export interface Committee {
  title: string;
  members: Members[];
}
export interface AntiDiscriminationSection {
  title: string;
  descriptions: string[];
  objectivesTitle: string;
  objectives: string[];
  committee: Committee;
  helpline: Helpline;
  documents: Documents;
  memberSecretary: MemberSecretary;
}

// GenderSensitisation
export interface GenderSensitisation {
  title: string;
  description: string;
  helpline: Helpline;
  documents: Documents;
  committee: Committee;
}

// InternalComplaints
export interface ImportantLinks {
  title: string;
  url: string;
}
export interface InternalComplaints {
  title: string;
  descriptions: string[];
  committee: Committee;
  helpline: Helpline;
  documents: Documents;
  complaintButton: Documents;
  importantLinks: ImportantLinks[];
}

// AntiRaggingSection

export interface MemberSecretaryContact {
  heading: string;
  contact: AntiRaggingUGC;
}
export interface AntiRaggingUGC {
  label: string;
  value: string;
}

export interface AntiRaggingContact {
  emailLabel: string;
  emailValue: string;
  phoneLabel: string;
  phoneValue: string;
}

export interface AntiRaggingHelpline {
  memberSecretary: MemberSecretaryContact;
  university: { contact: AntiRaggingContact };
  ugc: { contact: AntiRaggingUGC };
}

export interface AntiRagging {
  title: string;
  descriptions: string[];
  documents: Documents[];
  complaintButton: Documents;
  committee: Committee;
  helpline: AntiRaggingHelpline;
}

// GrievanceRedressal
export interface GrievanceRedressal {
  title: string;
  descriptions: string[];
  committee: Committee;
  helpline: Helpline;
  documents: Documents[];
}

// StudentDiscipline
export interface StudentDiscipline {
  title: string;
  descriptions: string[];
  committee: Committee;
  helpline: Helpline;
  documents: Documents[];
}

export interface KrmuCommitteeData {
  heroSection: HeroSection;
  antiDiscriminationSection: AntiDiscriminationSection;
  genderSensitisationSection: GenderSensitisation;
  internalComplaintsSection: InternalComplaints;
  antiRaggingSection: AntiRagging;
  grievanceRedressalSection: GrievanceRedressal;
  studentDisciplineSection: StudentDiscipline;
}

export type KrmuCommitteeDomain = KrmuCommitteeData;

export interface KrmuCommitteeResponse {
  data: KrmuCommitteeData;
}
