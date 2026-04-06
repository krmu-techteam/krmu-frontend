import { FETCH_STRAPI_URL, KRMUWordUrl } from "@/app/constant";
import {
  AlumniApiResponse,
  CustomPage,
  CustomPageResponse,
  FacilityAPIResponse,
  SchoolProgrammeSEOResponse,
  StrapiMedia,
  StudentAchievementResponse,
} from "../types/common";
import { TestimonialItem, TestimonialResponse } from "../constants/testimonial";
import { NewsAndEventResponse } from "../types/news-and-events";
import { MainMenuResponse, TOPBARResponse } from "../types/HeaderType";
import { GlobalResponse } from "../types/global";
import { AdvisoryBoardResponse } from "../types/advisory-type";
import { HeaderMenuResponse } from "../types/header-menu";
import { BlogImageIdResponse } from "../types/blogs/single-blog";

export async function getAlumniData(): Promise<AlumniApiResponse["data"]> {
  try {
    const res = await fetch(`${FETCH_STRAPI_URL}/api/alumnis?populate=*`, {
      cache: "no-cache"
    },);

    if (!res.ok) throw new Error("Failed to fetch Alumni Data");

    const json: AlumniApiResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Alumni data fetch error:", error);
    return [];
  }
}
export async function getFacilityData(): Promise<FacilityAPIResponse["data"]> {
  try {
    const res = await fetch(`${FETCH_STRAPI_URL}/api/facilities?populate=*`, {
      cache: "no-cache"
    },);

    if (!res.ok) throw new Error("Failed to fetch Facility Data");

    const json: FacilityAPIResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Facility data fetch error:", error);
    return [];
  }
}

export async function getTestimonialsData(): Promise<TestimonialItem[]> {
  try {
    const res = await fetch(`${FETCH_STRAPI_URL}/api/testimonials?populate=*`, {
      cache: "no-cache"
    },);
    if (!res.ok) throw new Error("Failed to fetch Testimonials Data");

    const json: TestimonialResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Testimonials fetch error:", error);
    return [];
  }
}

export async function getNewsAndEventsData(): Promise<
  NewsAndEventResponse["data"]
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/news-and-events?populate=*`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch News and Events Data");

    const json: NewsAndEventResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("News and events data fetch error:", error);
    return [];
  }
}

// http://localhost:1337/api/topbar-menu?populate[TopbarMenuItems]=true&populate[topbarsociallinks][populate][socialicon]=true&populate[topbarsociallinks][fields][0]=url

export async function getTopbarData(): Promise<TOPBARResponse["data"] | null> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/topbar-menu?populate[TopbarMenuItems]=true&populate[topbarsociallinks][populate][socialicon]=true&populate[topbarsociallinks][fields][0]=url`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Topbar Data");

    const json: TOPBARResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Topbar data fetch error:", error);
    return null;
  }
}

export async function getMainMenu() {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/main-menu?populate[MainMenuItems][on][menu.dropdown-menu][fields][0]=title&populate[MainMenuItems][on][menu.dropdown-menu][populate][menu_sections][populate]=*&populate[MainMenuItems][on][menu.dropdown-menu][populate][menuimg][populate]=*&populate[MainMenuItems][on][menu.menu-button][populate]=*&populate[MainMenuItems][on][menu.menu-links][populate]=*`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Main Menu Data");

    const json: MainMenuResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Main menu fetch error:", error);
    return [];
  }
}

//   {
//   populate: {
//     MainMenuItems: {
//       on: {
//         'menu.dropdown-menu': {
//           fields: ['title'],
//           populate: {
//             menu_sections: {
//               populate: '*'
//             },
//             menuimg: {
//               populate: '*'
//             }
//           }
//         },
//         'menu.menu-button': {
//           populate: '*'
//         },
//         'menu.menu-links': {
//           populate: '*'
//         }
//       }
//     }
//   }
// }

export async function getHeaderMenu(): Promise<HeaderMenuResponse["data"] | null> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/header-menu-temp?populate[headermenus][on][temp-menus.academic-menu][fields][0]=title&populate[headermenus][on][temp-menus.academic-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.academic-menu][populate][academicmenu][populate]=*&populate[headermenus][on][temp-menus.academic-menu][populate][discovermenu][populate]=*&populate[headermenus][on][temp-menus.academic-menu][populate][acadcounter][populate]=*&populate[headermenus][on][menu.menu-links][populate]=*&populate[headermenus][on][menu.menu-button][populate]=*&populate[headermenus][on][temp-menus.admissions][fields][0]=title&populate[headermenus][on][temp-menus.admissions][fields][1]=backgroundimagetext&populate[headermenus][on][temp-menus.admissions][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.admissions][populate][enrollnow][populate]=*&populate[headermenus][on][temp-menus.admissions][populate][scholarships][populate]=*&populate[headermenus][on][temp-menus.admissions][populate][visitus][populate]=*&populate[headermenus][on][temp-menus.placement-menu][fields][0]=title&populate[headermenus][on][temp-menus.placement-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.placement-menu][populate][placementcounter][populate]=*&populate[headermenus][on][temp-menus.placement-menu][populate][placement][populate]=*&populate[headermenus][on][temp-menus.research-menu][fields][0]=title&populate[headermenus][on][temp-menus.research-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.research-menu][populate][researchcounter][populate]=*&populate[headermenus][on][temp-menus.research-menu][populate][research][populate]=*&populate[headermenus][on][temp-menus.life-at-krmu][fields][0]=title&populate[headermenus][on][temp-menus.life-at-krmu][fields][1]=backgroundimagetext&populate[headermenus][on][temp-menus.life-at-krmu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.life-at-krmu][populate][lifeatkrmu1][populate]=*&populate[headermenus][on][temp-menus.life-at-krmu][populate][lfeatkrmu2][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][fields][0]=title&populate[headermenus][on][temp-menus.about-us-menu][populate][backgroundimage][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][populate][aboutuscounter][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][populate][overview][populate]=*&populate[headermenus][on][temp-menus.about-us-menu][populate][administration][populate]=*`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Header Menu Data");

    const json: HeaderMenuResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Header menu fetch error:", error);
    return null;
  }
}

// {
//   populate: {
//     headermenus: {
//       on: {
//         'temp-menus.academic-menu': {
//           fields: ['title'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             academicmenu: { populate: '*' },
//             discovermenu: { populate: '*' },
//             acadcounter: { populate: '*' }
//           }
//         },
//         'menu.menu-links': {
//           populate: '*'
//         },
//         'temp-menus.admissions': {
//           fields: ['title', 'backgroundimagetext'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             enrollnow: { populate: '*' },
//             scholarships: { populate: '*' },
//             visitus: { populate: '*' }
//           }
//         },
//         'temp-menus.placement-menu': {
//           fields: ['title'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             placementcounter: { populate: '*' },
//             placement: { populate: '*' }
//           }
//         },
//         'temp-menus.research-menu' : {
//            fields:['title'],
//            populate: {
//            backgroundimage: {populate: '*'},
//            researchcounter : {
//             populate: '*'
//            },
//            research: {
//            populate: '*'
//            }
//            }
//         },
//         'temp-menus.life-at-krmu' : {
//             fields: ['title', 'backgroundimagetext'],
//             populate: {
//               backgroundimage: { populate: '*' },
//               lifeatkrmu1: {populate: '*'},
//               lfeatkrmu2: {populate: '*'}
//             }
//         },
//         'temp-menus.about-us-menu' : {
//           fields: ['title'],
//           populate: {
//             backgroundimage: { populate: '*' },
//             aboutuscounter : { populate: '*' },
//             overview: { populate: '*' },
//             administration:  { populate: '*' }
//           }
//         }
//       }
//     }
//   }
// }

export async function getMetaInfo(): Promise<GlobalResponse["data"] | null> {
  try {
    const res = await fetch(`${FETCH_STRAPI_URL}/api/global?populate=*`, {
      cache: "no-cache"
    });
    if (!res.ok) throw new Error("Failed to fetch Meta info Data");

    const json: GlobalResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Meta info fetch error:", error);
    return null;
  }
}

export async function getAdvisoryBoard(): Promise<
  AdvisoryBoardResponse["data"] | null
> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/advisory-board?populate[advisoryboard][fields][0]=title&populate[advisoryboard][fields][1]=advisoryboardinfo&populate[advisoryboard][populate][advisoryimage]=true`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Advisory Board Data");

    const json: AdvisoryBoardResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Advisory board fetch error:", error);
    return null;
  }
}

export async function getSchoolStudentAchievements(
  cat: string,
): Promise<StudentAchievementResponse["data"]> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/student-achievements?sort[0]=updatedAt:desc&filters[school_categories][name][$eq]=${cat}&populate[achivementimage]=true&pagination[pageSize]=3&pagination[page]=1&status=published&locale[0]=en`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch Student Achievements Data");
    const json: StudentAchievementResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Student achievements fetch error:", error, cat);
    return [];
  }
}
// export async function getEventsByCategories(
//   cat: string,
// ): Promise<StudentAchievementResponse["data"]> {
//   const res = await fetch(
//     `${FETCH_STRAPI_URL}/api/events?filters[school_category][slug][$eq]=${cat}&populate=*`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Meta info Data");
//   const json: StudentAchievementResponse = await res.json();
//   return json.data;
// }

// export async function getEventsByCategories(cat: string) {
//   const res = fetch(
//     `${FETCH_STRAPI_URL}/api/events?filters[school_category][slug][$eq]=${cat}&populate=*`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Meta info Data");
//   const json: StudentAchievementResponse = await res.json();
//   return json.data;
// }

// export async function isCustomPage(
//   slug: string = "this-is-a-title"
// ): Promise<CustomPageResponse["data"]> {
//   const res = await fetch(
//     `${FETCH_STRAPI_URL}/api/custom-pages?filters[slug][$eq]=${slug}&fields[0]=enable_disable_custom_page&fields[1]=slug`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch Is Custom page or not");
//   const json: CustomPageResponse = await res.json();
//   return json.data;
// }

export async function isCustomPage(slug: string = ""): Promise<CustomPage[]> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/custom-pages?filters[slug][$eq]=${slug}&fields[0]=slug&fields[1]=enable_disable_custom_page&status=published&locale[0]=en`,
      { cache: "no-cache" }
    );
    if (!res.ok) return [];
    const json: CustomPageResponse = await res.json();
    return json.data;
  } catch {
    return [];
  }
}

// common seo api function

export async function getSchoolProgrammeSEO(
  slug: string,
): Promise<SchoolProgrammeSEOResponse["data"]> {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/school-programmes?filters[programmeslug][$eq]=${slug}&fields[0]=programmeslug&populate[SEO][fields][0]=metaTitle&populate[SEO][fields][1]=metaDescription&populate[SEO][fields][2]=metaKeyword&populate[SEO][fields][3]=canonical&populate[SEO][fields][4]=noIndex&populate[SEO][fields][5]=tags`,
      {
        cache: "no-cache"
      },
    );
    if (!res.ok) throw new Error("Failed to fetch School Programme SEO");
    const json: SchoolProgrammeSEOResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("School programme SEO fetch error:", error, slug);
    return [];
  }
}

///////////////////////////////

export interface FacultyInterestArea {
  id: number;
  fac_int_content: string; // HTML string (contains <ul><li> etc.)
}

export interface FacultyTab {
  id: number;
  tabname: string;
  tabcontent: string | null; // can be null
}

export interface FacultyTabContent {
  id: number;
  faculty_tab: FacultyTab[];
}

export interface Faculty {
  id: number;
  documentId: string;
  faculty_name: string;
  faculty_designation: string;
  faculty_interest_areas: FacultyInterestArea[];
  faculty_tab_content: FacultyTabContent;
  faculty_img: StrapiMedia;
  facultyslug: string;
  faculty_social_links: FacultySocialLinks[];
}

export interface FacultySocialLinks {
  id: number;
  listtext: string;
  listlink: string;
  listicon: ListIconImage;
}

export interface ListIconImage {
  id: number;
  documentId: string;
  url: string;
}

export interface SingleFacultyResponse {
  data: Faculty[];
  meta: {
    pagination: StrapiPagination;
  };
}
export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export async function getWordImageById(imgId: number): Promise<string> {
  if (!imgId) return "";

  try {
    const res = await fetch(
      `${KRMUWordUrl}/wp-json/wp/v2/media/${imgId}?_fields=guid`,
      {
        cache: "no-cache"
      },
    );

    if (!res.ok) return "";

    const json: BlogImageIdResponse = await res.json();

    return json?.guid?.rendered ?? "";
  } catch (error) {
    console.error("Word image fetch error:", error, imgId);
    return "";
  }
}

type BlogFaqItem = {
  question: string;
  answer: string;
};

export function createFaqSchema(faqs: BlogFaqItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\r?\n|\r/g, "").trim(),
      },
    })),
  };

  return JSON.stringify(schema);
}

type progFaqItem = {
  ques: string;
  ans: string;
};

export function createProgFaqSchema(faqs: progFaqItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.ques,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.ans.replace(/\r?\n|\r/g, "").trim(),
      },
    })),
  };

  return JSON.stringify(schema);
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}
export interface CourseProvider {
  name: string;
  url: string;
}

export interface CourseOffer {
  category: string;
}

export interface CourseSchedule {
  duration?: string;
  repeatFrequency?: string;
  repeatCount?: number;
  startDate?: string;
}

export interface CourseInstance {
  courseMode: string;
  location?: string;
  courseWorkload?: string;
  courseSchedule?: CourseSchedule;
}

export interface CourseSchemaData {
  name: string;
  description: string | undefined;
  provider: CourseProvider;
  offers: CourseOffer[];
  hasCourseInstance: CourseInstance[];
}

export function createCourseSchema(data: CourseSchemaData) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider.name,
      url: data.provider.url,
    },
    offers: data.offers.map((offer) => ({
      "@type": "Offer",
      category: offer.category,
    })),
    hasCourseInstance: data.hasCourseInstance.map((instance) => ({
      "@type": "CourseInstance",
      courseMode: instance.courseMode,
      location: instance.location,
      courseWorkload: instance.courseWorkload,
      courseSchedule: instance.courseSchedule
        ? {
          "@type": "Schedule",
          duration: instance.courseSchedule.duration,
          repeatFrequency: instance.courseSchedule.repeatFrequency,
          repeatCount: instance.courseSchedule.repeatCount,
          startDate: instance.courseSchedule.startDate,
        }
        : undefined,
    })),
  };

  return JSON.stringify(schema);
}

export function createBreadcrumbProgSchema(items: BreadcrumbItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

type ArticleSchemaProps = {
  url: string;
  headline: string;
  description: string;
  image: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
  datePublished: string;
  dateModified: string;
};

export function createArticleSchema(data: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
    headline: data.headline,
    description: data.description,
    image: data.image,
    author: {
      "@type": "Organization",
      name: data.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisherName,
      logo: {
        "@type": "ImageObject",
        url: data.publisherLogo,
      },
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
  };

  return JSON.stringify(schema);
}

type PersonSchemaProps = {
  name: string;
  url: string;
  image: string;
};

export function createPersonSchema(data: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    url: data.url,
    image: data.image,
  };

  return JSON.stringify(schema);
}

interface WebsiteSchemaProps {
  name: string,
  alternateName?: string;
  url: string,
  searchPath?: string,
}

export const createWebsiteSchema = ({ name, alternateName, url, searchPath }: WebsiteSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: name,
    alternateName: alternateName,
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url.replace(/\/$/, "")}${searchPath}{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
  return JSON.stringify(schema);
}

interface ContactPoint {
  telephone: string;
  contactType: string;
  contactOption?: string;
  areaServed?: string;
  availableLanguage?: string;
}

interface OrganizationSchemaProps {
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  sameAs?: string[];
  contactPoint?: ContactPoint;
}

export const createOrganizationSchema = ({
  name,
  alternateName,
  url,
  logo,
  contactPoint,
  sameAs = [],
}: OrganizationSchemaProps) => {

  const cleanUrl = (val: string) => val.replace(/\s+/g, "");

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    name,
    alternateName,
    url: cleanUrl(url),
    logo: cleanUrl(logo),
    contactPoint: contactPoint
      ? {
        "@type": "ContactPoint",
        telephone: contactPoint.telephone,
        contactType: contactPoint.contactType,
        contactOption: contactPoint.contactOption || "TollFree",
        areaServed: contactPoint.areaServed || "IN",
        availableLanguage: contactPoint.availableLanguage || "en",
      }
      : undefined,
    sameAs: sameAs.map(cleanUrl),
  };

  return JSON.stringify(schema, null, 2);
};

interface CollageOrUniversitySchemaProps {
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  sameAs: string[];
}

export const createCollageOrUniversitySchema = ({ name, alternateName, url, logo, sameAs = [] }: CollageOrUniversitySchemaProps) => {
  const cleanUrl = (val: string) => val.replace(/\s+/g, "");
  const schema = {
    "@context": "https://schema.org/",
    "@type": "CollageOrUniversity",
    name: name,
    alternateName: alternateName,
    url: url,
    logo: logo,
    sameAs: sameAs.map(cleanUrl)
  }
  return JSON.stringify(schema);
}


type TocFaq = {
  id: number;
  tocpoint: string;
  faq: {
    id: number;
    ques: string;
    ans: string;
  }[];
};

export function mapTocToFaqSchemaData(tocData: TocFaq[]) {
  return tocData.flatMap((section) =>
    section.faq.map((item) => ({
      question: item.ques.trim(),
      answer: item.ans.replace(/\r?\n|\r/g, "").trim(),
    })),
  );
}
