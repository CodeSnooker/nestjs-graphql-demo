import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateUserInput,
  GetUserListArgs,
  RemoveUserInput,
  UpdateUserInput,
} from './dto';
import { GetUserArgs, GetUserArgs1 } from './dto/args/get-user.args';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly service: UsersService) {}

  @Query(() => User, { name: 'getById', nullable: true })
  get(@Args() args: GetUserArgs) {
    return this.service.get(args);
  }

  @Query(() => User, { name: 'getByEmail', nullable: true })
  get1(@Args() args: GetUserArgs1) {
    return this.service.get1(args);
  }

  @Query(() => [User], { name: 'getList', nullable: 'items' })
  list(@Args() args: GetUserListArgs) {
    return this.service.list(args);
  }

  @Mutation(() => User)
  create(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.service.create(createUserData);
  }

  @Mutation(() => User)
  update(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.service.update(updateUserData);
  }

  @Mutation(() => User)
  remove(@Args('removeUserData') removeUserData: RemoveUserInput) {
    return this.service.remove(removeUserData);
  }
}
