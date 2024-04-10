import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super()
    this.$use(async (params, next) => {
      if (params.action === 'delete') {
        params.action = 'update'
        params.args['data'] = { deletedAt: new Date() }
      } else if (params.action === 'deleteMany') {
        params.action = 'updateMany'
        if (params.args.data !== undefined) {
          params.args.data['deletedAt'] = new Date()
        } else {
          params.args['data'] = { deletedAt: new Date() }
        }
      }

      return next(params)
    })
  }

  async onModuleInit() {
    await this.$connect()
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close()
    })
  }
}
