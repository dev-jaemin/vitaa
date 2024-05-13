import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';

@Injectable()
export class ChatService {
  constructor(@InjectRepository(Chat) private mealRepository: Repository<Chat>) {}

  getChat(chatId: number) {
    return this.mealRepository.findOne({ where: { id: chatId } });
  }
}
