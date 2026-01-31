import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlayerDto {
    @ApiProperty({ example: 'Lionel Messi', description: 'Nombre del jugador', required: false })
    name?: string;

    @ApiProperty({ example: 'Forward', description: 'Posición del jugador', required: false })
    position?: string;

    @ApiProperty({ example: 1, description: 'ID del equipo al que pertenece', required: false })
    teamId?: number;
}
