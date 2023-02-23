import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { ConfigType } from '@nestjs/config';
import { SqsOptions } from '@ssut/nestjs-sqs/dist/sqs.types';
import { AwsSnsService } from './sns.service';
import { config } from '../config/config';
import { AwsSqsService } from './sqs.service';

@Module({
  imports: [
    SqsModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>): SqsOptions => ({
        consumers: [
          {
            name: configService.aws.sqs.name,
            region: configService.aws.region,
            queueUrl: configService.aws.sqs.url,
          },
        ],
        producers: [],
      }),
    }),
  ],
  providers: [AwsSnsService, AwsSqsService],
  exports: [AwsSnsService]
})
export class AwsModule {}
