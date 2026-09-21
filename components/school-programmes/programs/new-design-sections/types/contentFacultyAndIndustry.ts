export interface DeanType {
  name: string;
  designation: string;
  qualification: string;
  image: string;
  linkedin: string;
}

export interface PartnerType {
  name: string;
  role: string;
}

export interface FacultyAndIndustrySectionType {
  title: string;
  desc: string;
  linkText: string;
  link: string;
  details?: string;
  partners?: PartnerType[];
}

export interface FacultyCardType {
  name: string;
  altText: string;
  designation: string;
  qualification: string;
  image: string;
  details: string;
  linkedin: string;
}

export interface FacultyAndIndustryContentType {
  badge: string;
  title: string;
  classroomImage: string;
  alt: string;
  dean: DeanType;
  sections: FacultyAndIndustrySectionType[];
  faculties: FacultyCardType[];
}

export interface FacultyAndIndustryPageContentType {
  facultyAndIndustry: FacultyAndIndustryContentType;
}
