import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';

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

    create(data: Partial<Player>) {
        const player = this.playerRepository.create(data);
        return this.playerRepository.save(player);
    }

    async update(id: number, data: Partial<Player>) {
        const player = await this.findOne(id);
        this.playerRepository.merge(player, data);
        return this.playerRepository.save(player);
    }

    async remove(id: number) {
        const player = await this.findOne(id);
        return this.playerRepository.remove(player);
    }
}
