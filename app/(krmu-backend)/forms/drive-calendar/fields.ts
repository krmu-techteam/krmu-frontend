import { FormField } from "../../components/form-builder/types";

export const driveCalendarFields: FormField[] = [
  {
    name: "drive_id",
    label: "Drive ID",
    type: "text",
    placeholder: "Enter drive ID",
    required: true,
  },

  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Enter company name",
    required: true,
  },

  {
    name: "float_date",
    label: "Float Date",
    type: "date",
    required: false,
  },

  {
    name: "drive_date",
    label: "Drive Date",
    type: "date",
    required: false,
  },

  {
    name: "drive_type",
    label: "Drive Type",
    type: "select",
    placeholder: "Choose Drive Type",
    required: true,
    options: [
      {
        label: "On Campus",
        value: "on_campus",
      },
      {
        label: "Virtual",
        value: "virtual",
      },
    ],
  },

  {
    name: "schools_eligible",
    label: "Eligible Schools",
    type: "textarea",
    placeholder: "Enter eligible schools",
    required: false,
  },

  {
    name: "engagement_type",
    label: "Engagement Type",
    type: "select",
    placeholder: "Choose Engagement Type",
    required: true,
    options: [
      {
        label: "Internship",
        value: "internship",
      },
      {
        label: "Placement",
        value: "placement",
      },
      {
        label: "PPO",
        value: "ppo",
      },
      {
        label: "Internship + PPO",
        value: "internship_ppo",
      },
    ],
  },

  {
    name: "job_roles",
    label: "Job Roles",
    type: "textarea",
    placeholder: "Enter job roles",
    required: false,
  },

  {
    name: "jd_link",
    label: "JD Link",
    type: "text",
    placeholder: "Enter job description URL",
    required: false,
  },

  {
    name: "detailed_ctc_offered",
    label: "Detailed CTC Offered",
    type: "textarea",
    placeholder: "Enter detailed CTC information",
    required: false,
  },

  {
    name: "ctc_offered_lpa",
    label: "CTC Offered (LPA)",
    type: "text",
    placeholder: "Enter CTC in LPA",
    required: false,
  },

  {
    name: "students_registered",
    label: "Students Registered",
    type: "text",
    placeholder: "Enter number of registered students",
    required: false,
  },

  {
    name: "students_appeared",
    label: "Students Appeared",
    type: "text",
    placeholder: "Enter number of students appeared",
    required: false,
  },

  {
    name: "selected",
    label: "Students Selected",
    type: "text",
    placeholder: "Enter number of selected students",
    required: false,
  },

  {
    name: "status",
    label: "Status",
    type: "select",
    placeholder: "Choose Status",
    required: true,
    options: [
      {
        label: "Published",
        value: "published",
      },
      {
        label: "Draft",
        value: "draft",
      },
    ],
  },
];
