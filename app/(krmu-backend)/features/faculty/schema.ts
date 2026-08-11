import { z } from "zod";

export const createFacultySchema = z.object({
  // Basic Information
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),

  // sort_order: z.string().min(1, "Number is required"),

  qualifications: z
    .string()
    .max(500, "Qualifications must not exceed 500 characters")
    .optional()
    .or(z.literal("")),

  designation: z
    .string()
    .min(2, "Designation is required")
    .max(150, "Designation must not exceed 150 characters"),

  // Contact Information
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

  linkedin_profiles: z.string().optional().or(z.literal("")),

  // Professional Information
  interest_areas: z.string().optional().or(z.literal("")),

  // Faculty Profile
  profile: z
    .string()
    .max(5000, "Profile must not exceed 5000 characters")
    .optional()
    .or(z.literal("")),

  education: z
    .string()
    .max(5000, "Education must not exceed 5000 characters")
    .optional()
    .or(z.literal("")),

  experience: z
    .string()
    .max(5000, "Experience must not exceed 5000 characters")
    .optional()
    .or(z.literal("")),

  research: z
    .string()
    .max(5000, "Research must not exceed 5000 characters")
    .optional()
    .or(z.literal("")),

  project_achievements: z
    .string()
    .max(5000, "Project achievements must not exceed 5000 characters")
    .optional()
    .or(z.literal("")),

  conferences: z
    .string()
    .max(5000, "Conferences must not exceed 5000 characters")
    .optional()
    .or(z.literal("")),

  publications: z
    .string()
    .max(10000, "Publications must not exceed 10000 characters")
    .optional()
    .or(z.literal("")),

  // Image
  // image: z.instanceof(File).nullable().optional(),
  // status: z.enum(["published", "draft"]).optional(),
  status: z.enum(["published", "draft"]).optional(),
});

export type CreateFacultyDto = z.infer<typeof createFacultySchema>;

export const updateFacultySchema = createFacultySchema.partial();

export type UpdateFacultyDto = z.infer<typeof updateFacultySchema>;
