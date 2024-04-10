import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field(() => String, {
    nullable: false,
    description: 'user name'
  })
  username: string

  @Field(() => String, {
    nullable: true,
    description: "User's description"
  })
  description?: string
}
