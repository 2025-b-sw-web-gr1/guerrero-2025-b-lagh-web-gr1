import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from '../entities/player.entity';

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { }

    @Get()
    findAll() {
        return this.playersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.playersService.findOne(id);
    }

    @Post()
    create(@Body() data: Partial<Player>) {
        return this.playersService.create(data);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Player>) {
        return this.playersService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.playersService.remove(id);
    }
}
