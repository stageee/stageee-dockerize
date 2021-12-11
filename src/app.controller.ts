import { PrismaService } from './prisma/prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Food } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('foods')
  getFoods(): Promise<Food[]> {
    return this.prismaService.food.findMany();
  }

  @Post('foods')
  async postFood(@Body() food: Food) {
    return await this.prismaService.food.create({data: food});
  }
}
