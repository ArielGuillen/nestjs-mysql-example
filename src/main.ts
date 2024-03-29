import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "@/app.module";
import { Config } from "@/config/";

async function bootstrap() {
  const port = Config.port;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");

  await app.listen(port);
  Logger.log(`Server started running on port: ${port}`, "Bootstrap");
}
bootstrap();
