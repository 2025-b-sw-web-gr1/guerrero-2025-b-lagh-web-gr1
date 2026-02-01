import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIngredientDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    amount: string;

    @IsNumber()
    @IsNotEmpty()
    recipeId: number;
}
