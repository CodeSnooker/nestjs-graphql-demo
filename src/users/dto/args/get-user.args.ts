import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsNotEmpty()
  userId: string;
}

@ArgsType()
export class GetUserArgs1 {
  @Field()
  @IsNotEmpty()
  email: string;
}
