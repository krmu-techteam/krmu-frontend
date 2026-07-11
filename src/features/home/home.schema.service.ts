import {
  createCollageOrUniversitySchema,
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/api/common";

interface HomePageSchema {
  websiteSchema: string;
  organizationSchema: string;
  collageOrUniversitySchema: string;
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
      organizationSchema: createOrganizationSchema({
        ...this.base,
        contactPoint: {
          telephone: "+91-8192888444",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "en",
        },
      }),
      collageOrUniversitySchema: createCollageOrUniversitySchema(this.base),
    };
  }
}

export const homeSchemaService = new HomeSchemaService();
