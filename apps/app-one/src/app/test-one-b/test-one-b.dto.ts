import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { BaseDto } from '@test/core-lib';
import { TestOneDto } from '../test-one/test-one.dto';

@ObjectType('TestOneB')
@Directive('@key(fields: "id")')
@Relation('testOne', () => TestOneDto, { disableRemove: true })
export class TestOneBDto extends BaseDto{
  @FilterableField(() => ID)
  id : string;

  @Field()
  name : string;

  @FilterableField()
  testOneId: number;
}
