import { NestFactory } from "@nestjs/core";
import { type NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "@/app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix("/api/v3");
	app.enableCors({
		origin: true,
	});
	await app.listen(3000);
}
bootstrap().then(() => {
	console.log("Server is listening on port: ");
});
