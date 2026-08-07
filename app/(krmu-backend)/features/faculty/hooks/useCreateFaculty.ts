"use client";

import { useMutation } from "@tanstack/react-query";
import { facultyApi } from "../api";
import { CreateFacultyDto } from "../type";


export function useCreateFaculty() {
  return useMutation({
    mutationFn: (data: CreateFacultyDto | FormData) =>
      facultyApi.create(data),

  });
}