import type { AxiosInstance } from "axios";
import axios from "axios";
const apiAuth: AxiosInstance = axios.create({
	baseURL:  process.env.NEXT_AUTH_URL,
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default apiAuth;