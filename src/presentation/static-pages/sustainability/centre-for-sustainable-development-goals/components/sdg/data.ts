import { Variants } from "framer-motion";

export interface SustainTrigger {
  id: string;
  label: string;
}

export interface SdgBadgeCard {
  title: string;
  image: string;
}

export const sustainTriggers: SustainTrigger[] = [
  { id: "sustain-panel-1", label: "Sustainability" },
  { id: "sustain-panel-14", label: "SDG Annual Report" },
  { id: "sustain-panel-3", label: "Energy Conservation Measures" },
  { id: "sustain-panel-4", label: "Waste Management" },
  { id: "sustain-panel-5", label: "Water Conservation" },
  { id: "sustain-panel-6", label: "Green Campus Initiatives" },
  { id: "sustain-panel-13", label: "Eco Friendly Transport" },
  { id: "sustain-panel-7", label: "Barrier Free Environment" },
  { id: "sustain-panel-8", label: "Social Responsibility and Harmony" },
  { id: "sustain-panel-9", label: "Code of Conduct" },
  { id: "sustain-panel-10", label: "Best Practices" },
  { id: "sustain-panel-11", label: "Institutional Distinctiveness" },
  { id: "sustain-panel-15a", label: "Good Governance" },
  { id: "sustain-panel-16a", label: "Social Impact" },
  { id: "sustain-panel-17a", label: "Environment Sustainability Report" },
  {
    id: "sustain-panel-18a",
    label: "Campus Health Wellness and Well Being Ecosystem",
  },
  { id: "sustain-panel-19a", label: "Knowledge Exchange" },
];

export const sdgCards: SdgBadgeCard[] = [
  {
    title: "Good Health and Well-Being",
    image: "/images/sustainability/badge/good-health.jpg",
  },
  {
    title: "Clean Water and Sanitation",
    image: "/images/sustainability/badge/clear-water.jpg",
  },
  {
    title: "Affordable and Clean Energy",
    image: "/images/sustainability/badge/affordable.jpg",
  },
  {
    title: "Responsible Consumption and Production",
    image: "/images/sustainability/badge/responsible.jpg",
  },
  {
    title: "Climate Action",
    image: "/images/sustainability/badge/climate.jpg",
  },
  {
    title: "Partnerships for the Goals",
    image: "/images/sustainability/badge/partnership.jpg",
  },
];

export const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
      opacity: { duration: 0.2, ease: "linear" },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.35, delay: 0.1, ease: "easeOut" },
    },
  },
};
