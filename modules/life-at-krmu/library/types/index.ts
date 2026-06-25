export interface LinkInfo {
  text: string;
  url?: string;
}

export interface BookRenewalProps {
  title: string;
  description: string;
  linkInfo: LinkInfo;
}

export interface OverviewProps {
  tagLine: string;
  heading: string;
  description: string;
  imageUrl: string;
  bookRenewal: BookRenewalProps[];
}

export interface MembershipGuidelines {
  pointNumber: string;
  content: string;
}

export interface MembershipProps {
  tagLine: string;
  heading: string;
  description: string;
  membershipGuidelines: MembershipGuidelines[];
}

export interface LibraryContentProps {
  overview: OverviewProps;
  membership: MembershipProps;
}
export interface DataProps {
  libraryContent: LibraryContentProps;
}

export interface ApiResponse {
  data: DataProps;
}
