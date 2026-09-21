import { z } from "zod";

export const facultySchema = z.object({
  name: z.string().trim().min(3, "Faculty name is required").max(255),
  // school: z.string().trim().min(1, "School is required").max(255),
  school_category_id: z.number().positive("School is required").optional(),
  image: z.instanceof(File).optional().nullable(),
  // slug: z
  //   .string()
  //   .trim()
  //   .min(3, "Slug is required")
  //   .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug"),
});

export type FacultyForm = z.infer<typeof facultySchema>;
