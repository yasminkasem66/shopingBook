import { Component, Input } from '@angular/core';
import { Recipes } from 'src/app/@AppService/models/recipes';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipe!:Recipes;

}
