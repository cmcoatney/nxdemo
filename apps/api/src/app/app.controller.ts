import { Controller, Get } from '@nestjs/common';

import { Slide } from '@podname/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  // getData(): Message {
  //   return this.appService.getData();
  // }

  @Get('slides')
  getData(): Slide[] {
    return this.appService.getData();
  }
}
