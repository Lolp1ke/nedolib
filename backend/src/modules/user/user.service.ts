import {
	ConflictException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { StringHelper } from "@/helpers/string/string.helper";
import { PrismaService } from "@/modules/prisma/prisma.service";

import type { CreateUserDto, ValidateUserDto } from "./dto";

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly stringHelper: StringHelper
	) {}

	public async create(dto: CreateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);
		dto.email = this.stringHelper.normalizer(dto.email);

		const exist = await this.prismaService.user.findFirst({
			where: {
				OR: [{ email: dto.email }, { username: dto.username }],
			},
		});
		if (exist)
			throw new ConflictException("User already exist", "Try to use another username/email");

		dto.password = this.stringHelper.hash(dto.password);
		return this.prismaService.user.create({
			data: {
				username: dto.username,
				email: dto.email,
				hash: dto.password,
				profile: {
					create: {
						name: dto.username,
					},
				},
			},
		});
	}

	public async validate(dto: ValidateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);

		const user = await this.prismaService.user.findUnique({
			where: {
				username: dto.username,
			},
		});
		if (!user) throw new NotFoundException("User has not been found", "Double check your username");

		const comparehash: boolean = this.stringHelper.compare(dto.password, user.hash);
		if (!comparehash) throw new UnauthorizedException("Unauthorized access", "Incorrect password");

		return user;
	}
}
