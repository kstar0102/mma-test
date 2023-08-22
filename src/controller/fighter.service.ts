import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from '../entity/fighter.entity';
import { CreateFighterDto } from '../dto/create-fighter.dto';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
  ) {}

  async findOne(id: number) {
    return this.fighterRepository.findOne(id);
  }

  async create(createFighterDto: CreateFighterDto) {
    const fighter = this.fighterRepository.create(createFighterDto);
    return this.fighterRepository.save(fighter);
  }
}
