"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { facultyApi } from "../api";
import { CreateFacultyDto } from "../schema";
import { toast } from "sonner";
import { facultyKeys } from "../query-keys";

export function useCreateFaculty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFacultyDto) => facultyApi.create(data),

    onSuccess: (response) => {
      (toast.success(response.data.message || "Faculty Create Successfully"),
        queryClient.invalidateQueries({
          queryKey: facultyKeys.all,
        }));
    },
    onError: (error) => {
      console.error("Create faculty error:", error);
      toast.error("Failed to create faculty");
    },
  });
}
