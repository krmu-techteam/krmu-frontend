type HeroConfig = {
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
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_computer_science_and_engineering_cse_8f15e29b81.png",
    bgPosition: "85% center",
    mobileBgPosition: "center top",
    bgSize: "cover",
    mobileBgSize: "cover",
     overlayOpacity: "0.9",
    overlayWidth: "50%",
    subtitleSize: "sm:text-base",
    titleSize: "2xl:text-5xl",
    descSize: "2xl:text-lg",
    contentMaxWidth: "2xl:max-w-lg"
  },
  "btech-cse-ai-ml": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_ai_ml_15cdb3df4d.png",
    bgPosition: "85% center",
    mobileBgPosition: "55% top",
    bgSize: "cover",
    mobileBgSize: "cover",
     overlayOpacity: "0.9",
    overlayWidth: "60%",
    titleMaxWidth: "lg:max-w-[80%] 2xl:max-w-full",
    subtitleSize: "sm:text-base",
    titleSize: "text-[24px] lg:text-xl xl:text-3xl 2xl:text-[52px]",
    descSize: "2xl:text-lg",
    contentMaxWidth: "2xl:max-w-lg",
    highlightClass: "block text-white text-[18px] xl:text-[30px] 2xl:text-[35px] mt-2 md:mt-3 leading-[1.26]"
  },
  "btech-cse-cyber-security": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_cyber_security_968feea0dc.png",
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
  },
  "btech-cse-in-data-science": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_in_data_science_5d0e006c7a.png",
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
  },
  "btech-full-stack-development": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_full_stack_development_ffe74a6373.png",
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
  },
 "btech-cse-ui-ux": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_ui_ux_fe9156981c.png",
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
  }
};