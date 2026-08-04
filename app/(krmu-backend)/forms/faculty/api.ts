import axios from "axios";

export async function createFaculty(data: { name: string }) {
  const response = await axios.post("http://localhost:3001/faculty", data);

  return response.data;
}
