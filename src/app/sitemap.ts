import {
  getAllBlogs,
  getAllFaculties,
  getAllNewsEvents,
  getAllPhotoGalleries,
  getAllSchoolPhdProgrammes,
  getAllSchoolProgrammes,
  getAllSchools,
} from "@/lib/api/siteseo";
import type { MetadataRoute } from "next";
import { origUrl } from "./constant";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = origUrl;

  const blogs = await getAllBlogs();
  const newsevents = await getAllNewsEvents();
  const faculties = await getAllFaculties();
  const schools = await getAllSchools();
  const programmes = await getAllSchoolProgrammes();
  const phdProgrammes = await getAllSchoolPhdProgrammes();
  const photoGalleries = await getAllPhotoGalleries();

  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.modified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const newsEventsUrls: MetadataRoute.Sitemap = newsevents.map((newsevent) => ({
    url: `${baseUrl}/events-and-news/${newsevent.slug}`,
    lastModified: new Date(newsevent.modified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const facultiesUrls: MetadataRoute.Sitemap = faculties.map((faculty) => ({
    url: `${baseUrl}/faculty/${faculty.slug}`,
    lastModified: new Date(faculty.modified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const schoolUrls: MetadataRoute.Sitemap = schools.map((school) => ({
    url: `${baseUrl}/${school.urlslug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const programmeUrls: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${baseUrl}/programs/${p.programmeslug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const phdProgrammeUrls: MetadataRoute.Sitemap = phdProgrammes.map((p) => ({
    url: `${baseUrl}/programs/${p.phdslug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const photoGalleriesUrls: MetadataRoute.Sitemap = photoGalleries.map((p) => ({
    url: `${baseUrl}/photo-gallery/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}/course/best-colleges-for-btech-cse`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/best-colleges-in-delhi-ncr-for-btech`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/best-university-for-btech-in-india`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/btech-colleges-gurgaon`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/btech-colleges-haryana`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/btech-cse-admission`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/btech-cse-course`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/btech-cse-fees`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/course/engineering-colleges-delhi-ncr`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programmes`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about-krmu/the-university`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/leadership`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/awards-and-achievements`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/accreditations-recognition-and-approvals`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/membership-and-rankings`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mandatory-disclosures`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/advisory-board`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academic-leadership`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/krmu-committee`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coc`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/registrar-office`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-department`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/overview`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-krmu/life-at-krmu`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/library`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/happenings/news-and-events`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-krmu/community-connect`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-krmu/youth-red-cross-committee`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/happenings/magzine-reflections`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/happenings/gallery-image`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/conference`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/krmu-campus-facilities`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hostel`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clubs-and-societies`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sports-facilities`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/krmu-times`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/student-welfare`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/happenings/print-coverage`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/video-gallery`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/campus-life/virtual-tour`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/centre-for-sustainable-development-goals`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/research-overview`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/phd-regulations`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pdfs/5R-Ph-D-Admission-advertisement-Details-E-2025-26.pdf`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/research-and-innovation`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/research-centre`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/placement/overview`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/the-placements-process`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/placement/our-recruiter`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career-development-centre`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/placement-highlights`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admissions`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kree`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admission/phd-admission`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fee-structure`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admission/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/payment-procedure`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/financial-assistance`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/admission/scholarship`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/campus-life/virtual-tour`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/campus-tour`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/notice`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dean-honor-list`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-krmu/industry-connect`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-krmu/international-collaboration`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/examination`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-krmu/pedagogy`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academic-affairs`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cif`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iqac`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/schools`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogUrls,
    ...schoolUrls,
    ...programmeUrls,
    ...photoGalleriesUrls,
    ...newsEventsUrls,
    ...facultiesUrls,
    ...phdProgrammeUrls,
  ];
}
