"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { cdcTeamKeys } from "../query-keys";
import { cdcTeamApi } from "../api";
import { CreateCdcTeamDto } from "../schema";

export function useCreateCdcTeam() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCdcTeamDto) => cdcTeamApi.create(data),

    onSuccess: (response) => {
      (toast.success(response.data.message || "CDC Team Create Successfully"),
        queryClient.invalidateQueries({
          queryKey: cdcTeamKeys.all,
        }));
    },
    onError: (error) => {
      console.error("Create faculty error:", error);
      toast.error("Failed to create faculty");
    },
  });
}
