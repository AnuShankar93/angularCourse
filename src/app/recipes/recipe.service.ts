import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chilly Chicken',
      'This is simply a test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg',
      [new Ingredient('chicken', 1),
      new Ingredient('Chilly', 10)]),
    new Recipe(
      'Beef Roast',
      'This is simply a test',
      'https://thestayathomechef.com/wp-content/uploads/2019/01/Braised-Pot-Roast-1-500x500.jpg',
      [new Ingredient('Beef', 1),
      new Ingredient('Oil', 0)])
  ];

  constructor(private slService: ShoppinglistService) {

  }

  getRecipe() {
    return this.recipes.slice();
  }

  onAddIngriedentsShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
