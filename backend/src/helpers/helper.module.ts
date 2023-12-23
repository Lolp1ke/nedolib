import { Module } from "@nestjs/common";

import { StringService } from "./string/string.service";

@Module({
	providers: [StringService],
	exports: [StringService],
})
export class HelperModule {}
