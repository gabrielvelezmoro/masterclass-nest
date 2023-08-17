import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

import { randomUUID } from 'node:crypto';
import { CreateFriendBody } from './dtos/create-friend-body';

@Controller('api')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('friend')
  async getHello(@Body() body: CreateFriendBody) {
    const { name, function: friendFunction } = body;
    const friend = await this.prisma.friend.create({
      data: {
        id: randomUUID(),
        name,
        function: friendFunction,
      },
    });
    return friend;
  }
}
