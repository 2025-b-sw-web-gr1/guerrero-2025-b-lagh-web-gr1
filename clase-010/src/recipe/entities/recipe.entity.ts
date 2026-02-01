import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ingredient } from '../../ingredient/entities/ingredient.entity';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, {
        cascade: true,
    })
    ingredients: Ingredient[];
}
