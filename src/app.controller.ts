import { Body, Controller, Post } from '@nestjs/common';
import { CreateFriendBody } from './dtos/create-friend-body';
import { FriendRepository } from './repositories/friend-repository';

@Controller('api')
export class AppController {
  constructor(private friendRepository: FriendRepository) {}

  @Post('friend')
  async getHello(@Body() body: CreateFriendBody) {
    const { name, function: friendFunction } = body;
    await this.friendRepository.create(name, friendFunction);
  }
}
