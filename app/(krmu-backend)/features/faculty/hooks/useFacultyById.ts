"use client";

import { useQuery } from "@tanstack/react-query";

import { facultyApi } from "../api";
import { facultyKeys } from "../query-keys";

export function useFacultyById(id: number | string) {
  return useQuery({
    queryKey: facultyKeys.detail(id),

    queryFn: async () => {
      const response = await facultyApi.find(id);

      return response.data;
    },

    enabled: Boolean(id),
  });
}
