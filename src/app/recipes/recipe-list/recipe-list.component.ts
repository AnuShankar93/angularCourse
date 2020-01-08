import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biriyani',
    'Delecious food' ,
    'https://www.thespruceeats.com/thmb/LjRrH9oFj7xSqL6yyVvS2qb9FFw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
