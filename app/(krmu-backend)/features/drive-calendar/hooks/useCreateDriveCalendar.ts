"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { CreateDriveCalendarDto } from "../schema";
import { driveCalendarAPI } from "../api";
import { driveCalendarKeys } from "../query-keys";

export function useCreateDriveCalendar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateDriveCalendarDto) => driveCalendarAPI.create(data),

    onSuccess: (response) => {
      (toast.success(response.data.message || "CDC Team Create Successfully"),
        queryClient.invalidateQueries({
          queryKey: driveCalendarKeys.all, 
        })); 
    },
    onError: (error) => {
      console.error("Create faculty error:", error);
      toast.error("Failed to create faculty");
    },
  });
}
