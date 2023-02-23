import { Injectable, OnApplicationShutdown } from "@nestjs/common";

@Injectable()
export class Foo implements OnApplicationShutdown {
  private interval: ReturnType<typeof setInterval>;

  constructor() {
    // Establish connection to some service or some long-running job
    // To illustrate this, we'll just use an interval
    this.interval = setInterval(() => {
      console.log('Still running ...')
    }, 1000);
  }

  bar() {
    return 123;
  }

  willThrowError() {
    throw new Error('Some error');
  }

  onApplicationShutdown(signal?: string) {
    console.log('>>>> Application is shutting down');

    // Should clean up connection or long-running job
    // In this example, we'll just need to clear up the interval
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }
}
