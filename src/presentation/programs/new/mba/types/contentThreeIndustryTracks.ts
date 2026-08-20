export interface CtaButtonType {
  text: string;
  link: string;
}

export interface ThreeIndustryTracksContentType {
  titleLineOne: string;
  titleLineTwo: string;
  description: string;
  primaryCta: CtaButtonType;
  secondaryCta: CtaButtonType;
  footerText: string;
  phoneNumber: string;
}

export interface ThreeIndustryTracksPageContentType {
  threeIndustryTracks: ThreeIndustryTracksContentType;
}
