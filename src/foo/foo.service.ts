import { Injectable, OnApplicationShutdown } from "@nestjs/common";

@Injectable()
export class Foo implements OnApplicationShutdown {
  bar() {
    return 123;
  }

  willThrowError() {
    throw new Error('Some error');
  }

  onApplicationShutdown(signal?: string) {
    console.log('>>>> Application is shutting down')
  }
}
