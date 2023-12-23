import { Injectable } from "@nestjs/common";

import { UserService } from "@/modules/user/user.service";
import { SessionService } from "@/modules/session/session.service";

import type { CreateUserDto, ValidateUserDto } from "@/modules/user/dto";
import type { DeleteSessionDto } from "@/modules/session/dto";

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly sessionService: SessionService
	) {}

	public async localSignUp(dto: CreateUserDto, ip: string, device: string) {
		const user = await this.userService.create(dto);

		return this.sessionService
			.create({
				userId: user.id,
				ip,
				device,
			})
			.then((data) => {
				return data.id;
			});
	}

	public async localSignIn(dto: ValidateUserDto, ip: string, device: string) {
		const user = await this.userService.validate(dto);

		return this.sessionService
			.create({
				userId: user.id,
				ip,
				device,
			})
			.then((data) => {
				return data.id;
			});
	}

	public async signOut(dto: DeleteSessionDto) {
		return this.sessionService.delete(dto);
	}
}
