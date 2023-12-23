import { Module } from "@nestjs/common";

import { IpStackService } from "./ipStack.service";

import { HttpModule } from "@nestjs/axios";

@Module({
	imports: [HttpModule],
	providers: [IpStackService],
	exports: [IpStackService],
})
export class IpStackModule {}
