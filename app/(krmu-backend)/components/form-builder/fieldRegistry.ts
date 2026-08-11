  import { ImageField } from "./fields/ImageField";
  import { SelectField } from "./fields/SelectField";
  import { TextareaField } from "./fields/TextareaField";
  import { TextEditorField } from "./fields/TextEditorField";
  import { TextField } from "./fields/TextField";

  export const fieldRegistry = {
    text: TextField,
    textarea: TextareaField,
    select: SelectField,
    image: ImageField,
    texteditor: TextEditorField,
  } as const;
