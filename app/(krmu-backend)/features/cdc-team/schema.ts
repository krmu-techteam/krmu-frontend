import { z } from "zod";

export const createCdcTeamSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(150, "Name must not exceed 150 characters"),

  designation: z
    .string()
    .min(2, "Designation is required")
    .max(200, "Designation must not exceed 200 characters"),

  email: z.string().email("Invalid email address").optional().or(z.literal("")),

  image: z.instanceof(File).nullable().optional(),

  sort_order: z
    .number()
    .int()
    .min(0, "Sort order cannot be negative")
    .optional(),
});

export type CreateCdcTeamDto = z.infer<typeof createCdcTeamSchema>;

export const updateCdcTeamSchema = createCdcTeamSchema.partial();

export type UpdateCdcTeamDto = z.infer<typeof updateCdcTeamSchema>;
