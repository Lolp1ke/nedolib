import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { type Request } from "express";

import { AuthService } from "./auth.service";

import type { CreateUserDto, ValidateUserDto } from "@/modules/user/dto";
import type { DeleteSessionDto } from "@/modules/session/dto";

@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("/local/sign-up")
	@HttpCode(HttpStatus.CREATED)
	public async localSignUp(@Body() dto: CreateUserDto, @Req() req: Request) {
		return this.authService.localSignUp(dto, req.ip, req.headers["user-agent"]);
	}

	@Post("/local/sign-in")
	@HttpCode(HttpStatus.OK)
	public async localSignIn(@Body() dto: ValidateUserDto, @Req() req: Request) {
		return this.authService.localSignIn(dto, req.ip, req.headers["user-agent"]);
	}

	@Post("/sign-out")
	@HttpCode(HttpStatus.OK)
	public async signOut(@Body() dto: DeleteSessionDto) {
		return this.authService.signOut(dto);
	}
}
