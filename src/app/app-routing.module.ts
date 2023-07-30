import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipe', 
    loadChildren: () => import('../app/Modules/recipe/recipe.module').then(m => m.RecipeModule)
  },
  {
    path: 'shopping', 
    loadChildren: () => import('../app/Modules/shopping/shopping.module').then(m => m.ShoppingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
