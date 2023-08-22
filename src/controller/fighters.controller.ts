import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { CreateFighterDto } from '../dto/create-fighter.dto';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fighterService: FighterService) {}

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.fighterService.findOne(id);
  }

  @Post()
  async create(@Body() createFighterDto: CreateFighterDto) {
    return this.fighterService.create(createFighterDto);
  }
}
