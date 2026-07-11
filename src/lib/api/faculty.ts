import { KRMUWordUrl } from "@/app/constant";
import { YoastHeadJson } from "../constants/yoastMeta";

export type SingleFacultyResponse = singleFaculty[];

export type singleFaculty = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media?: number;
  yoast_head_json: YoastHeadJson;
  acf: FacultyACF;
};

export type FacultyACF = {
  "staff-qualification": string; // quoted key
  staff_designation: string;
  schools: number[];
};

export async function getFacultyBySlug(slug: string = "") {
  const res = await fetch(
    `${KRMUWordUrl}/wp-json/wp/v2/faculty?slug=${slug}&_fields=content,slug,title,id,yoast_head_json,featured_media,acf`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Faculty");

  const json: SingleFacultyResponse = await res.json();
  return json;
}







