// Hero section type
export type HeroContent = {
  title: string; // contains HTML string
  desc: string;
  heroBg: string;
  // middleImg: "/landingpage/law-2026/law.webp",
  middleImg: string,
  mobileImg: string,
  lpclName: string,
};

// Counter card type
export type CounterItem = {
  title: string;
  subtitle: string;
};

// Single recruiter item
export type ProminentRecruit = {
  imgUrl: string; // image URL
  alt: string; // image alt text
};

// Card inside Why KRM section
export type WhyKRMCard = {
  imgUrl: string;
  content: string;
};
export type WhyKRMSection = {
  heading: string;
  subheading: string;
  content: string;
  imgUrl: string;
  whyKrmCards: WhyKRMCard[];
};

// Single expert / collaboration card
export type IndustryExpertCard = {
  imgUrl: string;
  alt: string;
  title: string;
};

// CTA button type
export type SectionCTA = {
  label: string;
  href: string;
};

// Main Industry Experts section type
export type IndustryExpertsSection = {
  eyebrow: string; // "Why KR Mangalam PhD?"
  heading: string; // "Learn From <br /> Industry Experts"
  description: string;
  cta: SectionCTA;
  cards: IndustryExpertCard[];
  bannerImg: string;
};

// Extra info inside a card (Eligibility, Duration, etc.)
export type SpecialisationExtraInfo = {
  iconUrl: string;
  title: string;
  desc: string; // supports <br />
};

export type SpecialisationCardItem = {
  imgUrl: string;
  title: string; // supports <br />
  desc: string;
  extraInfos: SpecialisationExtraInfo[];
};

// Main Specialisation Section
export type SpecialisationSection = {
  subheading: string;
  heading: string; // supports <br />
  SpecialisationCard: SpecialisationCardItem[];
};

// Main Opportunity Section
export type OpportunitySection = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  heading: string;
  highlight: string;
  cta: {
    label: string;
    href: string;
  };
};

// Single testimonial item
export type TestimonialItem = {
  image: string;
  videoUrl?: string;
  quote: string;
  name: string;
  programme: string;
};

// Testimonials section
export type TestimonialsSection = {
  subheading: string;
  heading: string; // supports <br />
  testimonials: TestimonialItem[];
};

// Single testimonial card
export type ScholarTestimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
};

// Carousel image item
export type ScholarImpactSlide = {
  image: string;
  alt?: string;
};

// Main section type
export type ScholarResearchImpactSection = {
  heading: string;
  description: string;
  slides: ScholarImpactSlide[];
  testimonials: ScholarTestimonial[];
};

// Single slide image
export type ComeToLifeSlideItem = {
  image: string;
  alt?: string;
};

// CTA type (reuse across sections if you want)
// export type SectionCTA = {
//   label: string;
//   href: string;
// };

// Main Come To Life section
export type ComeToLifeSection = {
  heading: string; // supports <br />
  description: string; // supports <br />
  footerText: string; // supports <br />
  cta: SectionCTA;
  slides: ComeToLifeSlideItem[];
};

// Single facility item
export type ScholarFacility = {
  id: number;
  title: string;
};

// Main section type
export type LifeAsPhDScholarSection = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  facilities: ScholarFacility[];
  additionalFacilities: ScholarFacility[];
};

// Single FAQ item
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

// FAQ Section
export type FAQSectionData = {
  eyebrow: string;
  heading: string;
  description: string;
  faqs: FAQItem[];
};

// Bullet point item
export type BusinessHubHighlight = {
  text: string;
};

// Image config
export type BusinessHubImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Main Business Hub section
export type BusinessHubSection = {
  heading: string; // supports <br />
  description: string;
  highlights: BusinessHubHighlight[];
  mapImage: BusinessHubImage;
  formNote: string; // supports <br />
  formImage: BusinessHubImage;
};

// Highlight item
export type ApplyHighlight = {
  id: number;
  text: string;
};

// Apply section type
export type ApplySectionData = {
  heading: string; // supports <br />
  description: string;
  cta: {
    label: string;
    href: string;
  };
  highlights: ApplyHighlight[];
};
export type HeroMarqueeSection = {
  messages: string[];
  bgColor?: string; // optional (default red)
  speedClass?: string; // tailwind animation class
};
