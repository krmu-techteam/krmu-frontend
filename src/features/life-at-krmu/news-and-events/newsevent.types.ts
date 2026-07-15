export interface NewsAndEventsResponse {
  data: NewsAndEvents;
  meta: Record<string, never>;
}

export type NewsAndEventsDomain = NewsAndEvents;

export interface NewsAndEvents {
  id: number;
  documentId: string;
  main_heading: RichTextBlock[];
  main_desc: RichTextBlock[];
}

export interface RichTextBlock {
  type: "paragraph";
  children: RichTextChild[];
}

export interface RichTextChild {
  text: string;
  type: "text";
}
