import { z } from "zod";

export const createDriveCalendarSchema = z.object({
  drive_id: z
    .string()
    .min(1, "Drive ID is required")
    .max(50, "Drive ID must not exceed 50 characters"),

  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(255, "Company name must not exceed 255 characters"),

  float_date: z.string().optional().or(z.literal("")),

  drive_date: z.string().optional().or(z.literal("")),

  drive_type: z.enum(["on_campus", "virtual"], {
    message: "Please select a drive type",
  }),

  schools_eligible: z.string().optional().or(z.literal("")),

  engagement_type: z.enum(
    ["internship", "placement", "ppo", "internship_ppo"],
    {
      message: "Please select an engagement type",
    },
  ),

  job_roles: z.string().optional().or(z.literal("")),

  jd_link: z.string().url("Invalid JD link").optional().or(z.literal("")),

  detailed_ctc_offered: z.string().optional().or(z.literal("")),

  ctc_offered_lpa: z.string().optional().or(z.literal("")),

  students_registered: z
    .string()
    .regex(/^\d+$/, "Students registered must be a non-negative integer")
    .optional(),

  students_appeared: z
    .string()
    .regex(/^\d+$/, "Students appeared must be a non-negative integer")
    .optional(),

  selected: z
    .string()
    .regex(/^\d+$/, "Selected students must be a non-negative integer")
    .or(z.literal(""))
    .optional(),

  status: z.enum(["published", "draft"]).optional(),
});

export type CreateDriveCalendarDto = z.infer<typeof createDriveCalendarSchema>;

export const updateDriveCalendarSchema = createDriveCalendarSchema.partial();

export type UpdateDriveCalendarDto = z.infer<typeof updateDriveCalendarSchema>;
