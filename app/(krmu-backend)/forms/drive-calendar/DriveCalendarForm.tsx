"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormBuilder } from "../../components/form-builder/FormBuilder";
import { driveCalendarFields } from "./fields";

import {
  CreateDriveCalendarDto,
  createDriveCalendarSchema,
} from "../../features/drive-calendar/schema";

import { useCreateDriveCalendar } from "../../features/drive-calendar/hooks/useCreateDriveCalendar";

export default function DriveCalendarForm() {
  const mutation = useCreateDriveCalendar();

  const form = useForm<CreateDriveCalendarDto>({
    resolver: zodResolver(createDriveCalendarSchema),

    defaultValues: {
      drive_id: "",
      company: "",
      float_date: "",
      drive_date: "",
      drive_type: "on_campus",
      schools_eligible: "",
      engagement_type: "placement",
      job_roles: "",
      jd_link: "",
      detailed_ctc_offered: "",
      ctc_offered_lpa: "",
      students_registered: "",
      students_appeared: "",
      selected: "",
      status: "draft",
    },
  });

  const onSubmit = (data: CreateDriveCalendarDto) => {
    console.log("Drive Calendar data:", data);
    mutation.mutate(data);
  };

  const onInvalid = (errors: any) => {
    console.log("❌ VALIDATION ERRORS:", errors);
  };

  return (
    <FormBuilder
      form={form}
      fields={driveCalendarFields}
      onSubmit={onSubmit}
      onInvalid={onInvalid}
    />
  );
}
