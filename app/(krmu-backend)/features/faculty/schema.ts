// src/features/faculty/schema.ts

import { z } from "zod";

export const createFacultySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  qualifications: z.string().max(500).optional().or(z.literal("")),
  designation: z.string().min(2, "Designation is required").max(150),
  emails: z
    .string()
    .min(1, "Email is required")
    .refine(
      (value) =>
        value
          .split(",")
          .map((email) => email.trim())
          .filter(Boolean)
          .every((email) => z.string().email().safeParse(email).success),
      "Invalid email address",
    ),

  // // description: z.string().optional().or(z.literal("")),

  // school_category_id: z.number().int().positive().optional(),

  // image: z.instanceof(File).nullable().optional(),
});

export type CreateFacultyDto = z.infer<typeof createFacultySchema>;
export const updateFacultySchema = createFacultySchema.partial();

export type UpdateFacultyDto = z.infer<typeof updateFacultySchema>;
