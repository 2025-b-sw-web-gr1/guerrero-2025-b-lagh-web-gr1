import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from '../entities/team.entity';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Get()
    findAll() {
        return this.teamsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.teamsService.findOne(id);
    }

    @Post()
    create(@Body() data: Partial<Team>) {
        return this.teamsService.create(data);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Team>) {
        return this.teamsService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.teamsService.remove(id);
    }

    @Get(':id/players')
    async getPlayers(@Param('id', ParseIntPipe) id: number) {
        const team = await this.teamsService.findOne(id);
        return team.players;
    }
}
