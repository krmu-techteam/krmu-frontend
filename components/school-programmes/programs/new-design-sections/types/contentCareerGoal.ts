export interface CourseCardType {
  title: string;
  desc: string;
  linkText: string;
  details?: string[];
}

export interface SemesterTabType {
  id: string;
  tabLabel: string;
  courses: CourseCardType[];
}

export interface CareerGoalContentType {
  badge: string;
  title: string;
  description?: string;
  image: string;
  semesters: SemesterTabType[];
}

export interface CareerGoalPageContentType {
  careerGoal: CareerGoalContentType;
}
