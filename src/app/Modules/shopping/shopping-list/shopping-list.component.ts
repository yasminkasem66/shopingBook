import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from 'src/app/@AppService/Services/recipes.service';
import { RecipesModel } from 'src/app/@AppService/models/recipes-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
 ingredients$!:Observable< RecipesModel[]>;

constructor(private recipesService:RecipesService){
 this.ingredients$=this.recipesService.getRecipes();
}

}
