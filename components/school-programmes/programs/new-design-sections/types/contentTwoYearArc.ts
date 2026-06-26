export interface SemesterType {
  period: string;
  title: string;
  desc: string;
  icon: string;
  linkText: string;
  highlight?: boolean;
}

export interface TwoYearArcContentType {
  badge: string;
  title: string;
  semesters: SemesterType[];
}

export interface TwoYearArcPageContentType {
  twoYearArc: TwoYearArcContentType;
}
