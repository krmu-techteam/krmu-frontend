import {
  createCollageOrUniversitySchema,
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/api/common";

interface HomePageSchema {
  websiteSchema: string;
  educationalOrganizationSchema: string;
  collegeOrUniversitySchema: string;
}

export class HomeSchemaService {
  private readonly base = {
    name: "K.R. Mangalam University",
    alternateName: "KRMU",
    url: "https://www.krmangalam.edu.in",
    logo: "https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75",
    sameAs: [
      "https://www.facebook.com/krmuniv",
      "https://www.instagram.com/krmuniv",
      "https://www.youtube.com/channel/UCrlCJyhEISXJU1SGYFcFmjA",
      "https://in.linkedin.com/school/krmuniv",
    ],
  };

  getHomePageSchemas(): HomePageSchema {
    return {
      websiteSchema: createWebsiteSchema({
        ...this.base,
        searchPath: "https://www.krmangalam.edu.in/search?q=",
      }),
      educationalOrganizationSchema: createOrganizationSchema({
        ...this.base,
        contactPoint: {
          telephone: "+91-8192888444",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "en",
        },
      }),
      collegeOrUniversitySchema: createCollageOrUniversitySchema({
        ...this.base,
        award: "NAAC 'A' Grade",
        numberOfEmployees: {
          name: "Faculty",
          value: 700,
        },
        amenityFeature: [
          {
            name: "Campus Area",
            value: "35+ acres",
          },
          {
            name: "Total Students",
            value: "12000+",
          },
          {
            name: "Recruiting Companies",
            value: "800+",
          },
          {
            name: "Highest Package",
            value: "56.6 LPA",
          },
        ],
      }),
    };
  }
}

export const homeSchemaService = new HomeSchemaService();
