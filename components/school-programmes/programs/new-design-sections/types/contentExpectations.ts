export interface ExpectationSectionType {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  footerText?: string;
}

export interface ExpectationsContentType {
  badge: string;
  title: string;
  sections: ExpectationSectionType[];
}

export interface ExpectationsPageContentType {
  expectations: ExpectationsContentType;
}
