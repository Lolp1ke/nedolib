import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	public async onModuleInit() {
		return this.$connect().then(() => {
			console.log("Prisma has been connected");
		});
	}

	public async onModuleDestroy() {
		return this.$disconnect().then(() => {
			console.log("Prisma has been disconected");
		});
	}
}
