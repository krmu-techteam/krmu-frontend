export interface LinkInfo {
  text: string;
  url?: string;
}

export interface BookRenewalProps {
  title: string;
  description: string;
  linkInfo: LinkInfo;
}
export interface Library {
  tagLine: string;
  heading: string;
  description: string;
}
export interface LibraryCard {
  content: string;
  imageUrl?: string;
}
export interface OverviewProps extends Library {
  imageUrl: string;
  bookRenewal: BookRenewalProps[];
}

export interface MembershipGuidelines {
  pointNumber: string;
  content: string;
}

export interface MembershipProps extends Library {
  membershipGuidelines: MembershipGuidelines[];
}

export interface BookIssueContents {
  content: string;
}
export interface BookIssueGuidelines extends Library {
  bookIssueContents: BookIssueContents[];
}

export interface FineRule {
  content: string;
}
export interface TeachingStaffLoanPeriod {
  Semester: string;
  duration1: string;
  duration2: string;
  evenSemester: string;
  evenDuration1: string;
  evenDuration2: string;
}

export type LoanPeriod = string | TeachingStaffLoanPeriod;

export interface MemberLoanPolicyRow {
  memberCategory: string;
  maxBooks: string;
  loanPeriod: LoanPeriod;
  lateFine: string;
}
export interface MemberLoanPolicy {
  headers: string[];
  rows: MemberLoanPolicyRow[];
}
export interface Library {
  tagLine: string;
  heading: string;
  description: string;
}
export interface LibraryCard {
  content: string;
  imageUrl?: string;
}
export interface LateFine extends Library {
  fineRules: FineRule[];
  memberLoanPolicy: MemberLoanPolicy;
}

export interface LostBookPolicy extends Library {
  lostBookPolicyContents: LibraryCard[];
}

export interface DamagedBookPolicy extends Library {
  damagedBookPolicyContents: LibraryCard[];
}

export interface BookRenewalPolicy extends Library {
  bookRenewalPolicyContents: LibraryCard[];
}

export interface RenewalStatus extends Library {
  renewalStatusContents: LibraryCard[];
}
export interface BookRecallAndReservation extends Library {
  bookRecallAndReservationContents: LibraryCard[];
}

export interface PromptCorrection extends Library {
  promptCorrectionContents: LibraryCard[];
}

export interface ReadingRoom extends Library {
  leftContents: string[];
  rightContents: string[];
}
export interface DigitalLibrary extends Library {
  digitalLibraryContents: LibraryCard[];
}

export interface FeedbackAndComplaints extends Library {
  feedbackAndComplaintsContents: LibraryCard[];
  imageUrl: string;
}
export interface LibraryContentProps {
  overview: OverviewProps;
  membership: MembershipProps;
  bookIssueGuidelines: BookIssueGuidelines;
  lateFine: LateFine;
  lostBookPolicy: LostBookPolicy;
  damagedBookPolicy: DamagedBookPolicy;
  bookRenewalPolicy: BookRenewalPolicy;
  renewalStatus: RenewalStatus;
  bookRecallAndReservation: BookRecallAndReservation;
  promptCorrection: PromptCorrection;
  readingRoom: ReadingRoom;
  digitalLibrary: DigitalLibrary;
  feedbackAndComplaints: FeedbackAndComplaints;
}
export interface DataProps {
  libraryContent: LibraryContentProps;
}
export interface ApiResponse {
  data: DataProps;
}
