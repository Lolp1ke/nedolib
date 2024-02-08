import { Module } from "@nestjs/common";

import { AuthorController } from "./author.controller";
import { AuthorService } from "./author.service";

import { PrismaModule } from "@/modules/prisma/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [AuthorController],
	providers: [AuthorService],
})
export class AuthorModule {}
