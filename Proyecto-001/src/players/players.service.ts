import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Player)
        private readonly playerRepository: Repository<Player>,
    ) { }

    findAll() {
        return this.playerRepository.find({ relations: ['team'] });
    }

    async findOne(id: number) {
        const player = await this.playerRepository.findOne({ where: { id }, relations: ['team'] });
        if (!player) {
            throw new NotFoundException(`Player with ID ${id} not found`);
        }
        return player;
    }

    create(data: CreatePlayerDto) {
        const { teamId, ...params } = data;
        const player = this.playerRepository.create({
            ...params,
            team: { id: teamId },
        });
        return this.playerRepository.save(player);
    }

    async update(id: number, data: UpdatePlayerDto) {
        const player = await this.findOne(id);
        const { teamId, ...params } = data;

        if (teamId) {
            player.team = { id: teamId } as any;
        }
        this.playerRepository.merge(player, params);
        return this.playerRepository.save(player);
    }

    async remove(id: number) {
        const player = await this.findOne(id);
        return this.playerRepository.remove(player);
    }
}
