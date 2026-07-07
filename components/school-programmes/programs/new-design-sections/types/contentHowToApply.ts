export interface HowToApplyCardType {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface HowToApplyStepType {
  number: number;
  title: string;
  desc: string;
}

export interface HowToApplyCtaType {
  buttonText: string;
  buttonLink: string;
  phoneText: string;
  phoneNumber: string;
}

export interface HowToApplyContentType {
  badge: string;
  title: string;
  leftCards: HowToApplyCardType[];
  steps: HowToApplyStepType[];
  cta: HowToApplyCtaType;
}

export interface HowToApplyPageContentType {
  howToApply: HowToApplyContentType;
}
