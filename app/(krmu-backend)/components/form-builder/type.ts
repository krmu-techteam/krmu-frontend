export type FieldType = "text";

export interface BaseField {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface TextField extends BaseField {
  type: FieldType;
}

export type FormField = TextField;
