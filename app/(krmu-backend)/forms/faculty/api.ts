import axios from "axios";
import { FacultyForm } from "./schema";

export async function createFaculty(data: FacultyForm | FormData) {
  const response = await axios.post("http://localhost:3001/faculty", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
