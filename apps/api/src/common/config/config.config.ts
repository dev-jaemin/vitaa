import { ConfigModuleOptions } from '@nestjs/config';
import { createTypedConfig } from 'nestjs-typed-config';
import * as Joi from 'joi';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
};

export const { TypedConfigService, TypedConfigModule } = createTypedConfig({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRES: Joi.number().required(),
  JWT_REFRESH_TOKEN_EXPIRES: Joi.number().required(),
  DB_NAME: Joi.string().required(),
});

export type TypedConfigService = InstanceType<typeof TypedConfigService>;
