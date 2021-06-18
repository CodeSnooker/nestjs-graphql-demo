import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Role } from './role.model';

@ObjectType()
export class User {
  @Field()
  userId: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;

  // @Field({ nullable: true })
  // roles?: Role[];
}
