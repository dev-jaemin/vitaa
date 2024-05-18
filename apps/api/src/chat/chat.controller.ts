import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { AuthGuard } from '@nestjs/passport';
import { ChatInferDto } from '@repo/ui/types';
import { Request, Response } from 'express';

@Controller('chat')
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
      const a = await this.chatService.inferChat({ ...body }, req.user.id);
      console.log(a);
      // this.chatService.postChat({ ...body });
      return res.send({ message: 'success' });
    } catch (err) {
      return res.send({ message: 'error' });
    }
  }
}
