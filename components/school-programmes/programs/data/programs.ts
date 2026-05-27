export type HeroConfig = {
  bgUrl: string;
  bgPosition?: string;
  mobileBgPosition?: string;
  tabletBgPosition?: string;
  bgSize?: string;
  mobileBgSize?: string;
  tabletBgSize?: string;
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
  subtitleSize: "",
  titleSize: "text-[24px] lg:text-3xl xl:text-[42px] 2xl:text-[52px]",
  descSize: "2xl:text-lg",
  contentMaxWidth: "2xl:max-w-lg",
  highlightClass: "block text-white text-[18px] xl:text-[30px] 2xl:text-[35px] mt-2 md:mt-3 leading-[1.26]"
};

export const heroConfigs: Record<string, HeroConfig> = {
  "bba-hr": {
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hr_fb78e052aa.jpg",
    bgPosition: "85% center",
    mobileBgPosition: "center top",
    tabletBgPosition: "60% center",
    bgSize: "cover",
    mobileBgSize: "cover",
    tabletBgSize: "cover",
    overlayOpacity: "0.85",
    overlayWidth: "45%",
    subtitleSize: "sm:text-base mb-1",
    titleSize: "text-[24px] lg:text-3xl xl:text-[42px] 2xl:text-[52px]",
    descSize: "xl:text-[15px] 2xl:text-lg ",
    contentMaxWidth: "2xl:max-w-lg"
  },
  "b-tech-cse": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_cse_82febea33b.jpg",
    overlayWidth: "50%",
    titleSize: "lg:text-3xl xl:text-[42px] 2xl:text-5xl",
    mobileBgPosition: "60% top",
  } as HeroConfig,

  "btech-cse-ai-ml": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_ai_ml_024c301deb.jpg",
  } as HeroConfig,

  "btech-cse-cyber-security": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_cyber_security_968feea0dc.png",
  } as HeroConfig,

  "btech-cse-in-data-science": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_in_data_science_c2556561a6.jpg",
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
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_cse_robotics_ai_67aa0ef598.jpg",
    bgPosition: "70% top",
    mobileBgPosition: "57% -75px",
  } as HeroConfig,
  "btech-cse-cloud-computing": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/btech_cse_cloud_computing_910c6908de.png",
    bgPosition: "70% top",
  } as HeroConfig,
  "b-tech-computer-science-and-engineering-semiconductor-design": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/b_tech_computer_science_and_engineering_semiconductor_design_0788bdf247.png",
    bgPosition: "70% top",
  } as HeroConfig,
  "master-computer-application-mca": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/master_computer_application_mca_2f32723431.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "mca-ai-ml": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/mca_ai_ml_c83d8e88be.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "mtech-computer-science": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/mtech_computer_science_815a162413.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "phd-computer-science-engineering": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/phd_computer_science_engineering_eda2b57229.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "phd-mechanical-engineering": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/phd_mechanical_engineering_2800e1e94c.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-hr-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_hr_research_ffa83ec57c.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-hons-with-research-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_international_business_research_ee08c1cf96.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-marketing": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_marketing_105f198350.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-with-research-marketing": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_with_research_marketing_13b6cbab13.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_hons_with_research_hr_marketing_finance_international_business_travel_and_tourism_semester_abroad_programme_with_university_of_east_anglia_uea_norwich_uk_adc22342a4.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-finance": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_finance_a0747576c5.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-finance-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_finance_research_231128d1f8.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-hons-with-research-digital-marketing": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_hons_with_research_digital_marketing_8937bb8d41.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-digital-marketing": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_digital_marketing_e5a4bc86e9.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-international-business": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_international_business_143cea9a5d.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-international-business-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_international_business_research_38e59b4ad9.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-travel-tourism-management": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_travel_tourism_management_cac9d0998c.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-travel-tourism-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_travel_tourism_research_38c935ac3d.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-business-intelligence-and-analytics": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_business_intelligence_and_analytics_5963e3963e.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-entrepreneurship": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_entrepreneurship_7dc0d95fb8.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-entrepreneurship-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_entrepreneurship_research_5c93f9a2c3.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-international-accounting-and-finance": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_international_accounting_and_finance_e277c2565b.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-international-accounting-and-finance-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_international_accounting_and_finance_research_9cf4e07906.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-logistics-supply-chain-management": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_logistics_supply_chain_management_29911cbd9b.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-hons-logistics-supply-chain-management-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hons_logistics_supply_chain_management_research_58a594b636.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bcom-hons-2": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bcom_hons_2_a7e7bf11a9.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bcom-hons-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bcom_hons_research_14998ee877.jpg",
    bgPosition: "70% top",
    mobileBgPosition: "center top",
  } as HeroConfig,
  "bcom-international-accounting-finance-acca-2": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bcom_international_accounting_finance_acca_2_ccfeede68c.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bcom-hons-international-accounting-finance-acca-research": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bcom_hons_international_accounting_finance_acca_research_e4b23c1dbb.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bcom": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bcom_b2cf7e8ef3.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "integrated-bba-mba": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/integrated_bba_mba_85ddd89e40.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "mba-fintech": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/mba_fintech_4bcb466da2.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "mba": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/mba_8e2fcc935a.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "mba-digital-marketing": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/mba_digital_marketing_2728a5c094.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "phd-management": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/phd_management_57cf30bda7.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "phd-commerce": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/phd_commerce_cabc2265e0.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bba-llb-hons": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_llb_hons_db274f3d60.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "ba-llb-hons": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ba_llb_hons_e4c8c7ad8a.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "llb-hons": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/llb_hons_ee323a2777.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "llm-masters-law": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/llm_masters_law_e697049d86.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "phd-law": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/phd_law_215b11ace2.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
  "bpharma": {
    ...defaultCinematicConfig,
    bgUrl: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bpharma_9cf4f7bb72.jpg",
    bgPosition: "70% top",
  } as HeroConfig,
};