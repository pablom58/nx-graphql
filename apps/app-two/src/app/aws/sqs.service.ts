import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { SqsMessageHandler } from '@ssut/nestjs-sqs'
import { ConfigType } from '@nestjs/config';
import * as AWS from 'aws-sdk'
import { config } from '../config/config';
import { AwsSnsService } from './sns.service';
import { SqsQueues } from './enums/sqs-queues.enum';
import * as GoogleTrends from 'google-trends-api'

@Injectable()
export class AwsSqsService implements OnModuleInit{

  constructor(
    @Inject(config.KEY)
    private _configService: ConfigType<typeof config>,
    private _awsSnsService: AwsSnsService
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

  @SqsMessageHandler(SqsQueues.ASYNC_TASKS)
  async updateGuestSessions(message: AWS.SQS.Message) {
    console.log('TASK HERE', message)
    const response = await GoogleTrends.interestOverTime({ keyword: 'Valentines Day' })
    await this._awsSnsService.sendMessage(response, SqsQueues.ASYNC_RESPONSE)
  }
}
