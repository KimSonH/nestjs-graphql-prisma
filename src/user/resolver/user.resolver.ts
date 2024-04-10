import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '../model'
import { UserService } from '../service/user.service'
import { CreateUserInput } from '../input'

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.findMany({})
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create({ data: createUserInput })
  }
}
