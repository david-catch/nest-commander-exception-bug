import { Injectable, OnApplicationShutdown } from "@nestjs/common";

@Injectable()
export class Foo implements OnApplicationShutdown {
  constructor() {
    // Establish connection to some service
  }

  bar() {
    return 123;
  }

  willThrowError() {
    throw new Error('Some error');
  }

  onApplicationShutdown(signal?: string) {
    console.log('>>>> Application is shutting down');
    // Close connection to the service
  }
}
