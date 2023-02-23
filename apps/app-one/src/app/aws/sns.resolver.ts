import { Mutation, Resolver } from '@nestjs/graphql';
import { AwsSnsService } from './sns.service';
import { SqsQueues } from './enums/sqs-queues.enum';

@Resolver()
export class AwsSnsResolver {
  constructor(private _awsSnsService: AwsSnsService) {}

  @Mutation(() => Boolean)
  async sendMessage(): Promise<boolean> {
    await this._awsSnsService.sendMessage({ data: { message: "request async task" } }, SqsQueues.ASYNC_TASKS)
    return true;
  }
}
