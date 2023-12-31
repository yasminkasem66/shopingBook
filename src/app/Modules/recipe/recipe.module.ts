import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecepiesCommentsComponent } from './recepies-comments/recepies-comments.component';
 

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecepiesCommentsComponent
   ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
