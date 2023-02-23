import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType()
export abstract class BaseDto {
  @FilterableField(() => Date, { nullable: false })
  createdAt: Date;

  @FilterableField(() => Date, { nullable: true })
  updatedAt: Date;

  @FilterableField(() => Date, { nullable: true })
  deletedAt: Date;
}
