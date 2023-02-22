import { Module } from "@nestjs/common";
import { Foo } from "./foo.service";

@Module({
  providers: [Foo],
  exports: [Foo],
})
export class FooModule {}
