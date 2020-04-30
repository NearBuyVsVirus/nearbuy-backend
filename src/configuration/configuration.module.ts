import { Module } from '@nestjs/common';

import { ConfigurationService } from './configuration.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        DATABASE_SSL: Joi.bool().default(false),

        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME_SECONDS: Joi.number().required(),

        ADMIN_SECRET: Joi.string().required(),

        API_PORT: Joi.number().required(),
        API_ROOT_URL: Joi.string().required()
      }),
    }),
  ],
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule { }
