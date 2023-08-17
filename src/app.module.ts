import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PrismaService } from './database/prisma.service';
import { FriendRepository } from './repositories/friend-repository';
import { PrismaFriendRepository } from './repositories/prisma/prismaFriendRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    { provide: FriendRepository, useClass: PrismaFriendRepository },
  ],
})
export class AppModule {}
