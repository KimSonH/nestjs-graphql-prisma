import { Module } from '@nestjs/common'
import { UserResolver } from './resolver'
import { UserService } from './service/user.service'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
  exports: [UserResolver, UserService]
})
export class UserModule {}
