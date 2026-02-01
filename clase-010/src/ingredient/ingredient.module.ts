import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { RecipeModule } from '../recipe/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ingredient]),
    RecipeModule, // Needed for simple relation checks if any
  ],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule { }
