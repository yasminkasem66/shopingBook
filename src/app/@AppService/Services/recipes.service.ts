import { Injectable } from '@angular/core';
import { RecipesModel } from '../models/recipes-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, ServicesUrls } from '../ServiceUrl';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 
  constructor(private httpClient:HttpClient) { }

  getRecipes(): Observable<RecipesModel[]>{
    const API_LINK=`${API_URL}${ServicesUrls.GET_RECIPES}`
    return  this.httpClient.get<RecipesModel[]>(API_LINK);
  }
}
