import { useQuery } from "@tanstack/react-query";

import type { FacultyQueryParams } from "../type";
import { facultyKeys } from "../query-keys";
import { facultyApi } from "../api";

export function useFaculty(
  params: FacultyQueryParams = {}
) {
  return useQuery({
    queryKey: facultyKeys.list(params),

    queryFn: async () => {
      const response = await facultyApi.findAll(params);

      return response.data;
    },

    placeholderData: (previousData) => previousData,
  });
}