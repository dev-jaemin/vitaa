import { Controller, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/:chatId')
  getChat(@Param('chatId') chatId: number) {
    return this.chatService.getChat(chatId);
  }
}
