export interface BaseField {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface TextField extends BaseField {
  type: "text";
}

export type FormField = TextField;
