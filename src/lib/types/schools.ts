import { ParagraphBlock } from "./about";
import {
  ButtonType,
  CardWithImage,
  common_btn,
  CounterItem,
  SchoolHeroBanner,
  StrapiMedia,
} from "./common";
import { Button } from "./home";

export interface SchoolCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SchoolComps {
  __component: "schoolcomponent.knowledge";
  id: number;
  heading: string;
  subheading: string;
  description: string;
  counter: CounterItem[];
}

export interface CollabCards {
  id: number;
  card_list_item: CardLISTITEM[];
  cardimg: StrapiMedia;
  card_desc: string;
}
export interface CardLISTITEM {
  id: number;
  listtext: string;
}
export interface ListItem {
  id: number;
  listtext: string;
  listlink: null | string;
}

export interface SchoolList {
  id: number;
  listheading: string | null;
  listsitems: ListItem[];
}

export interface SchoolTestimonials {
  id: number;
  name: string;
  education: string;
  info: string;
  userimg: StrapiMedia;
}

export interface SchoolDegree {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface School {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  schoolname: string;
  subheading: string;
  urlslug: string;
  herobutton: Button[];
  school_category: SchoolCategory;
  videoformat: string;
  iframe: string;
  videolink: string;
  admissionsessiontitle: string;
  admissionbtn: Button;
  schoolcomps: SchoolComps[];
  alumnititle: string;
  alumnilogo: StrapiMedia[];
  excitedtitle: string;
  exciteddescription: string;
  excitedbtns: ButtonType[];
  newslettertitle: string;
  newsletterdesc: string;
  newsletterbtns: ButtonType[];
  advantagetitle: string;
  advantagedesc: string;
  advantagesubtitle: string;
  advantagimg: StrapiMedia;
  advantageCards: CardWithImage[];
  induscollabtitle: ParagraphBlock[];
  collabcards: CollabCards[];
  letsexplorecontent: ParagraphBlock[];
  listitem1: SchoolList;
  listitem2: SchoolList;
  listitem3: SchoolList;
  coetitle1: string;
  coetitle2: string;
  coebtn1: ButtonType;
  coebtn2: ButtonType;
  knowledgetitle: string;
  knowledgepartenerlogos: StrapiMedia[];
  tetimonialtitle: string;
  testimonialdesc: string;
  testimonials: SchoolTestimonials[];
  deanvisionsubtitle: string;
  deanimg: StrapiMedia;
  newsletterbg: StrapiMedia;
  excitedbg: StrapiMedia;
  deanvisiontitle: string;
  deancontent: ParagraphBlock[];
  deansname: string;
  deanemail: string;
  deandesignation: string;
  eventstitle: string;
  eventsdesc: string;
  eventsbtn: ButtonType;
  studentachievementtitle: string;
  studentachievementsbtn: Button;
  schoolherobanner: SchoolHeroBanner;
  showdeaninfo: boolean;
  degree: SchoolDegree;
  facility_slide: FacilitySlide[];
  commence_journey: CommenceJourney;
  fullwidthhero: boolean;
  fac_adv: FACADV;
  video_comp: VIDEOCOMP;
  programme_offered: ProgrammeOffered;
  school_advantage: SCHOOLADVANTAGE;
  wordschoolslug: string;
}



export interface SCHOOLADVANTAGE {
  id: number;
  advantage_content: string;
}

export interface ProgrammeOffered {
  title: string;
  content: string;
}

export interface VIDEOCOMP {
  id: number;
  heading: string;
  video_iframe_fields: VIDEOIFRAME[];
}

export interface VIDEOIFRAME {
  id: number;
  videoiframefield: string;
}

export interface FACADV {
  fac_adv: string;
  fac_title: string;
}

export interface CommenceJourney {
  highlight_heading: string;
  heading: string;
  commence_btn: common_btn;
  commence_img: StrapiMedia;
}

export interface FacilitySlide {
  id: number;
  title: string;
  facility_img: StrapiMedia;
}

export interface SchoolsResponse {
  data: School[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Meta pagination
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface EventsAndExperienceCard {
  id: number;
  title: string;
  documentId: string;
  slug: string;
  content: ParagraphBlock[];
  newsmedia: StrapiMedia[];
}

export interface SCHOOLEVENTSANDEXPRESPONSE {
  data: EventsAndExperienceCard[];
  meta: {
    pagination: Pagination;
  };
}

////////////faculty///////////////
export interface FACULTYCARD {
  publishedAt: string;
  id: number;
  documentId: string;
  faculty_name: string;
  facultyslug: string;
  faculty_card_desg: string;
  faculty_qualification: string;
  faculty_img: StrapiMedia; // or a more specific type if you know the structure
  faculty_type: string;
}

export interface FacultyResponse {
  data: FACULTYCARD[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

////////////////////////////////////// Internation Collab
// Text node
export interface IntCollabTextNode {
  type: "text";
  text: string;
}

// Paragraph block
export interface IntCollabParagraphBlock {
  type: "paragraph";
  children: IntCollabTextNode[];
}

// List item block
export interface IntCollabListItemBlock {
  type: "list-item";
  children: IntCollabTextNode[];
}

// List block
export interface IntCollabListBlock {
  type: "list";
  format: "unordered" | "ordered";
  children: IntCollabListItemBlock[];
}

// Union type for any block
export type IntCollabRichTextBlock =
  | IntCollabParagraphBlock
  | IntCollabListBlock;

// Full content array type
export type IntCollabRichTextContent = IntCollabRichTextBlock[];

//////////////////////////////////////////////

export type SchoolPageCollabCard = {
  id: number;
  cardcontent: SchoolPageCardContent[];
  cardimg: StrapiMedia;
};

export type SchoolPageCardContent = {
  type: "paragraph" | "list";
  format?: "unordered" | "ordered"; // applicable only for lists
  children: SchoolPageCardChild[];
};

export type SchoolPageCardChild = {
  type: "list-item" | "text";
  text?: string;
  children?: SchoolPageCardChild[]; // for nested items
};

// export type SchoolPageCollabCardsResponse = {
//   collabcards: SchoolPageCollabCard[];
// };

export type WordSchoolFacultyResponse = WordSchoolFaculties[];

export type WordSchoolFaculties = {
  id: number;
  title: {
    rendered: string;
  };
  featured_media: number;
  acf: WordSchoolACF;
  slug: string;
};

export type WordSchoolACF = {
  "staff-qualification": string;
  staff_designation: string;
  schools: number[];
};
