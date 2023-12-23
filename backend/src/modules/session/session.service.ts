import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateSessionDto, DeleteSessionDto, ValidateSessionDto } from "./dto";
import { IpStackService } from "@/api/ipStack/ipStack.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SessionService {
	private updateExpirationDate: Date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);

	constructor(
		private readonly prismaService: PrismaService,
		private readonly ipStackService: IpStackService
	) {}

	public async create(dto: CreateSessionDto) {
		dto.ip = dto.ip.replace(/[^\d.]/gm, "");
		dto.location = await this.ipStackService.location(dto.ip);

		return this.prismaService.session.create({
			data: {
				user: {
					connect: {
						id: dto.userId,
					},
				},

				ip: dto.ip,
				location: dto.location,
				device: dto.device,

				expirationDate: this.updateExpirationDate,
			},
		});
	}

	public async validate(dto: ValidateSessionDto) {
		const session = await this.prismaService.session.findUnique({
			where: {
				id: dto.sessionId,
			},
		});

		if (dto.device != session.device) {
			this.delete({ sessionId: dto.sessionId }).then(() => {
				throw new UnauthorizedException("Unauthorized access", "Devices are not matching");
			});
		}

		return session;
	}

	public async delete(dto: DeleteSessionDto) {
		return this.prismaService.session.delete({
			where: {
				id: dto.sessionId,
			},
		});
	}
}
