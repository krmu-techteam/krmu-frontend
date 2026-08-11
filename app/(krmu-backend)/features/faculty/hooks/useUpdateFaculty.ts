"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { facultyApi } from "../api";
import { facultyKeys } from "../query-keys";

import type { UpdateFacultyDto } from "../schema";

interface UpdateFacultyVariables {
  id: number | string;
  data: UpdateFacultyDto;
}

export function useUpdateFaculty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: UpdateFacultyVariables) =>
      facultyApi.patch(id, data),

    onSuccess: (response, variables) => {
      toast.success(
        response.data.message ||
          "Faculty updated successfully"
      );

      // Refresh the edited faculty
      queryClient.invalidateQueries({
        queryKey: facultyKeys.detail(
          variables.id
        ),
      });

      // Refresh faculty list
      queryClient.invalidateQueries({
        queryKey: facultyKeys.lists(),
      });
    },

    onError: (error) => {
      console.error(
        "Update faculty error:",
        error
      );

      toast.error(
        "Failed to update faculty"
      );
    },
  });
}