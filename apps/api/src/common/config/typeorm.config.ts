import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypedConfigModule, TypedConfigService } from './config.config';

export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [TypedConfigModule],
  inject: [TypedConfigService],
  useFactory: (configService: TypedConfigService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy(),
  }),
};
