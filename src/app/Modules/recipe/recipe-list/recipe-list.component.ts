import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/@AppService/Services/recipes.service';
import { RecipesModel } from 'src/app/@AppService/models/recipes';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

   recipes$:Observable< RecipesModel[]>=this.recipesService.getRecipes();

   constructor(private recipesService:RecipesService){

   }
 



}
