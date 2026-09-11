export interface DriveCalendar {
  id: number;
  drive_id: string;
  company: string;
  float_date: string | null;
  drive_date: string | null;
  drive_type: string;
  schools_eligible: string | null;
  engagement_type: string;
  job_roles: string | null;
  jd_link: string | null;
  detailed_ctc_offered: string | null;
  ctc_offered_lpa: string | null;
  students_registered: number;
  students_appeared: number;
  selected: number;
  sort_order: number;
  status: "published" | "draft";
  deleted_at: string | null;
}

export interface DriveCalendarResponse {
  data: DriveCalendar[];
}
