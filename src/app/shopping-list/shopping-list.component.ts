import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private sLService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.sLService.getIngredient();
    this.sLService.ingridentChanged.subscribe(
      (ingridents: Ingredient[]) => {
        this.ingredients = ingridents;
      }
    )
  }



}
