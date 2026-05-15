export type HeroConfig = {
  bgUrl: string;
  bgPosition?: string;
  mobileBgPosition?: string;
  bgSize?: string;
  mobileBgSize?: string;
  overlayOpacity?: string;
  overlayWidth?: string;
  subtitleSize?: string;
  subtitleMaxWidth?: string;
  titleSize?: string;
  titleMaxWidth?: string;
  titleSizeMobile?: string;
  descSize?: string;
  contentMaxWidth?: string;
  highlightClass?: string;
};

// Base config for most cinematic heroes to avoid repetition
const defaultCinematicConfig: Partial<HeroConfig> = {
  bgPosition: "85% center",
  mobileBgPosition: "55% top",
  bgSize: "cover",
  mobileBgSize: "cover",
  overlayOpacity: "0.9",
  overlayWidth: "60%",
  titleMaxWidth: "lg:max-w-[80%] 2xl:max-w-full",
  subtitleMaxWidth: "lg:max-w-[80%] 2xl:max-w-full",
  subtitleSize: "sm:text-base",
  titleSize: "text-[24px] lg:text-xl xl:text-3xl 2xl:text-[52px]",
  descSize: "2xl:text-lg",
  contentMaxWidth: "2xl:max-w-lg",
  highlightClass: "block text-white text-[18px] xl:text-[30px] 2xl:text-[35px] mt-2 md:mt-3 leading-[1.26]"
};

export const heroConfigs: Record<string, HeroConfig> = {
  "bba-hr": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hr_6bd1b64d96.png",
    bgPosition: "85% center",
    mobileBgPosition: "center -120px",
    bgSize: "cover",
    mobileBgSize: "240%",
    overlayOpacity: "0.85",
    overlayWidth: "45%",
    subtitleSize: "sm:text-base",
    titleSize: "2xl:text-5xl",
    descSize: "2xl:text-lg",
    contentMaxWidth: "2xl:max-w-lg"
  },
  "b-tech-cse": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_cse_8f15e29b81.png",
    overlayWidth: "50%",
    titleSize: "2xl:text-5xl",
    mobileBgPosition: "center top",
  } as HeroConfig,

  "btech-cse-ai-ml": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_ai_ml_15cdb3df4d.png",
  } as HeroConfig,

  "btech-cse-cyber-security": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_cyber_security_968feea0dc.png",
  } as HeroConfig,

  "btech-cse-in-data-science": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_in_data_science_5d0e006c7a.png",
  } as HeroConfig,

  "btech-full-stack-development": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_full_stack_development_ffe74a6373.png",
  } as HeroConfig,

  "btech-cse-ui-ux": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_ui_ux_fe9156981c.png",
  } as HeroConfig,

  "bca-ai-data-science": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bca_ai_data_science_c018e54756.png",
    bgPosition: "70% top",
  } as HeroConfig,

  "bca-hons-hons-with-research-cyber-security": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bca_hons_hons_with_research_cyber_security_e491ea6dbf.png",
    bgPosition: "70% top",
  } as HeroConfig,

  "bca-cyber-security": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bca_cyber_security_d574018507.png",
    bgPosition: "70% top",
  } as HeroConfig,
  "bca-ai-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bca_ai_research_e54ecbf03d.png",
    bgPosition: "70% top",
  } as HeroConfig,
  "bsc-hons-computer-science": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bsc_hons_computer_science_656b183e93.png",
    bgPosition: "70% top",
  } as HeroConfig,
  "bsc-hons-cyber-security": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bsc_hons_cyber_security_c4b63132b9.png",
    bgPosition: "70% top",
  } as HeroConfig,
  "b-tech-cse-robotics-ai": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_cse_robotics_ai_5a78b666c7.png",
    bgPosition: "70% top",
    mobileBgPosition: "57% -75px",
  } as HeroConfig,
};