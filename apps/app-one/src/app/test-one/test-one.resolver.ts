import { Resolver } from '@nestjs/graphql';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { TestOneDto } from './test-one.dto';
import { TestOne } from './test-one.model';

@Resolver(() => TestOneDto)
export class TestOneResolver extends CRUDResolver(TestOneDto, {
  referenceBy: { key: 'id' }
}) {
  constructor(
    @InjectQueryService(TestOne) private readonly _service: QueryService<TestOne>
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    super(_service);
  }

}
