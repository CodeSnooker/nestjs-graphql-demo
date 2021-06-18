import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field()
  type: string;

  @Field()
  salary: number;
}
