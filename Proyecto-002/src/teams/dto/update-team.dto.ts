import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamDto {
    @ApiProperty({ example: 'FC Barcelona Updated', description: 'Nombre del equipo', required: false })
    name?: string;

    @ApiProperty({ example: 'Spain', description: 'País del equipo', required: false })
    country?: string;
}
