import { Injectable } from "@nestjs/common";

@Injectable()
export class Foo
{
  bar() {
    throw new Error('Some error');
  }
}
