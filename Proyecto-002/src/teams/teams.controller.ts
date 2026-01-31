import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los equipos' })
    @ApiResponse({ status: 200, description: 'Lista de equipos' })
    findAll() {
        return this.teamsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un equipo por ID' })
    @ApiResponse({ status: 200, description: 'Equipo encontrado' })
    @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.teamsService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear un equipo' })
    @ApiResponse({ status: 201, description: 'Equipo creado' })
    create(@Body() data: CreateTeamDto) {
        return this.teamsService.create(data);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un equipo' })
    @ApiResponse({ status: 200, description: 'Equipo actualizado' })
    update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTeamDto) {
        return this.teamsService.update(id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un equipo' })
    @ApiResponse({ status: 200, description: 'Equipo eliminado' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.teamsService.remove(id);
    }

    @Get(':id/players')
    @ApiOperation({ summary: 'Obtener jugadores de un equipo específico' })
    @ApiResponse({ status: 200, description: 'Lista de jugadores del equipo' })
    async getPlayers(@Param('id', ParseIntPipe) id: number) {
        const team = await this.teamsService.findOne(id);
        return team.players;
    }
}
