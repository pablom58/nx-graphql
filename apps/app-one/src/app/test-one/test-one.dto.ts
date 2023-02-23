import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';
import { BaseDto } from '@test/core-lib';

@ObjectType('TestOne')
@Directive('@key(fields: "id")')
export class TestOneDto extends BaseDto{
  @FilterableField(() => ID)
  id : string;

  @Field()
  name : string;
}
