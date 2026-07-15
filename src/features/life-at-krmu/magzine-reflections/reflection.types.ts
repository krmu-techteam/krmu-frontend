export interface ReflectionsResponse {
  data: ReflectionDomain;
  meta: Record<string, never>;
}

export interface ReflectionDomain {
  id: number;
  documentId: string;
  title: string;
  reflectioncontent: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bgimage: Media;
  magazinecard: MagazineCard[];
}

export interface ContentBlock {
  type: "heading" | "paragraph" | "list" | "list-item" | "text";
  level?: number;
  format?: string;
  bold?: boolean;
  text?: string;
  children: ContentBlock[];
}

export interface MagazineCard {
  id: number;
  magazineimg: Media;
  magazinepdf: Media;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: FormatsMedia | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface FormatsMedia {
  thumbnail?: MediaFormat;
  small?: MediaFormat;
  medium?: MediaFormat;
  large?: MediaFormat;
}

export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
