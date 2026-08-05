import { SelectField } from "./fields/SelectField";
import { TextareaField } from "./fields/TextareaField";
import { TextField } from "./fields/TextField";

export const fieldRegistry = {
  text: TextField,
  textarea: TextareaField,
  select: SelectField,
} as const;
