import { z } from "zod";

export const facultySchema = z.object({
  name: z.string().trim().min(3, "Faculty name is required").max(255),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug"),
});

export type FacultyFormValues = z.infer<typeof facultySchema>;
