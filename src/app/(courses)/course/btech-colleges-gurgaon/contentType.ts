export type CourseComeToLifeSlideItem = {
  image: string;
  alt?: string;
};

export type CourseComeToLifeSection = {
  slides: CourseComeToLifeSlideItem[];
};
export type HeroCourseMarqueeSection = {
  messages: string[];
  bgColor?: string; // optional (default red)
  speedClass?: string; // tailwind animation class
};
