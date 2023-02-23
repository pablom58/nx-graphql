import { ObjectType, Directive, Field, ID } from '@nestjs/graphql';

@ObjectType('TestOne')
@Directive('@extends')
@Directive('@key(fields: "id")')
export class TestOneReferenceDto {
  @Field(() => ID)
  @Directive('@external')
  id: number;
}
