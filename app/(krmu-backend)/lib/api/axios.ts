import axios from "axios";

export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: 'http://localhost:3001',
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response?.status) {
      case 400:
        console.error("Bad Request");
        break;

      case 404:
        console.error("Not Found");
        break;

      case 500:
        console.error("Internal Server Error");
        break;
    }

    return Promise.reject(error);
  }
);