import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { SqsMessageHandler } from '@ssut/nestjs-sqs'
import { ConfigType } from '@nestjs/config';
import * as AWS from 'aws-sdk'
import { config } from '../config/config';
import { SqsQueues } from './enums/sqs-queues.enum';

@Injectable()
export class AwsSqsService implements OnModuleInit{

  constructor(
    @Inject(config.KEY)
    private _configService: ConfigType<typeof config>
  ) {}

  onModuleInit() {
    const { region, accessKeyId, secretAccessKey } = this._configService.aws

    AWS.config.update({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    })

  }

  @SqsMessageHandler(SqsQueues.ASYNC_RESPONSE)
  async updateGuestSessions(message: AWS.SQS.Message) {
    console.log('TASK RESPONSE', JSON.parse(message.Body))
  }
}
