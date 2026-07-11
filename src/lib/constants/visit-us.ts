export interface VisitExploreBlock {
  __component: "homepage-components.visit-explore";
  id: number;
  title: HeadingBlock[];
  description: ParagraphBlock[];
  visitexplorebtn: VisitExploreButton[];
}

interface HeadingBlock {
  type: "heading";
  level: number;
  children: TextBlock[];
}

interface ParagraphBlock {
  type: "paragraph";
  children: TextBlock[];
}

interface TextBlock {
  type: "text";
  text: string;
}

interface VisitExploreButton {
  id: number;
  text: string;
  link: string;
}