import { Component, Input, OnInit } from '@angular/core';
import { RecipesModel } from 'src/app/@AppService/models/recipes-model';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!:RecipesModel;


  ngOnInit(): void {
   console.log(this.recipe);
   initFlowbite();

  }
  
}
