// src/features/faculty/schema.ts

import { z } from "zod";

export const createFacultySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),

  designation: z.string().min(2, "Designation is required").max(150),

  qualifications: z.string().max(500).optional().or(z.literal("")),

  // description: z.string().optional().or(z.literal("")),

  school_category_id: z.number().int().positive().optional(),

  image: z.instanceof(File).nullable().optional(),
});

export type CreateFacultyDto = z.infer<typeof createFacultySchema>;
export const updateFacultySchema = createFacultySchema.partial();

export type UpdateFacultyDto = z.infer<typeof updateFacultySchema>;
