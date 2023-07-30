import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/@AppService/Services/recipes.service';
import { Recipes } from 'src/app/@AppService/models/recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  //  @Input() recipes!: Recipes[];

   recipes$!:Observable< Recipes[]>;

   constructor(private recipesService:RecipesService){
    this.recipes$=this.recipesService.getRecipes();
   }
 



}
