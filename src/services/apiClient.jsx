import axios from "axios";

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: "https://localhost:7120/api/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
