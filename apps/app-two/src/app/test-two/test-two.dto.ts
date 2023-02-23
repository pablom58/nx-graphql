import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, Reference } from '@nestjs-query/query-graphql';
import { BaseDto } from '@test/core-lib';
import { TestOneReferenceDto } from './test-one-reference.dto';

@ObjectType('TestTwo')
@Directive('@key(fields: "id")')
@Reference('testOne', () => TestOneReferenceDto, { id: 'testOneId' })
export class TestTwoDto extends BaseDto{
  @FilterableField(() => ID)
  id : string;

  @Field()
  name : string;

  @FilterableField()
  testOneId: number;
}
