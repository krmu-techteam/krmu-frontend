import axios from "axios";

export async function createFaculty(data: { name: string }) {
    console.log('Creating faculty with data:', data);
  const response = await axios.post("http://localhost:3001/faculty", data);

  return response.data;
}
