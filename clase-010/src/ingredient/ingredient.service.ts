import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';
import { Recipe } from '../recipe/entities/recipe.entity';

@Injectable()
export class IngredientService {
    constructor(
        @InjectRepository(Ingredient)
        private readonly ingredientRepository: Repository<Ingredient>,
    ) { }

    async create(createIngredientDto: CreateIngredientDto) {
        const ingredient = this.ingredientRepository.create({
            ...createIngredientDto,
            recipe: { id: createIngredientDto.recipeId } as Recipe,
        });
        return await this.ingredientRepository.save(ingredient);
    }

    async findAll() {
        return await this.ingredientRepository.find({ relations: ['recipe'] });
    }

    async findOne(id: number) {
        const ingredient = await this.ingredientRepository.findOne({
            where: { id },
            relations: ['recipe'],
        });
        if (!ingredient) {
            throw new NotFoundException(`Ingredient with ID ${id} not found`);
        }
        return ingredient;
    }

    async update(id: number, updateIngredientDto: UpdateIngredientDto) {
        const ingredient = await this.findOne(id);
        const { recipeId, ...rest } = updateIngredientDto;

        this.ingredientRepository.merge(ingredient, rest);

        if (recipeId) {
            ingredient.recipe = { id: recipeId } as Recipe;
        }

        return await this.ingredientRepository.save(ingredient);
    }

    async remove(id: number) {
        const ingredient = await this.findOne(id);
        return await this.ingredientRepository.remove(ingredient);
    }
}
