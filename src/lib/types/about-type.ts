export interface AboutCardType {
  id: number;
  imageSrc: string;
  altText: string;
  tag: string;
  title: string;
  description: string;
  linkText: string;
  link?: string; // optional, since not all objects include it
}
