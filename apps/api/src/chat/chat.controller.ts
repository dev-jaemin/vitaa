import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChatInferDto } from '@repo/ui/types';
import { Request, Response } from 'express';

import { ChatService } from './chat.service';

@Controller('api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getChatByUserId(@Req() req: Request) {
    return this.chatService.findChatByUserId(req.user.id);
  }

  @Post('/infer')
  @UseGuards(AuthGuard('jwt'))
  async chatInference(@Req() req: Request, @Res() res: Response, @Body() body: ChatInferDto) {
    try {
      console.log(body);
      const questionChat = {
        message: body.message,
        type: 'question',
        userId: req.user.id,
      };
      await this.chatService.saveChat(questionChat);

      const answer = await this.chatService.inferChat({ ...body }, req.user.id);

      const answerChat = {
        message: answer.answer,
        type: 'answer',
        userId: req.user.id,
      };

      await this.chatService.saveChat(answerChat);

      return res.send(answerChat);
    } catch (err) {
      return res.send({ message: err });
    }
  }
}
