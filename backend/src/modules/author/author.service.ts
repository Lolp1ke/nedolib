import { Injectable } from "@nestjs/common";

import { PrismaService } from "@/modules/prisma/prisma.service";

import type { CreateAuthorDto, DeleteAuthorDto } from "./dto";


@Injectable()
export class AuthorService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateAuthorDto) {
		return this.prismaService.author.create({
			data: dto,
		});
	}

	public async delete(dto: DeleteAuthorDto) {
		return this.prismaService.author.delete({
			where: {
				id: dto.authorId,
			}
		})
	}

	public async get() {}


}
