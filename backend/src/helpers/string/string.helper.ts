import { Injectable } from "@nestjs/common";
import { compareSync, hashSync } from "bcrypt";

@Injectable()
export class StringHelper {
	public normalizer(value: string): string {
		return value.toLowerCase().replace(/ /g, "");
	}

	public hash(value: string): string {
		return hashSync(value, 12);
	}

	public compare(value: string, hash: string): boolean {
		return compareSync(value, hash);
	}
}
