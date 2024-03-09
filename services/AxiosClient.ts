import type { AxiosInstance } from "axios";
import axios from "axios";
const apiClient: AxiosInstance = axios.create({
	baseURL:  process.env.NEXT_BACKEND_URL,
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default apiClient;