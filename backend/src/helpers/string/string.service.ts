import { Injectable } from "@nestjs/common";
import { compareSync, hashSync } from "bcrypt";

@Injectable()
export class StringService {
	public normalizer(value: string): string {
		return value.toLowerCase().replace(/ /g, "");
	}

	public hash(value: string, salt: string): string {
		return hashSync(`${value}${salt}`, 18);
	}

	public compare(hash: string, salt: string, encrypt: string): boolean {
		return compareSync(`${hash}${salt}`, encrypt);
	}
}
