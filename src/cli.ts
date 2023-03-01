import { CommandFactory } from 'nest-commander'
import { AppModule } from './app.module'

async function bootstrap() {
  await CommandFactory.run(AppModule, {
    logger: false,
    serviceErrorHandler: (error) => {
      console.log('My error handler', error)
    }
  })
}

bootstrap()
