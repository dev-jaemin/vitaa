import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { ChatDto, ChatInferDto } from '@repo/ui/types';
import { User } from 'src/auth/user.entity';
import { inferenceAxiosInstance } from 'src/common/service/axiosInstance';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findChatByUserId(userId: number) {
    return this.chatRepository.find({ where: { userId } });
  }

  async inferChat(chat: ChatInferDto, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const bodyForInference = {
      chat: chat.message,
      day_nutrient: chat.dayNutrient,
      user_data: {
        gender: user.gender,
        age: user.age,
        height: user.height,
        weight: user.weight,
        goal: user.goal,
      },
    };

    const { data: inferenceData } = await inferenceAxiosInstance.post('/chat_infer', bodyForInference);
    return inferenceData;
  }

  async saveChat(chat: ChatDto) {
    return this.chatRepository.save(chat);
  }

  // async PostChat
}
