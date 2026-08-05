import { FormField } from "../../components/form-builder/types";

export const facultyFields: FormField[] = [
  {
    type: "text",
    name: "name",
    label: "Full Name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    type: "image",
    name: "image",
    label: "Faculty Image",
    accept: "image/*",
  },
  // {
  //   type: "text",
  //   name: "linkedin_profiles",
  //   label: "LinkedIn Profiles",
  //   placeholder: "Enter your LinkedIn profiles",
  // },
  // {
  //   type: "text",
  //   name: "interest_areas",
  //   label: "Interest Areas",
  //   placeholder: "Enter your interest areas",
  // },
  // {
  //   type: "textarea",
  //   name: "description",
  //   label: "Description",
  //   placeholder: "Enter a description",
  // },
  // {
  //   type: "text",
  //   name: "qualifications",
  //   label: "Qualifications",
  //   placeholder: "Enter your qualifications",
  // },
  // {
  //   type: "text",
  //   name: "designation",
  //   label: "Designation",
  //   placeholder: "Enter your designation",
  // },
  // {
  //   type: "select",
  //   name: "department",
  //   label: "Department",
  //   placeholder: "Choose Department",
  //   options: [
  //     {
  //       label: "Engineering",
  //       value: "engineering",
  //     },
  //     {
  //       label: "Management",
  //       value: "management",
  //     },
  //     {
  //       label: "Law",
  //       value: "law",
  //     },
  //   ],
  // },
];
