import type { AxiosInstance } from "axios";
import axios from "axios";
const apiClient: AxiosInstance = axios.create({
	baseURL:  "http://localhost:8000",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default apiClient;