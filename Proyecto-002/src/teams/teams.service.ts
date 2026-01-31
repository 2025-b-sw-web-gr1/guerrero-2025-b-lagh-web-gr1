import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

@Injectable()
export class TeamsService {
    constructor(
        @InjectRepository(Team)
        private readonly teamRepository: Repository<Team>,
    ) { }

    findAll() {
        return this.teamRepository.find();
    }

    async findOne(id: number) {
        const team = await this.teamRepository.findOne({ where: { id }, relations: ['players'] });
        if (!team) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }
        return team;
    }

    create(data: Partial<Team>) {
        const team = this.teamRepository.create(data);
        return this.teamRepository.save(team);
    }

    async update(id: number, data: Partial<Team>) {
        const team = await this.findOne(id); // Ensure exists
        this.teamRepository.merge(team, data);
        return this.teamRepository.save(team);
    }

    async remove(id: number) {
        const team = await this.findOne(id); // Ensure exists
        return this.teamRepository.remove(team);
    }
}
