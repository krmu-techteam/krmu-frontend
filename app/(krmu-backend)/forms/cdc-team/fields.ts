import { FormField } from "../../components/form-builder/types";

export const cdcTeamFields: FormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter team member name",
  },
  {
    name: "designation",
    label: "Designation",
    type: "text",
    placeholder: "Enter designation",
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: false,
  },
  {
    type: "image",
    name: "image",
    label: "CDC Team Image",
    accept: "image/*",
  },
  {
    type: "text",
    name: "sort_order",
    label: "Number",
    placeholder: "Enter Number",
    required: true,
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
