export interface FaqItemType {
  id: number;
  question: string;
  answer: string;
}

export interface CommonQuestionContentType {
  badge: string;
  title: string;
  faqs: FaqItemType[];
}

export interface CommonQuestionPageContentType {
  commonQuestion: CommonQuestionContentType;
}
