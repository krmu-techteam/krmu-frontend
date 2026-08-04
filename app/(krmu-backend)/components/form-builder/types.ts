export type FieldType = "text";

export interface BaseFieldConfig {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface TextFieldConfig extends BaseFieldConfig {
  type: "text";
}

export type FieldConfig = TextFieldConfig;
