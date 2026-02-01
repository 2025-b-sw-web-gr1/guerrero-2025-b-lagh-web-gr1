import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(Recipe)
        private readonly recipeRepository: Repository<Recipe>,
    ) { }

    async create(createRecipeDto: CreateRecipeDto) {
        const recipe = this.recipeRepository.create(createRecipeDto);
        return await this.recipeRepository.save(recipe);
    }

    async findAll() {
        return await this.recipeRepository.find({ relations: ['ingredients'] });
    }

    async findOne(id: number) {
        const recipe = await this.recipeRepository.findOne({
            where: { id },
            relations: ['ingredients'],
        });
        if (!recipe) {
            throw new NotFoundException(`Recipe with ID ${id} not found`);
        }
        return recipe;
    }

    async update(id: number, updateRecipeDto: UpdateRecipeDto) {
        const recipe = await this.findOne(id);
        this.recipeRepository.merge(recipe, updateRecipeDto);
        return await this.recipeRepository.save(recipe);
    }

    async remove(id: number) {
        const recipe = await this.findOne(id);
        return await this.recipeRepository.remove(recipe);
    }
}
