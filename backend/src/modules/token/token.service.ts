import { Injectable } from "@nestjs/common";

import { PrismaService } from "@/modules/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

import type { CreateTokenDto } from "./dto";

@Injectable()
export class TokenService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly jwtService: JwtService
	) {}

	public async create(dto: CreateTokenDto) {
		return this.prismaService.token.create({
			data: {
				session: {
					connect: {
						id: dto.sessionId,
					},
				},
				refreshToken: await this.jwtService.signAsync({}),
			},
		});
	}
}
