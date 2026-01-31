import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
    @ApiProperty({ example: 'Lionel Messi', description: 'Nombre del jugador' })
    name: string;

    @ApiProperty({ example: 'Forward', description: 'Posición del jugador' })
    position: string;

    @ApiProperty({ example: 1, description: 'ID del equipo al que pertenece' })
    teamId: number;
}
