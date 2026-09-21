export type DriveType = "on_campus" | "virtual";

export type EngagementType = "internship" | "placement" | "ppo";

export type DriveStatus = "published" | "draft";

export interface DriveCalendar {
  id: number;

  drive_id: string;
  company: string;

  float_date: string | null;
  drive_date: string | null;

  drive_type: DriveType;
  schools_eligible: string | null;

  engagement_type: EngagementType;
  job_roles: string | null;

  jd_link: string | null;

  detailed_ctc_offered: string | null;
  ctc_offered_lpa: number | null;

  students_registered: number;
  students_appeared: number;
  selected: number;

  status: DriveStatus;

  created_at: string;
  updated_at: string;
}

export interface DriveCalendarResponse {
  success: boolean;
  message: string;
  data: DriveCalendar;
}
