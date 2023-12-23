import { Injectable } from "@nestjs/common";

import { HttpService } from "@nestjs/axios";
import { ipStackConfig } from "@/config/ipStack";
import { AxiosResponse } from "axios";

@Injectable()
export class IpStackService {
	constructor(private readonly httpService: HttpService) {}

	public async location(ip: string) {
		return this.httpService
			.axiosRef({
				url: `http://api.ipstack.com/${ip}`,
				params: {
					access_key: ipStackConfig.ACCESS_KEY,
					fields: ["country_name", "region_name", "city"].toString(),
					output: "json",
				},
			})
			.then(
				(
					data: AxiosResponse<{
						readonly country_name: string;
						readonly region_name: string;
						readonly city: string;
					}>
				) => {
					let locaion = "";
					for (const key in data.data) {
						locaion += data.data[key];
					}

					return locaion;
				}
			)
			.catch((error) => {
				console.log(error);
				return "";
			});
	}
}
