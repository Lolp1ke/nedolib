import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { TokenController } from "./token.controller";
import { TokenService } from "./token.service";

import { PrismaModule } from "@/modules/prisma/prisma.module";

import { mainConfig } from "@/config/main";

@Module({
	imports: [
		PrismaModule,
		JwtModule.register({
			secret: mainConfig.JWT_SECRET,
			signOptions: {
				expiresIn: "3600s",
				algorithm: "HS256",
			},
		}),
	],
	controllers: [TokenController],
	providers: [TokenService],
})
export class TokenModule {}
