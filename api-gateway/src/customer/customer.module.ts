import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: 'CUSTOMER_SERVICE',
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
  controllers: [CustomerController],
})
export class CustomerModule {}
