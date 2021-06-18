import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  CreateUserInput,
  GetUserArgs,
  GetUserArgs1,
  GetUserListArgs,
  RemoveUserInput,
  UpdateUserInput,
} from './dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public create(input: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      ...input,
    };
    this.users.push(user);
    return user;
  }

  public update(input: UpdateUserInput): User {
    const user = this.users.find((u) => u.userId === input.userId);
    Object.assign(user, input);
    return user;
  }

  public get(args: GetUserArgs): User {
    return this.users.find((u) => u.userId === args.userId);
  }

  public get1(args: GetUserArgs1): User {
    return this.users.find((u) => u.email === args.email);
  }

  public list(args: GetUserListArgs): User[] {
    return args.userIds.map((userId) => this.get({ userId }));
  }

  public remove(args: RemoveUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === args.userId,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex);
    return user;
  }
}
