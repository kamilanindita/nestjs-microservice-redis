import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: 'BOOK_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
            host: configService.get('REDIS_HOST'),
            port: configService.get<number>('REDIS_PORT'),
            password: configService.get('REDIS_PASSWORD'),
          },
        }),
    },
  ],
  controllers: [BookController]
})
export class BookModule {}
