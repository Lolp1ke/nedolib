import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { MainConfig } from "@/config/main";

interface Error {
	message: string;
	conflict: string;
	statusCode: number;
}

export async function Axios<TYPE>(params: AxiosRequestConfig) {
	return axios({
		baseURL: MainConfig.BACKEND_ENTRY_POINT,
		headers: {
			"Content-Type": "application/json",
		},
		...params,
	})
		.then((response: AxiosResponse<TYPE>) => response)
		.catch((error: AxiosError<Error>) => {
			throw new Error(error.response?.data.message ?? "");
		});
}
