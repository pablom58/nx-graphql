import { Resolver } from '@nestjs/graphql';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { TestOneB } from './test-one-b.model';
import { TestOneBDto } from './test-one-b.dto';

@Resolver(() => TestOneBDto)
export class TestOneBResolver extends CRUDResolver(TestOneBDto)  {
  constructor(
    @InjectQueryService(TestOneB) private readonly _service: QueryService<TestOneB>
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    super(_service)
  }
}
