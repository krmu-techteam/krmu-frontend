"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { facultyApi } from "../api";
import { facultyKeys } from "../query-keys";

export function useDeleteFaculty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) => facultyApi.delete(id),

    onSuccess: (response, id) => {
      toast.success(response.data.message || "Faculty deleted successfully");

      // Remove the individual faculty from cache
      queryClient.removeQueries({
        queryKey: facultyKeys.detail(id),
      });

      // Refresh all faculty lists
      queryClient.invalidateQueries({
        queryKey: facultyKeys.lists(),
      });
    },

    onError: (error) => {
      console.error("Delete faculty error:", error);

      toast.error("Failed to delete faculty");
    },
  });
}
