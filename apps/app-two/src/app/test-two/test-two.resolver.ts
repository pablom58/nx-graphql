import { Resolver } from '@nestjs/graphql';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { TestTwo } from './test-two.model';
import { TestTwoDto } from './test-two.dto';

@Resolver(() => TestTwoDto)
export class TestTwoResolver extends CRUDResolver(TestTwoDto){
  constructor(
    @InjectQueryService(TestTwo) private readonly _service: QueryService<TestTwoDto>
  ) {
    super(_service)
  }
}
