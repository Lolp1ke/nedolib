import "dotenv/config";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { type NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "@/app.module";
import { mainConfig } from "./config/main";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix("/api/v3");
	app.useGlobalPipes(new ValidationPipe());
	app.enableCors({
		origin: true,
	});

	await app.listen(mainConfig.BACKEND_PORT);
}

bootstrap().then(() => {
	console.log("Server is listening on port: ", mainConfig.BACKEND_PORT);
});
