import { Command, CommandRunner, Option } from 'nest-commander';
import { Foo } from './foo/foo.service';

@Command({ name: 'simple', description: 'A simple command' })
export class SimpleCommand extends CommandRunner {
  constructor(private readonly foo: Foo) {
    super();
  }

  async run(
    passedParam: string[],
    options?,
  ): Promise<void> {
    if (options.error) {
      this.foo.willThrowError();
    }

    const result = this.foo.bar();
    console.log(result);
  }

  @Option({
    flags: '-e, --error',
    description: 'Should it throw uncaught exception?',
  })
  parseSellerCode(val: string): string {
    return val
  }
}
