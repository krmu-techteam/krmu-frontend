export interface SdgEventItem {
  id: string;
  title: string;
  image: string;
  pdfUrl: string;
}

export interface SdgActionButton {
  text: string;
  url: string;
}

export interface SdgDetailPageData {
  goalNumber: number | string;
  title: string;
  subtitle: string;
  heroImage: string;
  backLink?: string;
  paragraphs: string[];
  leftButtonText?: string;
  leftButtonUrl?: string;
  leftButtons?: SdgActionButton[];
  goalTileImage: string;
  sdgReportText?: string;
  sdgReportUrl?: string;
  accentColor?: string;
  eventsTitle?: string;
  events?: SdgEventItem[];
}
