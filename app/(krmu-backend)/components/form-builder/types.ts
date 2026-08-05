export interface BaseFieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface SelectOption {
  label: string;
  value: string;
}
export interface TextFieldConfig extends BaseFieldConfig {
  type: "text";
}

export interface TextareaFieldConfig extends BaseFieldConfig {
  type: "textarea";
}
export interface TinyMCEFieldConfig extends BaseFieldConfig {
  type: "tinymce";
}
export interface ImageFieldConfig extends BaseFieldConfig {
  type: "image";
  accept?: string; // image/*, .png,.jpg, etc.
  multiple?: boolean;
}

export interface SelectFieldConfig extends BaseFieldConfig {
  type: "select";
  options: SelectOption[];
}

export type FormField =
  | TextFieldConfig
  | TextareaFieldConfig
  | ImageFieldConfig
  | SelectFieldConfig;
// | TinyMCEFieldConfig;
