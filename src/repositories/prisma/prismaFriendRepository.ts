import { PrismaService } from 'src/database/prisma.service';
import { FriendRepository } from '../friend-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaFriendRepository implements FriendRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, frindFunction: string): Promise<void> {
    await this.prisma.friend.create({
      data: { id: randomUUID(), name, function: frindFunction },
    });
  }
}
