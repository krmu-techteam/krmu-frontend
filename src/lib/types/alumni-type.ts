export interface AlumniCardType {
  id: number;
  imageSrc: string;
  name: string;
  position: string;
  testimonial: string;
  rating: number; // 1–5 stars
  verified?: boolean;
}
