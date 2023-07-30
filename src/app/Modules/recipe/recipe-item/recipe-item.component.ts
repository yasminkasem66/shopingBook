import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from 'src/app/@AppService/models/recipes';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!:Recipes;


  ngOnInit(): void {
   console.log(this.recipe);
  }
  
}
