import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/@AppService/Services/recipes.service';
import { Recipes } from 'src/app/@AppService/models/recipes';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
 ingredients$!:Observable< Recipes[]>;

constructor(private recipesService:RecipesService){
 this.ingredients$=this.recipesService.getRecipes();
}

}
