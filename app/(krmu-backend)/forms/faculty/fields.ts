import { FormField } from "../../components/form-builder/types";

export const facultyFields: FormField[] = [
  {
    type: "text",
    name: "name",
    label: "Full Name",
    placeholder: "Enter your name",
    required: true,
  },
  // {
  //   type: "image",
  //   name: "image",
  //   label: "Faculty Image",
  //   accept: "image/*",
  // },
  // {
  //   type: "text",
  //   name: "sort_order",
  //   label: "Number",
  //   placeholder: "Enter Number",
  //   required: true,
  // },
  {
    type: "text",
    name: "qualifications",
    label: "Staff Qualifications",
    placeholder: "Enter Qualifications",
    required: false,
  },
  {
    type: "text",
    name: "designation",
    label: "Staff Designation",
    placeholder: "Enter Designation",
    required: false,
  },
  {
    type: "text",
    name: "emails",
    label: "Email",
    placeholder: "Enter Email",
    required: false,
  },
  {
    type: "text",
    name: "linkedin_profiles",
    label: "Linkedin Profile",
    placeholder: "Enter Linkedin Profile",
    required: false,
  },
  {
    type: "text",
    name: "interest_areas",
    label: "Interest areas",
    placeholder: "Enter Interest Areas",
    required: false,
  },
  {
    type: "texteditor",
    name: "profile",
    label: "Profile",
    placeholder: "Enter Profile",
  },
  {
    type: "texteditor",
    name: "education",
    label: "Education",
    placeholder: "Enter Education",
  },
  {
    type: "texteditor",
    name: "experience",
    label: "Experience",
    placeholder: "Enter Experience",
  },
  {
    type: "texteditor",
    name: "research",
    label: "Research",
    placeholder: "Enter Research",
  },
  {
    type: "texteditor",
    name: "project_achievements",
    label: "Project Achievements",
    placeholder: "Enter Project Achievements",
  },
  {
    type: "texteditor",
    name: "conferences",
    label: "Conferences",
    placeholder: "Enter Conferences",
  },
  {
    type: "texteditor",
    name: "publications",
    label: "Publications",
    placeholder: "Enter Publications",
  },
  {
    type: "select",
    name: "status",
    label: "Status",
    placeholder: "Choose Status",
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
