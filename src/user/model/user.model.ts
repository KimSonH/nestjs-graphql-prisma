import { Field, Int, ObjectType } from '@nestjs/graphql'
import { User as UserClient } from '@prisma/client'

@ObjectType()
export class User implements UserClient {
  @Field(() => Int)
  id: number

  @Field(() => String)
  username: string

  @Field(() => String)
  createdAt: Date

  @Field(() => String, {
    nullable: true,
    description: "User's description"
  })
  description: string
}
