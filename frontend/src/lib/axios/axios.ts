import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { MainConfig } from "@/config/main";

export async function Axios<TYPE>(params: AxiosRequestConfig) {
	return axios({
		baseURL: MainConfig.BACKEND_ENTRY_POINT,
		...params,
	}).then((response: AxiosResponse<TYPE>) => response);
}
