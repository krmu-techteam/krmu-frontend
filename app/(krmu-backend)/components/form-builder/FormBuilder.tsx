"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm } from "react-hook-form";

import { FieldConfig } from "./types";

interface FormBuilderProps {
  fields: FieldConfig[];
  schema: z.ZodObject<z.ZodRawShape>;
  defaultValues: DefaultValues<Record<string, any>>;
  onSubmit: (data: Record<string, any>) => void;
}

export function FormBuilder({
  fields,
  schema,
  defaultValues,
  onSubmit,
}: FormBuilderProps) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return <div>Form Builder</div>;
}