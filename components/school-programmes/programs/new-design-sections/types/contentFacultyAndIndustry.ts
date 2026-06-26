export interface DeanType {
  name: string;
  designation: string;
  qualification: string;
  image: string;
  linkedin: string;
}

export interface FacultyAndIndustrySectionType {
  title: string;
  desc: string;
  linkText: string;
  link: string;
}

export interface FacultyAndIndustryContentType {
  badge: string;
  title: string;
  classroomImage: string;
  dean: DeanType;
  sections: FacultyAndIndustrySectionType[];
}

export interface FacultyAndIndustryPageContentType {
  facultyAndIndustry: FacultyAndIndustryContentType;
}
