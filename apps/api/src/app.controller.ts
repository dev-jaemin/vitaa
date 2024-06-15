import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // health check
  @Get('api/hello')
  get() {
    return 'health check';
  }
}
