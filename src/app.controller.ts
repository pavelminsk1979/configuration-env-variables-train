import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers() {
    console.log('new');
    console.log('new2');
    return this.appService.getUsers();
  }

  @Get('new')
  async createUsers() {
    return this.appService.createUsers();
  }
}
