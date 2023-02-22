import { Module } from '@nestjs/common';
import { SimpleCommand } from './simple.command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [FooModule],
  controllers: [AppController],
  providers: [AppService, SimpleCommand],
})
export class AppModule {}
