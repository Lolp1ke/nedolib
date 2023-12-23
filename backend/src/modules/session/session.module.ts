import { Module } from "@nestjs/common";

import { SessionService } from "./session.service";

import { PrismaModule } from "@/modules/prisma/prisma.module";
import { IpStackModule } from "@/api/ipStack/ipStack.module";

@Module({
	imports: [PrismaModule, IpStackModule],
	providers: [SessionService],
	exports: [SessionService],
})
export class SessionModule {}
