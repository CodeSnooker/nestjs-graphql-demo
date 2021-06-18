import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
// import { Role } from 'src/users/models/role.model';

// export class CreateRoleInput {
//   @Field()
//   @IsNotEmpty()
//   type: string

//   @Field()
//   @IsNotEmpty()
//   salary: number
// }

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  age: number;

  // @Field()
  // roles: Role[]
}
