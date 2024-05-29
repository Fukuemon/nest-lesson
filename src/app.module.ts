import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsControllerTsController } from './controller/cats.controller.ts/cats.controller.ts.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsControllerTsController],
  providers: [AppService],
})
export class AppModule {}
