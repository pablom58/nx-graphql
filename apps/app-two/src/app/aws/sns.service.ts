import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import * as AWS from 'aws-sdk'
import { v4 } from 'uuid'
import { config } from '../config/config'
import { SqsQueues } from './enums/sqs-queues.enum';

@Injectable()
export class AwsSnsService implements OnModuleInit{
  private _sns: AWS.SNS

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

    this._sns = new AWS.SNS()
  }

  async sendMessage(data: any, target: SqsQueues): Promise<void> {
    await this._sns
      .publish({
        MessageDeduplicationId: v4(),
        MessageGroupId: v4(),
        Message: JSON.stringify(data),
        TopicArn: this._configService.aws.sns.topicArn,
        MessageAttributes: {
          target: {
            DataType: 'String',
            StringValue: target,
          },
        },
      })
      .promise()
  }
}
