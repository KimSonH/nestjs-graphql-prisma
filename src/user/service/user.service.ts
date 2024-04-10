import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/prisma/service'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  public async findMany(option: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prismaService.user.findMany(option)
  }

  public async create(option: Prisma.UserCreateArgs): Promise<User> {
    return this.prismaService.user.create(option)
  }
}
