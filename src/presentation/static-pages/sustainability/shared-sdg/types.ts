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

export interface SdgAuditItem {
  title: string;
  url: string;
}

export interface SdgAuditGroup {
  title?: string;
  mainAudits?: SdgAuditItem[];
  gridAudits?: SdgAuditItem[];
  isoCertificates?: SdgAuditItem[];
}

export interface SdgAwardItem {
  title?: string;
  image: string;
}

export interface SdgEventGroup {
  title: string;
  events?: SdgEventItem[];
  audits?: SdgAuditItem[];
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
  eventGroups?: SdgEventGroup[];
  audits?: SdgAuditGroup;
  awards?: SdgAwardItem[];
}
