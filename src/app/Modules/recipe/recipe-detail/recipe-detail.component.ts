import { Component, Input } from '@angular/core';
import { RecipesModel } from 'src/app/@AppService/models/recipes-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe!:RecipesModel;

}
