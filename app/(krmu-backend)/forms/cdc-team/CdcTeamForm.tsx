"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCreateCdcTeam } from "../../features/cdc-team/hooks/useCreateCdcTeam";

import {
  CreateCdcTeamDto,
  createCdcTeamSchema,
} from "../../features/cdc-team/schema";

import { FormBuilder } from "../../components/form-builder/FormBuilder";
import { cdcTeamFields } from "./fields";

export default function CdcTeamForm() {
  const mutation = useCreateCdcTeam();

  const form = useForm<CreateCdcTeamDto>({
    resolver: zodResolver(createCdcTeamSchema),

    defaultValues: {
      name: "",
      designation: "",
      email: "",
      // image: "",
    },
  });

  // const onSubmit = (data: CreateCdcTeamDto) => {
  //   console.log("CDC Team data:", data);

  //   // mutation.mutate(data);
  // };
  const onSubmit = (data: CreateCdcTeamDto) => {
    console.log("✅ SUBMIT SUCCESS:", data);
  };

  const onInvalid = (errors: any) => {
    console.log("❌ VALIDATION ERRORS:", errors);
  };

  return <FormBuilder form={form} fields={cdcTeamFields} onSubmit={onSubmit} onInvalid={onInvalid} />;
}
